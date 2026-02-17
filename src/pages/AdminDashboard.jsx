// import { useState, useEffect } from "react";
// import AdminBulkUpload from "../components/AdminBulkUpload";

// export default function AdminDashboard() {
//   const [jobs, setJobs] = useState([]);
//   const [applications, setApplications] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     address: "",
//     description: "",
//   });
//   const [editingJobId, setEditingJobId] = useState(null);

//   /* =========================
//      FETCH DATA
//   ========================== */

//   const fetchJobs = async () => {
//     try {
//       const res = await fetch("https://api.britishirishsocialworkagency.co.uk/api/jobs");
//       const data = await res.json();
//       setJobs(data);
//     } catch (err) {
//       console.error("Error fetching jobs:", err);
//     }
//   };

//   const fetchApplications = async () => {
//     try {
//       const res = await fetch("https://api.britishirishsocialworkagency.co.uk/api/applications");
//       const data = await res.json();
//       setApplications(data);
//     } catch (err) {
//       console.error("Error fetching applications:", err);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//     fetchApplications();
//   }, []);

//   /* =========================
//      CREATE / UPDATE JOB
//   ========================== */

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (editingJobId) {
//         await fetch(`https://api.britishirishsocialworkagency.co.uk/api/jobs/${editingJobId}`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(form),
//         });
//         setEditingJobId(null);
//       } else {
//         await fetch("https://api.britishirishsocialworkagency.co.uk/api/jobs", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(form),
//         });
//       }

//       setForm({ title: "", address: "", description: "" });
//       fetchJobs();
//     } catch (err) {
//       console.error("Error saving job:", err);
//     }
//   };

//   /* =========================
//      DELETE JOB
//   ========================== */

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this job?")) return;

//     try {
//       await fetch(`https://api.britishirishsocialworkagency.co.uk/api/jobs/${id}`, {
//         method: "DELETE",
//       });
//       fetchJobs();
//     } catch (err) {
//       console.error("Error deleting job:", err);
//     }
//   };

//   /* =========================
//      EDIT JOB
//   ========================== */

//   const handleEdit = (job) => {
//     setForm({
//       title: job.title,
//       address: job.address,
//       description: job.description,
//     });
//     setEditingJobId(job._id);
//   };

//   /* =========================
//      UI
//   ========================== */

//   return (
//     <div className="p-6 space-y-8">
//       <h2 className="text-3xl font-bold">Admin Dashboard</h2>

//       {/* ================= Job Form ================= */}
//       <form
//         onSubmit={handleSubmit}
//         className="space-y-3 border p-4 rounded shadow"
//       >
//         <h3 className="font-bold text-lg">
//           {editingJobId ? "Edit Job" : "Post Job"}
//         </h3>

//         <input
//           type="text"
//           placeholder="Job Title"
//           value={form.title}
//           onChange={(e) =>
//             setForm({ ...form, title: e.target.value })
//           }
//           className="border p-2 w-full"
//           required
//         />

//         <input
//           type="text"
//           placeholder="Location"
//           value={form.address}
//           onChange={(e) =>
//             setForm({ ...form, address: e.target.value })
//           }
//           className="border p-2 w-full"
//           required
//         />

//         <textarea
//           placeholder="Job Description"
//           value={form.description}
//           onChange={(e) =>
//             setForm({ ...form, description: e.target.value })
//           }
//           className="border p-2 w-full min-h-30"
//           required
//         />

//         <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
//           {editingJobId ? "Update Job" : "Post Job"}
//         </button>
//       </form>

//       {/* ================= Bulk Upload ================= */}
//       <div className="border p-4 rounded shadow">
//         <h3 className="font-bold text-lg mb-3">
//           Bulk Upload Jobs (CSV)
//         </h3>
//         <AdminBulkUpload onJobsUploaded={fetchJobs} />
//       </div>

//       {/* ================= Jobs List ================= */}
//       <div>
//         <h3 className="text-xl font-bold mb-2">Job Openings</h3>

//         <div className="space-y-4 max-h-96 overflow-y-auto border p-4 rounded">
//           {jobs.map((job) => (
//             <div
//               key={job._id}
//               className="border p-3 rounded flex justify-between gap-4"
//             >
//               <div>
//                 <p className="font-semibold text-lg">{job.title}</p>
//                 <p className="text-sm text-gray-600">
//                   {job.address}
//                 </p>
//                 <p className="text-gray-700 mt-1">
//                   {job.description}
//                 </p>
//               </div>

//               <div className="flex flex-col gap-2">
//                 <button
//                   onClick={() => handleEdit(job)}
//                   className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
//                 >
//                   Edit
//                 </button>

//                 <button
//                   onClick={() => handleDelete(job._id)}
//                   className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= Applications ================= */}
//       <div>
//         <h3 className="text-xl font-bold mb-2">Job Applications</h3>

//         <div className="space-y-4 max-h-96 overflow-y-auto border p-4 rounded">
//           {applications.map((app) => (
//             <div key={app._id} className="border p-3 rounded">
//               <p><strong>Job:</strong> {app.jobTitle}</p>
//               <p><strong>Name:</strong> {app.applicantName}</p>
//               <p><strong>Email:</strong> {app.applicantEmail}</p>
//               <p><strong>Phone:</strong> {app.applicantPhone}</p>
//               <p><strong>Experience:</strong> {app.applicantExperience}</p>

//               <a
//                 href={`https://api.britishirishsocialworkagency.co.uk/uploads/${app.cvFile}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:underline"
//               >
//                 Download CV
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import AdminBulkUpload from "../components/AdminBulkUpload";

export default function AdminDashboard() {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [form, setForm] = useState({
    title: "",
    address: "",
    description: "",
  });
  const [editingJobId, setEditingJobId] = useState(null);

  /* =========================
     FETCH DATA
  ========================== */

  const fetchJobs = async () => {
    try {
      const res = await fetch("https://api.britishirishsocialworkagency.co.uk/api/jobs");
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  const fetchApplications = async () => {
    try {
      const res = await fetch("https://api.britishirishsocialworkagency.co.uk/api/applications");
      const data = await res.json();
      setApplications(data);
    } catch (err) {
      console.error("Error fetching applications:", err);
    }
  };

  useEffect(() => {
    fetchJobs();
    fetchApplications();
  }, []);

  /* =========================
     CREATE / UPDATE JOB
  ========================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingJobId) {
        await fetch(`https://api.britishirishsocialworkagency.co.uk/api/jobs/${editingJobId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        setEditingJobId(null);
      } else {
        await fetch("https://api.britishirishsocialworkagency.co.uk/api/jobs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }

      setForm({ title: "", address: "", description: "" });
      fetchJobs();
    } catch (err) {
      console.error("Error saving job:", err);
    }
  };

  /* =========================
     DELETE JOB
  ========================== */

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    try {
      await fetch(`https://api.britishirishsocialworkagency.co.uk/api/jobs/${id}`, {
        method: "DELETE",
      });
      fetchJobs();
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };

  /* =========================
     EDIT JOB
  ========================== */

  const handleEdit = (job) => {
    setForm({
      title: job.title,
      address: job.address,
      description: job.description,
    });
    setEditingJobId(job._id);
  };

  /* =========================
     UI
  ========================== */

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-3xl font-bold">Admin Dashboard</h2>

      {/* ================= Job Form ================= */}
      <form
        onSubmit={handleSubmit}
        className="space-y-3 border p-4 rounded shadow"
      >
        <h3 className="font-bold text-lg">
          {editingJobId ? "Edit Job" : "Post Job"}
        </h3>

        <input
          type="text"
          placeholder="Job Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          className="border p-2 w-full"
          required
        />

        <input
          type="text"
          placeholder="Location"
          value={form.address}
          onChange={(e) =>
            setForm({ ...form, address: e.target.value })
          }
          className="border p-2 w-full"
          required
        />

        <textarea
          placeholder="Job Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          className="border p-2 w-full min-h-30"
          required
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          {editingJobId ? "Update Job" : "Post Job"}
        </button>
      </form>

      {/* ================= Bulk Upload ================= */}
      <div className="border p-4 rounded shadow">
        <h3 className="font-bold text-lg mb-3">
          Bulk Upload Jobs (CSV)
        </h3>
        <AdminBulkUpload onJobsUploaded={fetchJobs} />
      </div>

      {/* ================= Jobs List ================= */}
      <div>
        <h3 className="text-xl font-bold mb-2">Job Openings</h3>

        <div className="space-y-4 max-h-96 overflow-y-auto border p-4 rounded">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="border p-3 rounded flex justify-between gap-4"
            >
              <div>
                <p className="font-semibold text-lg">{job.title}</p>
                <p className="text-sm text-gray-600">
                  {job.address}
                </p>
                <p className="text-gray-700 mt-1">
                  {job.description}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleEdit(job)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(job._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Applications ================= */}
      <div>
        <h3 className="text-xl font-bold mb-2">Job Applications</h3>

        <div className="space-y-4 max-h-96 overflow-y-auto border p-4 rounded">
          {applications.map((app) => (
            <div key={app._id} className="border p-3 rounded">
              <p><strong>Job:</strong> {app.jobTitle}</p>
              <p><strong>Name:</strong> {app.applicantName}</p>
              <p><strong>Email:</strong> {app.applicantEmail}</p>
              <p><strong>Phone:</strong> {app.applicantPhone}</p>
              <p><strong>Experience:</strong> {app.applicantExperience}</p>

              <a
                href={`https://api.britishirishsocialworkagency.co.uk/uploads/${app.cvFile}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Download CV
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
