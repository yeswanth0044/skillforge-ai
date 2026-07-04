import bcrypt

from app.services.db import users_collection


def create_user(name, email, password):

    existing = users_collection.find_one({
        "email": email
    })

    if existing:
        print("User already exists")
        return None

    hashed_password = bcrypt.hashpw(
        password.encode(),
        bcrypt.gensalt()
    )

    user = {
        "name": name,
        "email": email,
        "password": hashed_password.decode()
    }

    result = users_collection.insert_one(user)

    print("Inserted ID:", result.inserted_id)

    return user


def verify_user(email, password):

    user = users_collection.find_one({
        "email": email
    })

    if not user:
        return None

    if bcrypt.checkpw(
        password.encode(),
        user["password"].encode()
    ):
        return user

    return None