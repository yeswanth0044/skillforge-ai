def analyze_answer(answer: str):

    length = len(answer.split())

    communication = min(100, 50 + length)

    confidence = 75

    clarity = 80

    return {
        "communication": communication,
        "confidence": confidence,
        "clarity": clarity
    }