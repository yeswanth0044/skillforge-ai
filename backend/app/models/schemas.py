from pydantic import BaseModel
from typing import List


class SessionStartRequest(BaseModel):
    scenario: str
    email: str

class SessionStartResponse(BaseModel):
    session_id: str
    question: str


class ChatRequest(BaseModel):
    session_id: str
    message: str


class ChatResponse(BaseModel):
    reply: str


class FeedbackResponse(BaseModel):
    confidence: int
    clarity: int
    structure: int
    strengths: List[str]
    improvements: List[str]