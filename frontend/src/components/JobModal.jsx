import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JobModal({ job, onClose }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    applicantName: "",
    applicantEmail: "",
    applicantPhone: "",
    applicantExperience: "",
    cv: null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Track successful submission

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") setFormData({ ...formData, cv: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!job) return;

    const data = new FormData();
    data.append("jobTitle", job.title);
    data.append("applicantName", formData.applicantName);
    data.append("applicantEmail", formData.applicantEmail);
    data.append("applicantPhone", formData.applicantPhone);
    data.append("applicantExperience", formData.applicantExperience);
    data.append("cv", formData.cv);

    setSubmitting(true);

    try {
      const res = await fetch("http://localhost:5000/api/applications", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setSubmitted(true); // show success message
      } else {
        alert("Error submitting application. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!job) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-24 z-50 overflow-auto">
      <div className="bg-white rounded-xl shadow-xl p-6 w-11/12 max-w-md relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 font-bold text-lg hover:text-gray-900"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Job title */}
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          {submitted ? "Application Submitted!" : `Apply for: ${job.title}`}
        </h3>

        {!submitted ? (
          <>
            {/* Job info */}
            <p className="text-gray-600 mb-4">
              <strong>Location:</strong> {job.address}
            </p>
            <p className="text-gray-700 mb-6">{job.description}</p>

            {/* Application form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="applicantName"
                placeholder="Full Name"
                required
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />
              <input
                name="applicantEmail"
                type="email"
                placeholder="Email"
                required
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />
              <input
                name="applicantPhone"
                placeholder="Phone"
                required
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />
              <textarea
                name="applicantExperience"
                placeholder="Experience / Motivation"
                rows="3"
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />
              <input
                name="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleChange}
                className="w-full"
              />
              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-2 px-4 rounded text-white font-semibold transition ${
                  submitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center text-gray-700 space-y-4">
            <p className="text-lg">
              Thank you for submitting your application! Your details have been received and will be reviewed by our recruitment team.
            </p>
            <p className="text-gray-500">
              We will contact you via email or phone if your profile matches the job requirements.
            </p>
            <button
              onClick={onClose}
              className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Back to Jobs
            </button>
          </div>
        )}

        {/* Navigation buttons */}
        {!submitted && (
          <div className="flex justify-between mt-6">
            <button
              onClick={onClose}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            >
              Back to Job Listings
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
