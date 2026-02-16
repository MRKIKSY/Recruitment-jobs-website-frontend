// import { useState, useEffect } from "react";
// import JobCard from "../components/Jobcard.jsx";
// import JobModal from "../components/JobModal.jsx";
// import { FaSearch } from "react-icons/fa";

// export default function Home() {
//   const [jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedJob, setSelectedJob] = useState(null);

//   // Fetch jobs from API
//  useEffect(() => {
//   fetch("https://api.britishirishsocialworkagency.co.uk/api/jobs")
//     .then(async res => {
//       if (!res.ok) {
//         const text = await res.text();
//         throw new Error(`HTTP ${res.status}: ${text}`);
//       }
//       return res.json();
//     })
//     .then(data => {
//       setJobs(data);
//       setFilteredJobs(data);
//     })
//     .catch(err => console.error("Failed to fetch jobs:", err));
// }, []);


//   // Filter jobs based on search term (debounced)
//   useEffect(() => {
//   const term = searchTerm.trim().toLowerCase();

//   const filtered = jobs
//     .filter(job => {
//       const title = job.title?.toLowerCase() || "";
//       const location = job.address?.toLowerCase() || "";
//       return title.startsWith(term) || location.startsWith(term);
//     })
//     .sort((a, b) => {
//       const titleA = a.title || "";
//       const titleB = b.title || "";
//       return titleA.localeCompare(titleB);
//     });

//   setFilteredJobs(filtered);
// }, [searchTerm, jobs]);

//   return (
//     <div className="space-y-20">
//       {/* Hero Section */}
//       <section className="relative bg-linear-to-r from-blue-600 to-indigo-500 text-white py-24 px-6 text-center">
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
//           Are you a UK-Based Care Worker? Considering Relocation to Dublin, Ireland?
//         </h1>
//         <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
//           Our British-Irish Care Agency supports UK care professionals in making a smooth transition to the Republic of Ireland, where the demand for skilled carers is high and UK experience is highly valued. We connect you with career opportunities that match your qualifications and expertise.
//         </p>
//         <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4 leading-relaxed">
//           Unlike the UK Certificate of Sponsorship (CoS), which is limited and highly competitive, Ireland offers the <strong>General Employment Permit (GEP)</strong> — a clear, structured, and achievable pathway to work legally, advance your career, and secure long-term residence.
//         </p>
//         <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4 leading-relaxed">
//           We provide comprehensive guidance at every stage: application support, understanding GEP requirements, relocation assistance, and settling you into a role that aligns with your skills and career goals. Our standards are among the highest in the industry, ensuring safe and professional placements for both carers and clients.
//         </p>

//         <div className="mt-8">
//           <a
//             href="#jobs"
//             className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
//           >
//             View Job Openings
//           </a>
//         </div>
//       </section>

//       {/* Images Section */}
//       <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
//         <div className="rounded-lg overflow-hidden shadow-lg">
//           <img 
//             src="/care-worker-1.jpg" 
//             alt="Home Care Assistant helping a client" 
//             className="w-full h-80 object-cover"
//           />
//         </div>
//         <div className="rounded-lg overflow-hidden shadow-lg">
//           <img 
//             src="/care-worker-2.jpg" 
//             alt="Care assistant providing companionship" 
//             className="w-full h-80 object-cover"
//           />
//         </div>
//       </section>

//       {/* What Work Does a Home Care Assistant Do */}
//       <section className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
//           What Do Home Care Assistants Do?
//         </h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {[
//             "Provide personal care: bathing, dressing, incontinence support, gentle mobility",
//             "Light housekeeping: cleaning, changing bed linen, preparing meals",
//             "Medication reminders and support",
//             "Running errands and accompanying clients",
//             "Taking clients on walks or spending quality time",
//             "Assisting dementia patients with daily tasks",
//             "Providing companionship and social support",
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
//             >
//               <p className="text-gray-700">{item}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* How to Become */}
//       <section className="bg-indigo-50 py-12">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-6 text-gray-800">
//             How To Become a Home Care Assistant
//           </h2>
//           <p className="mb-4 text-gray-700 text-lg">
//             Start by contacting us for an application form. Many carers come from volunteer or family care experience or have switched from other careers.
//           </p>
//           <p className="text-gray-700 text-lg">
//             Minimum qualification: QQI Level 5 in Care Skills and Care of the Older Person, progressing toward a major award in healthcare.
//           </p>
//         </div>
//       </section>

