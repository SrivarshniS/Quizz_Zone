import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import participantsRoute from "./routes/participants.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/participants", participantsRoute);

app.use("/api/participants", participantsRoute);

if (process.env.NODE_ENV !== 'production') {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
}

export default app;
