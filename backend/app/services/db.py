import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

MONGO_URL = os.getenv("mongodb+srv://yeswanthkocherla73_db_user:Bujjamma1432@cluster0.bfhl1il.mongodb.net/?appName=Cluster0")

client = MongoClient(MONGO_URL)

db = client["kaizen_db"]

users_collection = db["users"]
history_collection = db["history"]

print("✅ MongoDB Connected")