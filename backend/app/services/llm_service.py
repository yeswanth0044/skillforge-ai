import google.generativeai as genai

from app.core.config import GEMINI_API_KEY

# Configure Gemini
genai.configure(
    api_key=GEMINI_API_KEY
)

# Load Model
model = genai.GenerativeModel(
    "gemini-2.5-flash-lite"
)

print(
    "Gemini Key Loaded:",
    GEMINI_API_KEY is not None
)


def generate_followup(
    scenario: str,
    history: list,
    user_message: str
):

    conversation = ""

    for msg in history:
        conversation += (
            f"{msg['role']}: "
            f"{msg['content']}\n"
        )

    prompt = f"""
You are an expert soft skills coach and interviewer.

Scenario:
{scenario}

Conversation History:
{conversation}

Latest Student Answer:
{user_message}

Instructions:

1. Understand the student's answer.
2. Ask ONE relevant follow-up question.
3. Be professional and conversational.
4. Keep the response under 60 words.
5. Do not repeat previous questions.
6. Challenge vague answers politely.
7. Sound like a real interviewer.

Return ONLY the next question.
"""

    try:

        response = model.generate_content(
            prompt
        )

        if (
            response
            and hasattr(response, "text")
            and response.text
        ):
            return response.text.strip()

        return (
            "That's interesting. "
            "Can you tell me more about your experience?"
        )

    except Exception as e:

        print(
            "Gemini Error:",
            str(e)
        )

        return (
            "That's interesting. "
            "Can you tell me more about your experience?"
        )