//       {/* Responsibilities */}
//       <section className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
//           Responsibilities
//         </h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           {[
//             "Personal Care: toileting, hygiene, and comfort",
//             "Food & Fluid: shopping, meal prep, assistance with eating",
//             "Medication Prompts: ensuring clients take medications on time",
//             "Light housekeeping for client’s personal space",
//             "Communication and companionship",
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
//             >
//               <p className="text-gray-700">{item}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* UK vs Ireland – Card Style */}
//       <section className="bg-gray-50 py-12">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
//             🇬🇧 UK vs 🇮🇪 Ireland – Care Workers
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* UK Card */}
//             <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//               <h3 className="text-2xl font-semibold mb-4 text-red-600">UK Care Workers (CoS)</h3>
//               <ul className="list-disc list-inside space-y-2 text-gray-700">
//                 <li>Sponsorship Availability: Very limited</li>
//                 <li>Competition Level: Extremely high</li>
//                 <li>Employer Willingness: Low</li>
//                 <li>Entry Route: Restricted</li>
//                 <li>Demand for Carers: Oversaturated</li>
//                 <li>Visa Success Rate: Unpredictable</li>
//                 <li>Long-Term Stay: Hard</li>
//               </ul>
//             </div>

//             {/* Ireland Card */}
//             <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//               <h3 className="text-2xl font-semibold mb-4 text-green-600">Irish Care Workers (GEP)</h3>
//               <ul className="list-disc list-inside space-y-2 text-gray-700">
//                 <li>Sponsorship Availability: Open and active</li>
//                 <li>Competition Level: Moderate</li>
//                 <li>Employer Willingness: High</li>
//                 <li>Entry Route: Structured via GEP</li>
//                 <li>Demand for Carers: High</li>
//                 <li>Visa Success Rate: Structured & achievable</li>
//                 <li>Long-Term Stay: Clear pathway</li>
//               </ul>
//             </div>
//           </div>
//           <p className="mt-6 text-center text-gray-600">
//             Many UK care workers struggle to secure a Certificate of Sponsorship. Ireland offers a realistic alternative via GEP where UK experience is recognised.
//           </p>
//         </div>
//       </section>

//       {/* Jobs Section with Search */}
//       <section id="jobs" className="py-12 max-w-6xl mx-auto px-6">
//   <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
//     Current Job Openings
//   </h2>

//   {/* Show total job count */}
//   <p className="text-center mb-6 text-xl font-semibold text-blue-600 bg-blue-100/50 rounded-full px-4 py-2 shadow-md">
//   {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} available
// </p>


//   {/* Search Bar */}
//   <div className="flex justify-center mb-8">
//     <div className="relative w-full max-w-md">
//       <input
//         type="text"
//         placeholder="Search jobs by title or location..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//       />
//       <FaSearch className="absolute right-3 top-2.5 text-gray-400" />
//     </div>
//   </div>

