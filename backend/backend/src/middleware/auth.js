import { verifyToken, extractToken } from "../utils/auth.js";

export function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    const token = extractToken(authHeader);

    if (!token) {
      return res
        .status(401)
        .json({ success: false, error: "Access token required" });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid or expired token" });
    }

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    res.status(401).json({ success: false, error: "Unauthorized" });
  }
}
