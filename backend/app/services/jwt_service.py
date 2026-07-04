import os
from dotenv import load_dotenv
from jose import jwt
from datetime import datetime, timedelta

load_dotenv()

SECRET_KEY = os.getenv("JWT_SECRET")

ALGORITHM = "HS256"


def create_access_token(data):
    payload = data.copy()

    payload["exp"] = (
        datetime.utcnow()
        + timedelta(days=7)
    )

    token = jwt.encode(
        payload,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

    return token