//   {filteredJobs.length === 0 ? (
//     <p className="text-center text-gray-600">No job openings match your search.</p>
//   ) : (
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {filteredJobs.map((job) => (
//         <JobCard
//           key={job._id}
//           job={job}
//           onApply={(job) => setSelectedJob(job)}
//         />
//       ))}
//     </div>
//   )}
// </section>


//       {/* Job Modal */}
//       {selectedJob && (
//         <JobModal
//           job={selectedJob}
//           onClose={() => setSelectedJob(null)}
//         />
//       )}
//     </div>
//   );
// }




// import { useState, useEffect } from "react";
// import JobCard from "../components/Jobcard.jsx";
// import JobModal from "../components/JobModal.jsx";
// import { FaSearch } from "react-icons/fa";

// export default function Home() {
//   const [jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedJob, setSelectedJob] = useState(null);

//   // Fetch jobs from API
//  useEffect(() => {
//   fetch("https://api.britishirishsocialworkagency.co.uk/api/jobs")
//     .then(async res => {
//       if (!res.ok) {
//         const text = await res.text();
//         throw new Error(`HTTP ${res.status}: ${text}`);
//       }
//       return res.json();
//     })
//     .then(data => {
//       setJobs(data);
//       setFilteredJobs(data);
//     })
//     .catch(err => console.error("Failed to fetch jobs:", err));
// }, []);


//   // Filter jobs based on search term (debounced)
//   useEffect(() => {
//   const term = searchTerm.trim().toLowerCase();

//   const filtered = jobs
//     .filter(job => {
//       const title = job.title?.toLowerCase() || "";
//       const location = job.address?.toLowerCase() || "";
//       return title.startsWith(term) || location.startsWith(term);
//     })
//     .sort((a, b) => {
//       const titleA = a.title || "";
//       const titleB = b.title || "";
//       return titleA.localeCompare(titleB);
//     });

//   setFilteredJobs(filtered);
// }, [searchTerm, jobs]);

//   return (
//     <div className="space-y-20">
//       {/* Hero Section */}
//       <section className="relative bg-linear-to-r from-blue-600 to-indigo-500 text-white py-24 px-6 text-center">
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
//           Are you a UK-Based Care Worker? Considering Relocation to Dublin, Ireland?
//         </h1>
//         <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
//           Our British-Irish Care Agency supports UK care professionals in making a smooth transition to the Republic of Ireland, where the demand for skilled carers is high and UK experience is highly valued. We connect you with career opportunities that match your qualifications and expertise.
//         </p>
//         <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4 leading-relaxed">
//           Unlike the UK Certificate of Sponsorship (CoS), which is limited and highly competitive, Ireland offers the <strong>General Employment Permit (GEP)</strong> — a clear, structured, and achievable pathway to work legally, advance your career, and secure long-term residence.
//         </p>
//         <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4 leading-relaxed">
//           We provide comprehensive guidance at every stage: application support, understanding GEP requirements, relocation assistance, and settling you into a role that aligns with your skills and career goals. Our standards are among the highest in the industry, ensuring safe and professional placements for both carers and clients.
//         </p>

//         <div className="mt-8">
//           <a
//             href="#jobs"
//             className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
//           >
//             View Job Openings
//           </a>
//         </div>
//       </section>

//       {/* Images Section */}
//       <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
//         <div className="rounded-lg overflow-hidden shadow-lg">
//           <img 
//             src="/care-worker-1.jpg" 
//             alt="Home Care Assistant helping a client" 
//             className="w-full h-80 object-cover"
//           />
//         </div>
//         <div className="rounded-lg overflow-hidden shadow-lg">
//           <img 
//             src="/care-worker-2.jpg" 
//             alt="Care assistant providing companionship" 
//             className="w-full h-80 object-cover"
//           />
//         </div>
//       </section>

//       {/* What Work Does a Home Care Assistant Do */}
//       <section className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
//           What Do Home Care Assistants Do?
//         </h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {[
//             "Provide personal care: bathing, dressing, incontinence support, gentle mobility",
//             "Light housekeeping: cleaning, changing bed linen, preparing meals",
//             "Medication reminders and support",
//             "Running errands and accompanying clients",
//             "Taking clients on walks or spending quality time",
//             "Assisting dementia patients with daily tasks",
//             "Providing companionship and social support",
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
//             >
//               <p className="text-gray-700">{item}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* How to Become */}
//       <section className="bg-indigo-50 py-12">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-6 text-gray-800">
//             How To Become a Home Care Assistant
//           </h2>
//           <p className="mb-4 text-gray-700 text-lg">
//             Start by contacting us for an application form. Many carers come from volunteer or family care experience or have switched from other careers.
//           </p>
//           <p className="text-gray-700 text-lg">
//             Minimum qualification: QQI Level 5 in Care Skills and Care of the Older Person, progressing toward a major award in healthcare.
//           </p>
//         </div>
//       </section>

//       {/* Responsibilities */}
//       <section className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
//           Responsibilities
//         </h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           {[
//             "Personal Care: toileting, hygiene, and comfort",
//             "Food & Fluid: shopping, meal prep, assistance with eating",
//             "Medication Prompts: ensuring clients take medications on time",
//             "Light housekeeping for client’s personal space",
//             "Communication and companionship",
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
//             >
//               <p className="text-gray-700">{item}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* UK vs Ireland – Card Style */}
//       <section className="bg-gray-50 py-12">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
//             🇬🇧 UK vs 🇮🇪 Ireland – Care Workers
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* UK Card */}
//             <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//               <h3 className="text-2xl font-semibold mb-4 text-red-600">UK Care Workers (CoS)</h3>
//               <ul className="list-disc list-inside space-y-2 text-gray-700">
//                 <li>Sponsorship Availability: Very limited</li>
//                 <li>Competition Level: Extremely high</li>
//                 <li>Employer Willingness: Low</li>
//                 <li>Entry Route: Restricted</li>
//                 <li>Demand for Carers: Oversaturated</li>
//                 <li>Visa Success Rate: Unpredictable</li>
//                 <li>Long-Term Stay: Hard</li>
//               </ul>
//             </div>

//             {/* Ireland Card */}
//             <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//               <h3 className="text-2xl font-semibold mb-4 text-green-600">Irish Care Workers (GEP)</h3>
//               <ul className="list-disc list-inside space-y-2 text-gray-700">
//                 <li>Sponsorship Availability: Open and active</li>
//                 <li>Competition Level: Moderate</li>
//                 <li>Employer Willingness: High</li>
//                 <li>Entry Route: Structured via GEP</li>
//                 <li>Demand for Carers: High</li>
//                 <li>Visa Success Rate: Structured & achievable</li>
//                 <li>Long-Term Stay: Clear pathway</li>
//               </ul>
//             </div>
//           </div>
//           <p className="mt-6 text-center text-gray-600">
//             Many UK care workers struggle to secure a Certificate of Sponsorship. Ireland offers a realistic alternative via GEP where UK experience is recognised.
//           </p>
//         </div>
//       </section>

//       {/* Jobs Section with Search */}
//       <section id="jobs" className="py-12 max-w-6xl mx-auto px-6">
//   <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
//     Current Job Openings
//   </h2>

//   {/* Show total job count */}
//   <p className="text-center mb-6 text-xl font-semibold text-blue-600 bg-blue-100/50 rounded-full px-4 py-2 shadow-md">
//   {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} available
// </p>


//   {/* Search Bar */}
//   <div className="flex justify-center mb-8">
//     <div className="relative w-full max-w-md">
//       <input
//         type="text"
//         placeholder="Search jobs by title or location..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//       />
//       <FaSearch className="absolute right-3 top-2.5 text-gray-400" />
//     </div>
//   </div>

//   {filteredJobs.length === 0 ? (
//     <p className="text-center text-gray-600">No job openings match your search.</p>
//   ) : (
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {filteredJobs.map((job) => (
//         <JobCard
//           key={job._id}
//           job={job}
//           onApply={(job) => setSelectedJob(job)}
//         />
//       ))}
//     </div>
//   )}
// </section>


//       {/* Job Modal */}
//       {selectedJob && (
//         <JobModal
//           job={selectedJob}
//           onClose={() => setSelectedJob(null)}
//         />
//       )}
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import JobCard from "../components/Jobcard.jsx";
import JobModal from "../components/JobModal.jsx";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  // ===== Fetch jobs from API =====
  useEffect(() => {
    const fetchJobs = async () => {
      console.log("🔹 Fetching jobs from API...");
      try {
        const res = await fetch("https://api.britishirishsocialworkagency.co.uk/api/jobs");
        console.log("🔹 Response status:", res.status);

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`HTTP ${res.status}: ${text}`);
        }

        const data = await res.json();
        console.log("🔹 Jobs data received:", data);
        console.log("🔹 Number of jobs received:", data.length);

        setJobs(data);
        setFilteredJobs(data);
      } catch (err) {
        console.error("❌ Failed to fetch jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  // ===== Filter jobs based on searchTerm =====
  useEffect(() => {
    console.log("🔹 Filtering jobs for searchTerm:", searchTerm || "<empty string>");

    const term = searchTerm.trim().toLowerCase();
    const filtered = jobs
      .filter(job => {
        const title = job.title?.toLowerCase() || "";
        const location = job.address?.toLowerCase() || "";
        return title.startsWith(term) || location.startsWith(term);
      })
      .sort((a, b) => (a.title || "").localeCompare(b.title || ""));

    console.log("🔹 Filtered jobs:", filtered);
    console.log("🔹 Filtered jobs count:", filtered.length);

    setFilteredJobs(filtered);
  }, [searchTerm, jobs]);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-blue-600 to-indigo-500 text-white py-24 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Are you a UK-Based Care Worker? Considering Relocation to Dublin, Ireland?
        </h1>
        <div className="mt-8">
          <a
            href="#jobs"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            View Job Openings
          </a>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-12 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Current Job Openings
        </h2>

        <p className="text-center mb-6 text-xl font-semibold text-blue-600 bg-blue-100/50 rounded-full px-4 py-2 shadow-md">
          {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""} available
        </p>

        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search jobs by title or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {filteredJobs.length === 0 ? (
          <p className="text-center text-gray-600">
            No job openings match your search.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <JobCard
                key={job._id}
                job={job}
                onApply={(job) => setSelectedJob(job)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Job Modal */}
      {selectedJob && (
        <JobModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
}
