import uuid
from app.services.db import history_collection
from bson import ObjectId

def delete_interview_result(interview_id):

    history_collection.delete_one(
        {"_id": ObjectId(interview_id)}
    )

sessions = {}

interview_results = []
import uuid

sessions = {}


def create_session(scenario, email):

    session_id = str(uuid.uuid4())

    sessions[session_id] = {
        "scenario": scenario,
        "user_email": email,
        "history": []
    }

    return session_id

def add_message(
    session_id: str,
    role: str,
    content: str
):

    sessions[session_id]["history"].append(
        {
            "role": role,
            "content": content
        }
    )


def get_history(
session_id: str
):


    if session_id not in sessions:
        return []

    return sessions[session_id]["history"]



def get_session(
session_id: str
):


    if session_id not in sessions:
        return {
        "scenario": "Unknown",
        "history": []
    }

    return sessions[session_id]



from datetime import datetime


def save_interview_result(result):

    result["created_at"] = datetime.now()

    print("SAVING RESULT:", result)

    history_collection.insert_one(result)
def get_interview_results(email):

    results = list(
        history_collection.find(
            {"user_email": email}
        )
    )

    for result in results:
        result["_id"] = str(result["_id"])

    return results

def get_dashboard_stats(email):

    results = list(
        history_collection.find(
            {"user_email": email},
            {"_id": 0}
        )
    )

    if len(results) == 0:
        return {
            "total_interviews": 0,
            "average_score": 0,
            "best_score": 0
        }

    total = len(results)

    scores = [
        item["score"]
        for item in results
    ]

    average_score = round(
        sum(scores) / total
    )

    best_score = max(scores)

    return {
        "total_interviews": total,
        "average_score": average_score,
        "best_score": best_score
    }