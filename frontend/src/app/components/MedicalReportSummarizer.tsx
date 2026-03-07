import { useMemo, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { AlertTriangle, CheckCircle, Loader2, Upload } from "lucide-react";

type SummaryData = {
  briefSummary: string;
  importantFindings: string[];
  simpleExplanation: string;
  disclaimer: string;
};

function formatBytes(bytes: number) {
  if (!Number.isFinite(bytes) || bytes <= 0) return "";
  const kb = bytes / 1024;
  if (kb < 1024) return `${Math.round(kb)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

export function MedicalReportSummarizer() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<SummaryData | null>(null);

  const fileMeta = useMemo(() => {
    if (!file) return null;
    return { name: file.name, size: formatBytes(file.size) };
  }, [file]);

  async function onSummarize() {
    setError(null);
    setData(null);

    if (!file) {
      setError("Please select a report file first.");
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/summarize-report", {
        method: "POST",
        body: formData,
      });

      const json = await res.json().catch(() => null);
      if (!res.ok) {
        const message =
          json?.error || `Request failed (${res.status}). Please try again.`;
        setError(message);
        return;
      }

      if (!json?.success || !json?.data) {
        setError("Unexpected response from server. Please try again.");
        return;
      }

      setData(json.data as SummaryData);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="font-semibold text-gray-900 mb-1">
          Medical Report Summarizer
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Upload a report image or PDF and get a simple, patient-friendly summary.
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept=".png,.jpg,.jpeg,.pdf,image/png,image/jpeg,application/pdf"
          className="hidden"
          onChange={(e) => {
            const selected = e.target.files?.[0] ?? null;
            setFile(selected);
            setError(null);
            setData(null);
          }}
        />

        <div
          className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-indigo-500 transition-colors cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") fileInputRef.current?.click();
          }}
        >
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-900 font-medium mb-1">
            Click to upload or drag and drop
          </p>
          <p className="text-sm text-gray-500 mb-4">
            PDF, JPG, PNG up to 10MB
          </p>
          <Button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-700"
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
          >
            Choose File
          </Button>
        </div>

        {fileMeta && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-green-900 font-medium truncate">
                {fileMeta.name}
              </p>
              {fileMeta.size ? (
                <p className="text-xs text-green-800/80">{fileMeta.size}</p>
              ) : null}
            </div>
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
            <p className="text-sm text-red-900">{error}</p>
          </div>
        )}

        <div className="mt-4">
          <Button
            type="button"
            className="w-full bg-indigo-600 hover:bg-indigo-700"
            onClick={onSummarize}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Summarizing…
              </>
            ) : (
              "Summarize Report"
            )}
          </Button>
        </div>
      </Card>

      {data && (
        <div className="space-y-6">
          <Card className="p-6">
            <h4 className="font-semibold text-gray-900 mb-2">Brief Summary</h4>
            <p className="text-sm text-gray-700">{data.briefSummary || "—"}</p>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold text-gray-900 mb-3">
              Important Findings
            </h4>
            {data.importantFindings?.length ? (
              <ul className="space-y-2 text-sm text-gray-700">
                {data.importantFindings.map((item, idx) => (
                  <li key={`${idx}-${item}`} className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-700">—</p>
            )}
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold text-gray-900 mb-2">
              Simple Explanation
            </h4>
            <p className="text-sm text-gray-700">
              {data.simpleExplanation || "—"}
            </p>
          </Card>

          <Card className="p-4 bg-amber-50 border-amber-200">
            <p className="text-sm text-amber-900">
              <strong>Disclaimer:</strong> {data.disclaimer}
            </p>
          </Card>
        </div>
      )}
    </div>
  );
}

