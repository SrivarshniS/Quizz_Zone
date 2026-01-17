import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import participantsRoute from "./routes/participants.js";

dotenv.config();

const app = express();

// Security Headers
app.use(helmet());

// Rate Limiting (100 requests per 15 minutes)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100,
  standardHeaders: true, 
  legacyHeaders: false, 
});
app.use(limiter);

// Update CORS to allow specific origins in production
// For now, we allow all, but you should restrict this to your frontend domain in production
app.use(cors({
   origin: process.env.FRONTEND_URL || "*", 
   methods: ["GET", "POST"]
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/participants", participantsRoute);

// REQUIRED FOR RENDER - Change made here and issue is solved.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
