from jose import jwt
from datetime import datetime, timedelta

SECRET_KEY = "kaizen_super_secret_key"

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