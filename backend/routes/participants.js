import express from "express";
import { connectDB } from "../db.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.post("/join", async (req, res) => {
  const { name, id } = req.body;

  if (!name && !id) {
    return res.json({ success: false });
  }

  const db = await connectDB();
  const participants = db.collection("participants");

  const participant = await participants.findOne({
    $or: [{ name }, { id }]
  });

  if (!participant) {
    return res.json({ success: false });
  }

  await participants.updateOne(
    { _id: participant._id },
    { $set: { score: participant.score ?? 0 } }
  );

  res.json({ success: true, participant });
});


router.post("/update-score", async (req, res) => {
  const { id, _id, score, domain } = req.body;

  if ((!id && !_id) || typeof score !== "number") {
    return res.json({ success: false });
  }

  const db = await connectDB();
  const participants = db.collection("participants");

  const filter = _id 
    ? { _id: new ObjectId(_id) } 
    : { id };

  const updateFields = { $inc: { score: score } };
  
  if (domain) {
    updateFields.$inc[`domainScores.${domain}`] = score;
  }

  const result = await participants.updateOne(
    filter,
    updateFields
  );

  res.json({ success: result.modifiedCount === 1 });
});

router.get("/leaderboard", async (req, res) => {
  const db = await connectDB();
  const participants = db.collection("participants");
  const allData = await participants.find({}).toArray();
  res.json({ success: true, leaderboards: allData });
});


export default router;
