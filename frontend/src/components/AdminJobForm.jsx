import { useState } from "react";



export default function AdminJobForm({ onJobCreated }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newJob = { title, location, description, salary };

    try {
      const res = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newJob),
      });

      if (res.ok) {
        const createdJob = await res.json();
        onJobCreated(createdJob); // optional callback to update job list in parent
        setTitle(""); 
        setLocation("");
        setDescription("");
        setSalary("");
        alert("Job created successfully!");
      } else {
        alert("Failed to create job.");
      }
    } catch (err) {
      console.error(err);
      alert("Error creating job.");
    }
  };

  return (
     <div className="space-y-10">
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow space-y-4">
      <h2 className="text-2xl font-bold mb-4">Add New Job</h2>

      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <textarea
        placeholder="Job Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
        required
      ></textarea>

      <input
        type="text"
        placeholder="Salary (optional)"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        Add Job
      </button>
    </form>
    <div className="bg-red-200 p-4">
  BULK UPLOAD SECTION BELOW
</div>


    </div>
  );
}
