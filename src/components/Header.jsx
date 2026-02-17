// export default function Header(){
//   return (
//     <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
//       <h2 className="text-2xl font-bold">British-Irish Care Agency</h2>
//       <nav className="space-x-4">
//         <a href="#careers" className="hover:underline">Why Become a Home Care Assistant?</a>
//         <a href="#comparison" className="hover:underline">UK vs Ireland</a>
//         <a href="#employers" className="hover:underline">For Employers</a>
//         <a href="#jobs" className="hover:underline">Job Openings</a>
//         <a href="#contact" className="hover:underline">Contact Us</a>
//       </nav>
//     </header>
//   )
// }
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      {/* Top bar with email and phone */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-1 text-sm md:text-base">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-white" />
          <a
            href="mailto:info@britishirishsocialworkagency.co.uk"
            className="hover:underline"
          >
            info@britishirishsocialworkagency.co.uk
          </a>
        </div>
        <div className="flex items-center gap-3 mt-1 md:mt-0">
          <FaPhone className="text-white" />
          <span>+44 123 456 7890</span>
        </div>
      </div>

      {/* Main header with logo and navigation */}
      <div className="flex justify-between items-center px-4 py-3 md:py-4">
        <h2 className="text-xl md:text-2xl font-bold">
          British-Irish Care Agency
        </h2>

        <nav className="space-x-3 text-sm md:text-base font-medium">
          <a href="#careers" className="hover:underline">
            Why Become a Home Care Assistant?
          </a>
          <a href="#comparison" className="hover:underline">
            UK vs Ireland
          </a>
          <a href="#employers" className="hover:underline">
            For Employers
          </a>
          <a href="#jobs" className="hover:underline">
            Job Openings
          </a>
          <a href="#contact" className="hover:underline">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
