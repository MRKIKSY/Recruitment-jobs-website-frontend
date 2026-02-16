import { useEffect, useState } from "react";

export default function AdminApplication() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("https://api.britishirishsocialworkagency.co.uk/api/applications")
      .then(res => res.json())
      .then(data => setApplications(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Applications</h1>

      <div className="grid gap-4">
        {applications.map((app, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-semibold">{app.name}</h2>
            <p className="text-gray-600">{app.email}</p>
            <p className="mt-2">{app.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
