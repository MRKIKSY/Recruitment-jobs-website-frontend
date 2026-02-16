import { useState } from "react";

export default function AdminBulkUpload() {
  const [rawText, setRawText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const parseJobs = (text) => {
    return text
      .split("---")
      .map(job => job.trim())
      .filter(job => job.length > 0)
      .map(jobText => {
        const lines = jobText.split("\n");

        const title = lines.find(l => l.startsWith("Title:"))?.replace("Title:", "").trim();
        const location = lines.find(l => l.startsWith("Location:"))?.replace("Location:", "").trim();

        return {
          title,
          location,
          description: jobText,
          salary: ""
        };
      });
  };

  const handleUpload = async () => {
    if (!rawText.trim()) return alert("Paste jobs first.");

    setLoading(true);

    const jobs = parseJobs(rawText);
    let success = 0;
    let failed = 0;

    for (const job of jobs) {
      try {
        const res = await fetch("https://api.britishirishsocialworkagency.co.uk/api/jobs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(job),
        });

        if (res.ok) {
          success++;
        } else {
          failed++;
        }
      } catch {
        failed++;
      }
    }

    setLoading(false);
    setResult({ success, failed });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow space-y-4">
      <h2 className="text-2xl font-bold">Bulk Job Upload</h2>

      <p className="text-sm text-gray-600">
        Separate each job using <strong>---</strong>
      </p>

      <textarea
        value={rawText}
        onChange={(e) => setRawText(e.target.value)}
        rows={15}
        placeholder="Paste multiple jobs here..."
        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition"
      >
        {loading ? "Uploading..." : "Upload All Jobs"}
      </button>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p>✅ Success: {result.success}</p>
          <p>❌ Failed: {result.failed}</p>
        </div>
      )}
    </div>
  );
}
