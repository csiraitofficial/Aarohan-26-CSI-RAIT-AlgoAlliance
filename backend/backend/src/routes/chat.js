import express from "express";
import { generateChatResponse } from "../services/aiService.js";

const router = express.Router();

router.post("/chat", async (req, res) => {
  const message =
    typeof req.body?.message === "string" ? req.body.message.trim() : "";

  if (!message) {
    res.status(400).json({ success: false, error: "message is required" });
    return;
  }

  try {
    const reply = await generateChatResponse(message);
    res.json({ success: true, reply });
  } catch (err) {
    console.error("Chat route error:", err);
    res.status(500).json({
      success: false,
      error: "Failed to generate response. Please try again.",
    });
  }
});

export const chatRouter = router;
