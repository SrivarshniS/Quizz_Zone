
// Configuration for the application

// Logic to determine API URL:
// 1. If VITE_API_URL environment variable is set (Production context), use it.
// 2. If running in PRODUCTION mode (e.g. Vercel build), use Render Backend directly.
// 3. Otherwise, use relative path (Development context with Vite proxy).

export const API_BASE_URL = 
  import.meta.env.VITE_API_URL || 
  (import.meta.env.PROD ? "https://quizz-zone-backend.onrender.com/api" : "/api");
