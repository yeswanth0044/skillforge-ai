from app.services.session_service import (
    create_session,
    add_message,
    get_history,
    get_session,
    save_interview_result,
    get_interview_results,
    get_dashboard_stats,
    delete_interview_result
)
from app.services.jwt_service import (
    create_access_token
)
from app.models.auth_schemas import (
    SignupRequest,
    LoginRequest
)
from bson import ObjectId
from app.services.auth_service import (
    create_user,
    verify_user
)
from app.services.live_feedback_service import (
    generate_live_feedback
)
from app.services.analysis_service import (
    analyze_answer
)
from fastapi import APIRouter

from app.models.schemas import (
    SessionStartRequest,
    ChatRequest
)

from app.services.session_service import (
    create_session,
    add_message,
    get_history,
    get_session,
    save_interview_result,
    get_interview_results,
    get_dashboard_stats
)

from app.agents.interview_agent import (
    InterviewAgent
)

from app.agents.feedback_agent import (
    FeedbackAgent
)

router = APIRouter()

agent = InterviewAgent()
feedback_agent = FeedbackAgent()


@router.post("/start-session")
def start_session(
    request: SessionStartRequest
):

    session_id = create_session(
    request.scenario,
    request.email
)

    question = agent.start(
        request.scenario
    )

    add_message(
        session_id,
        "assistant",
        question
    )

    return {
        "session_id": session_id,
        "question": question
    }


@router.post("/chat")
def chat(
    request: ChatRequest
):

    add_message(
        request.session_id,
        "user",
        request.message
    )

    history = get_history(
        request.session_id
    )

    session = get_session(
        request.session_id
    )

    reply = agent.respond(
        request.message,
        history,
        session["scenario"]
    )
    analysis = generate_live_feedback(
    request.message
    )

    add_message(
        request.session_id,
        "assistant",
        reply
    )

    return {
    "reply": reply,
    "communication": analysis["communication"],
    "confidence": analysis["confidence"],
    "clarity": analysis["clarity"],
    "strength": analysis["strength"],
    "improvement": analysis["improvement"]
    }


@router.get("/feedback/{session_id}")
def feedback(
    session_id: str
):

    history = get_history(
        session_id
    )

    if len(history) == 0:
        return {
            "overall_score": 0,
            "communication": 0,
            "confidence": 0,
            "clarity": 0,
            "strengths": [],
            "improvements": [],
            "summary": "Session expired. Please start a new interview."
        }

    session = get_session(
        session_id
    )

    result = feedback_agent.generate_feedback(
        history
    )

    save_interview_result({
    "user_email": session["user_email"],
    "scenario": session["scenario"],
    "score": result["overall_score"],
    "communication": result["communication"],
    "confidence": result["confidence"],
    "clarity": result["clarity"],
    "strengths": result["strengths"],
    "improvements": result["improvements"],
    "summary": result["summary"]
})

    return result
@router.get("/history/{email}")
def history(email: str):

    return get_interview_results(email)
@router.delete("/history/{interview_id}")
def delete_interview(interview_id: str):

    delete_interview_result(
        interview_id
    )

    return {
        "success": True
    }
@router.post("/signup")
def signup(
    request: SignupRequest
):

    user = create_user(
        request.name,
        request.email,
        request.password
    )

    if not user:
        return {
            "success": False,
            "message": "Email already exists"
        }

    return {
        "success": True,
        "message": "Account created successfully"
    }
@router.post("/login")
def login(
    request: LoginRequest
):

    user = verify_user(
        request.email,
        request.password
    )

    if not user:
        return {
            "success": False,
            "message": "Invalid credentials"
        }

    token = create_access_token({
        "email": user["email"]
    })

    return {
        "success": True,
        "token": token,
        "name": user["name"],
        "email": user["email"]
    }
@router.get("/dashboard/{email}")
def dashboard(email: str):

    return get_dashboard_stats(email)
