from app.services.feedback_service import (
    generate_feedback_report
)


class FeedbackAgent:

    def generate_feedback(
        self,
        history: list
    ):

        return generate_feedback_report(
            history
        )