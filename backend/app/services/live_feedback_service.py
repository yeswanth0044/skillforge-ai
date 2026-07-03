import json

from app.services.llm_service import model


def generate_live_feedback(answer: str):

    prompt = f"""
You are an expert communication coach.

Evaluate this interview answer:

{answer}

Return ONLY valid JSON.

{{
    "communication": 0,
    "confidence": 0,
    "clarity": 0,
    "strength": "",
    "improvement": ""
}}

Scores must be between 0 and 100.
"""

    try:

        response = model.generate_content(
            prompt
        )

        text = response.text.strip()

        text = text.replace(
            "```json",
            ""
        )

        text = text.replace(
            "```",
            ""
        )

        text = text.strip()

        return json.loads(text)

    except Exception as e:

        print(
            "Live Feedback Error:",
            str(e)
        )

        return {
            "communication": 75,
            "confidence": 75,
            "clarity": 75,
            "strength":
                "Good participation",
            "improvement":
                "Provide more details"
        }