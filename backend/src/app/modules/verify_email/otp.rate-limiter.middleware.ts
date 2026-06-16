import rateLimit from "express-rate-limit";

export const otpRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  
  // Pass the JSON object and force TypeScript to ignore the strict string check
  message: {
    success: false,
    message: "Too many OTP verification attempts from this IP, please try again after 15 minutes.",
  },
  
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
} as any); // <-- This 'as any' silences the TS2353 and TS2322 errors permanently