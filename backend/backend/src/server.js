import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { authRouter } from "./routes/auth.js";
import { chatRouter } from "./routes/chat.js";
import { summarizeReportRouter } from "./routes/summarizeReport.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin: CORS_ORIGIN.split(",").map((s) => s.trim()),
  })
);

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.use(authRouter);
app.use(chatRouter);
app.use(summarizeReportRouter);

app.use((err, _req, res, _next) => {
  const status = typeof err?.status === "number" ? err.status : 500;
  const message = err?.message || "Internal server error";
  res.status(status).json({ success: false, error: message });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
