export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      {/* Contact & Quick Links */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-300">British-Irish Care Agency</p>
          <p className="text-gray-300">No 23B Industrial Park Estate, Manor Park, E1 8BN, United Kingdom</p>
          <p className="mt-2 flex items-center gap-2 text-gray-300">
            <span>Email:</span>
            <a href="mailto:info@britishirishsocialworkagency.co.uk" className="text-blue-400 hover:underline">
              info@britishirishsocialworkagency.co.uk
            </a>
          </p>
          <p className="mt-1 flex items-center gap-2 text-gray-300">
            <span>CEO Email:</span>
            <a href="mailto:ceo@britishirishsocialworkagency.co.uk" className="text-blue-400 hover:underline">
              ceo@britishirishsocialworkagency.co.uk
            </a>
          </p>
          <p className="mt-1 flex items-center gap-2 text-gray-300">
            <span>Phone:</span> +44 20 45 745 575
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#careers" className="hover:underline">Why Become a Home Care Assistant?</a></li>
            <li><a href="#comparison" className="hover:underline">UK vs Ireland</a></li>
            <li><a href="#employers" className="hover:underline">For Employers</a></li>
            <li><a href="#jobs" className="hover:underline">Job Openings</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            <li><a href="#terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Company Info / About */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            British-Irish Care Agency is committed to supporting UK care professionals seeking opportunities in Ireland. 
            We bridge the gap between skilled carers and employers in Ireland, ensuring safe, professional, and 
            high-quality placements. Our team provides guidance for General Employment Permit (GEP) applications, 
            relocation, career progression, and ongoing professional support. We maintain the highest standards 
            of care, compliance, and professionalism to guarantee client satisfaction and employee wellbeing.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12"></div>

      {/* Extended Terms & Privacy */}
      <div className="max-w-6xl mx-auto px-6 mt-8 text-left text-gray-400 space-y-6 text-sm">
        <section id="terms">
          <h4 className="font-bold text-white text-lg mb-2">Terms & Conditions</h4>
          <p>
            By using this website, you agree to comply with and be bound by the following terms and conditions. 
            British-Irish Care Agency reserves the right to change these terms at any time without prior notice. 
            Users are responsible for regularly reviewing these terms. Content provided on this website is for 
            informational purposes only and does not constitute legal, professional, or medical advice. 
            While we strive for accuracy, we make no warranties regarding completeness, reliability, or availability 
            of the website content. Users must independently verify information before making decisions based on it. 
            All job postings are subject to the eligibility criteria of the employer and applicable Irish employment laws. 
            British-Irish Care Agency is not liable for any employment outcomes resulting from use of this site.
          </p>
          <p>
            You agree not to use the website for any unlawful purpose or in a manner that could damage, disable, 
            overburden, or impair the site. Unauthorized use of this site may give rise to a claim for damages and/or 
            be a criminal offense. All intellectual property rights, including content, logos, and trademarks on 
            this website, are the property of British-Irish Care Agency unless otherwise stated. Users may not 
            reproduce, distribute, or create derivative works without explicit written consent.
          </p>
        </section>

        <section id="privacy">
          <h4 className="font-bold text-white text-lg mb-2">Privacy Policy</h4>
          <p>
            British-Irish Care Agency is committed to protecting your privacy and personal data. 
            We collect only the information necessary to provide our services, including name, contact details, 
            CVs, and professional qualifications for job applications. Personal data is stored securely and is 
            accessible only to authorized staff. We do not sell or share your personal information with third 
            parties for marketing purposes.
          </p>
          <p>
            By submitting your personal information through our website, you consent to the collection and use 
            of your data for recruitment purposes, job placement, communication, and compliance with legal obligations. 
            Users may request access, correction, or deletion of personal data by contacting us via the email addresses 
            provided above. We employ industry-standard security measures to protect against unauthorized access, 
            alteration, disclosure, or destruction of personal information. Cookies and analytics tools are used 
            to improve site performance and user experience, and no personally identifiable information is tracked 
            without consent.
          </p>
          <p>
            This privacy policy is subject to change, and users are encouraged to review it periodically for updates. 
            Continued use of the website indicates acceptance of the current policy.
          </p>
        </section>

        <p className="text-center mt-6 text-gray-500 text-xs">
          &copy; 2026 British-Irish Care Agency. All rights reserved. Designed to support UK care workers and Irish employers.
        </p>
      </div>
    </footer>
  );
}
