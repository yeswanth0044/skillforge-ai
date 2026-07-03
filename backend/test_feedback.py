from app.services.llm_service import model

response = model.generate_content(
    """
    Return ONLY this JSON:

    {
      "overall_score": 85,
      "communication": 80
    }
    """
)

print(response.text)