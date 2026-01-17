
// Configuration for the application

// Logic to determine API URL:
// 1. If VITE_API_URL environment variable is set (Production context), use it.
// 2. Otherwise, use relative path (Development context with Vite proxy).
// NOTE: In Production (e.g., Netlify/Vercel), you MUST set VITE_API_URL to your Render Backend URL.

export const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";
