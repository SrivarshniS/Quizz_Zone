import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);
let db;

export async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db("quiz");
    console.log("MongoDB connected");
  }
  return db;
}
