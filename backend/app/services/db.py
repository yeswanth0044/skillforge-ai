from pymongo import MongoClient

MONGO_URL = "mongodb+srv://yeswanthkocherla73_db_user:Bujjamma1432@cluster0.bfhl1il.mongodb.net/?appName=Cluster0"

client = MongoClient(MONGO_URL)

db = client["kaizen_db"]

users_collection = db["users"]
history_collection = db["history"]


print("✅ MongoDB Connected")