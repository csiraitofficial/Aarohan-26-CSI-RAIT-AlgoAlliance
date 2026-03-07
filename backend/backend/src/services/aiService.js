import OpenAI from "openai";

const DISCLAIMER =
  "This is not a medical diagnosis. Please consult a healthcare professional.";

const SYSTEM_PROMPT_CHAT = `
You are a preventive healthcare assistant.

Rules:
- Do NOT diagnose diseases
- Do NOT prescribe medicines
- Give only precautionary and safety advice
- Keep responses short, clear, and simple
- If symptoms seem severe, advise urgent medical attention

Always end with: 'This is not a medical diagnosis.'
`.trim();

const SYSTEM_PROMPT_REPORT = `
You are a medical report simplifier.
Read the following medical report text and explain it in simple, patient-friendly language.

Return valid JSON with exactly these keys:
- briefSummary
- importantFindings
- simpleExplanation
- disclaimer

Rules:
- Do not diagnose diseases or prescribe medicines.
- importantFindings must be an array of short strings.
- disclaimer must be: 'This is not a medical diagnosis. Please consult a healthcare professional.'
`.trim();

function getClient() {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error("Missing GROQ_API_KEY in backend env.");
  }
  return new OpenAI({
    apiKey,
    baseURL: "https://api.groq.com/openai/v1",
  });
}

function getModel() {
  return process.env.AI_MODEL || "llama-3.1-8b-instant";
}

export async function generateChatResponse(userMessage) {
  const client = getClient();
  const model = getModel();

  const completion = await client.chat.completions.create({
    model,
    messages: [
      { role: "system", content: SYSTEM_PROMPT_CHAT },
      { role: "user", content: userMessage },
    ],
    temperature: 0.4,
    max_tokens: 512,
  });

  let reply =
    completion.choices?.[0]?.message?.content?.trim() ||
    "I'm sorry, I couldn't generate a response. This is not a medical diagnosis.";
  if (!reply.trim().toLowerCase().endsWith(DISCLAIMER.toLowerCase())) {
    reply = `${reply.trim()} ${DISCLAIMER}`;
  }
  return reply;
}

export async function summarizeReportText(text) {
  const client = getClient();
  const model = getModel();

  const completion = await client.chat.completions.create({
    model,
    messages: [
      { role: "system", content: SYSTEM_PROMPT_REPORT },
      { role: "user", content: text },
    ],
    temperature: 0.2,
    max_tokens: 800,
  });

  const raw =
    completion.choices?.[0]?.message?.content?.trim() ||
    '{"briefSummary":"","importantFindings":[],"simpleExplanation":"","disclaimer":"' +
      DISCLAIMER +
      '"}';

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    const first = raw.indexOf("{");
    const last = raw.lastIndexOf("}");
    if (first !== -1 && last > first) {
      try {
        parsed = JSON.parse(raw.slice(first, last + 1));
      } catch {
        parsed = null;
      }
    } else parsed = null;
  }

  if (!parsed || typeof parsed !== "object") {
    return buildReportFallback(
      "The report text could not be summarized reliably. Please consult your healthcare provider."
    );
  }

  return {
    briefSummary:
      typeof parsed.briefSummary === "string" ? parsed.briefSummary : "",
    importantFindings: Array.isArray(parsed.importantFindings)
      ? parsed.importantFindings.filter((s) => typeof s === "string")
      : [],
    simpleExplanation:
      typeof parsed.simpleExplanation === "string"
        ? parsed.simpleExplanation
        : "",
    disclaimer: DISCLAIMER,
  };
}

export function buildReportFallback(message) {
  return {
    briefSummary: message,
    importantFindings: [],
    simpleExplanation:
      "This tool could not interpret the uploaded report. Please ask your doctor to explain your report.",
    disclaimer: DISCLAIMER,
  };
}
