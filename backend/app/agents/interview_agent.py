from app.data.scenarios import SCENARIOS

from app.services.llm_service import (
    generate_followup
)


class InterviewAgent:

    def start(
        self,
        scenario: str
    ):

        return SCENARIOS.get(
            scenario,
            SCENARIOS["HR Interview"]
        )["opening"]

    def respond(
        self,
        message: str,
        history: list,
        scenario: str
    ):

        return generate_followup(
            scenario,
            history,
            message
        )