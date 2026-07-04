import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL")

client = MongoClient(MONGO_URL)

db = client["kaizen_db"]

users_collection = db["users"]
history_collection = db["history"]

print("✅ MongoDB connection established successfully.")
print(f"📂 Connected Database : {db.name}")
print(f"📑 Collections Found : {db.list_collection_names()}")