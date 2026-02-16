import { useState } from "react";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

export default function JobCard({ job, onApply }) {
  const [expanded, setExpanded] = useState(false);
  const description = job?.description ?? "";
  const isLong = description.length > 120;

  return (
   <div className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition p-5 flex flex-col justify-between transform hover:-translate-y-1 duration-300">

      
      {/* Header */}
      <div className="mb-3 flex flex-col gap-2">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 hover:text-blue-600 transition duration-200">
          {job?.title}
        </h3>
        <p className="flex items-center text-gray-600 text-sm md:text-base">
          <FaMapMarkerAlt className="mr-2 text-blue-500" /> {job?.address}
        </p>
        <hr className="border-gray-200 my-2" />
      </div>

      {/* Description */}
      <div className={`text-gray-700 text-sm md:text-base leading-relaxed mb-3 overflow-hidden ${!expanded && "line-clamp-5"}`}>
        {description}
      </div>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 font-medium hover:text-blue-800 transition duration-200 mb-3 flex items-center gap-1 text-sm"
        >
          {expanded ? "Show less ▲" : "Read more ▼"}
        </button>
      )}

      {/* Apply Button */}
      <button
        type="button"
        onClick={() => onApply(job)}
        className="mt-auto flex items-center justify-center bg-linear-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-2xl shadow-lg hover:from-blue-600 hover:to-indigo-700 transition transform hover:scale-105 duration-200"
      >
        Apply Now <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
}
