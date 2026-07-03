import json

from app.services.llm_service import model


def generate_feedback_report(history: list):

    conversation = ""

    for msg in history:
        conversation += (
            f"{msg['role']}: "
            f"{msg['content']}\n"
        )

    prompt = f"""
You are an expert interview evaluator.

Analyze the interview conversation.

Conversation:
{conversation}

Return ONLY valid JSON.

Format:

{{
    "overall_score": 0,
    "communication": 0,
    "confidence": 0,
    "clarity": 0,
    "strengths": [
        "",
        ""
    ],
    "improvements": [
        "",
        ""
    ],
    "summary": ""
}}

Scores must be between 0 and 100.
"""

    try:
        response = model.generate_content(prompt)
        print("GEMINI REPORT GENERATED SUCCESSFULLY")

        text = response.text.strip()

        print("========== GEMINI RESPONSE ==========")
        print(text)
        print("====================================")

        text = text.replace("```json", "")
        text = text.replace("```", "")
        text = text.strip()

        return json.loads(text)

    except Exception as e:

        print("\n")
        print("========== FEEDBACK ERROR ==========")
        print("ERROR TYPE:", type(e))
        print("ERROR:", str(e))
        print("====================================")
        print("\n")
        return {
            "overall_score": 70,
            "communication": 70,
            "confidence": 70,
            "clarity": 70,
            "strengths": [
                "Participated in interview"
            ],
            "improvements": [
                "Provide more detailed answers"
            ],
            "summary": "Feedback generation failed."
        }