import crypto from "crypto";
import fs from "fs/promises";
import os from "os";
import path from "path";

import express from "express";
import multer from "multer";
import {
  buildReportFallback,
  summarizeReportText,
} from "../services/aiService.js";

const router = express.Router();

const ACCEPTED_MIME_TYPES = new Set([
  "image/png",
  "image/jpeg",
  "application/pdf",
]);

const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, os.tmpdir()),
    filename: (_req, file, cb) => {
      const ext = path.extname(file.originalname || "").toLowerCase();
      const name = `report-${crypto.randomUUID()}${ext || ""}`;
      cb(null, name);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (!ACCEPTED_MIME_TYPES.has(file.mimetype)) {
      cb(
        new Error(
          "Unsupported file type. Please upload PNG, JPG, JPEG, or PDF."
        )
      );
      return;
    }
    cb(null, true);
  },
});

router.post(
  "/summarize-report",
  upload.single("file"),
  async (req, res, next) => {
    const file = req.file;
    if (!file) {
      res.status(400).json({ success: false, error: "No file uploaded." });
      return;
    }

    const text =
      typeof req.body?.text === "string" ? req.body.text.trim() : "";

    try {
      let data;
      if (text) {
        data = await summarizeReportText(text);
      } else {
        data = buildReportFallback(
          "The uploaded report could not be read automatically. This tool currently supports only extracted text, not direct image or PDF understanding."
        );
      }

      res.json({ success: true, data });
    } catch (err) {
      next(err);
    } finally {
      try {
        await fs.unlink(file.path);
      } catch {
        // ignore
      }
    }
  }
);

export const summarizeReportRouter = router;
