export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-[1100px] mx-auto px-6 pt-14 pb-8">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          
          {/* Logo */}
          <div>
            <div className="text-blue-600 font-black text-[26px] tracking-tight leading-none mb-1">
              accredian
            </div>
            <p className="text-gray-400 text-[9px] tracking-[0.22em] font-semibold uppercase">
              credentials that matter
            </p>
            <div className="flex gap-4 mt-5 text-gray-400">
              {/* Facebook */}
              <a href="#" className="hover:text-blue-600 transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-blue-600 transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
              {/* Twitter */}
              <a href="#" className="hover:text-blue-600 transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
              {/* Instagram */}
              <a href="#" className="hover:text-blue-600 transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              {/* YouTube */}
              <a href="#" className="hover:text-blue-600 transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.4l6.06 3.3-6.06 3.32z"/></svg></a>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <button className="enquire-button bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-7 rounded-lg shadow-sm transition-all duration-200 text-[14px]">
              Enquire Now
            </button>
            <p className="text-gray-400 text-[12px]">Speak with our Advisor</p>
          </div>
        </div>

        <div className="border-t border-gray-100 mb-8" />

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:flex md:flex-row gap-8 md:gap-[250px] lg:gap-[500px] mb-10">
          <div>
            <h4 className="font-bold text-gray-800 mb-4 text-[14px]">Accredian</h4>
            <div className="flex flex-col gap-2.5">
              <a href="#home" className="text-gray-500 hover:text-blue-600 text-[13px] transition-colors">About</a>
              <a href="#edge" className="text-gray-500 hover:text-blue-600 text-[13px] transition-colors">Why Accredian</a>
              <a href="#testimonials" className="text-gray-500 hover:text-blue-600 text-[13px] transition-colors">Success Stories</a>
              <a href="#faqs" className="text-gray-500 hover:text-blue-600 text-[13px] transition-colors">FAQs</a>
              <a href="#clients" className="text-gray-500 hover:text-blue-600 text-[13px] transition-colors">Partnerships</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4 text-[14px]">Contact Us</h4>
            <div className="flex flex-col gap-2.5">
              <p className="text-gray-500 text-[13px]">
                Email: <a href="mailto:enterprise@accredian.com" className="text-blue-600 hover:underline">enterprise@accredian.com</a>
              </p>
              <p className="text-gray-500 text-[13px] leading-relaxed max-w-[320px]">
                4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mb-6" />

        {/* Copyright */}
        <p className="text-center text-gray-400 text-[12px]">
          © 2026 Accredian — A Brand of FullStack Education Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
