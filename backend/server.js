import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import participantsRoute from "./routes/participants.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/participants", participantsRoute);

// REQUIRED FOR RENDER - Change made here and issue is solved.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
