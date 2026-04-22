
export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="relative overflow-hidden bg-[#3b82f6] rounded-xl flex flex-col md:flex-row items-center justify-between p-10 md:px-14 md:py-12 shadow-lg">
           
           {/* Background Overlay Circles mapped exactly to the submitted image */}
           <div className="absolute right-0 bottom-0 top-0 left-0 overflow-hidden pointer-events-none flex justify-center translate-x-[20%] translate-y-[30%]">
              <svg viewBox="0 0 400 400" className="w-[500px] h-[500px] opacity-90" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="200" cy="200" r="200" fill="#4281f5" opacity="0.25" />
                 <circle cx="200" cy="200" r="155" fill="#4281f5" opacity="0.45" />
                 <circle cx="200" cy="200" r="115" fill="#4281f5" opacity="0.65" />
                 <circle cx="200" cy="200" r="75" fill="#4281f5" opacity="1" />
              </svg>
           </div>

           {/* Left Content */}
           <div className="flex items-start md:items-center gap-4 md:gap-6 relative z-10 w-full mb-8 md:mb-0">
             <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 md:w-8 md:h-8">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                  <path d="M12 17v4"></path>
                  <path d="M8 21h8"></path>
                </svg>
             </div>
             <div>
                <h2 className="text-[18px] md:text-[28px] font-bold text-white mb-1">
                   Want to Learn More About Our Training Solutions?
                </h2>
                <p className="text-blue-100 text-[13px] md:text-[15px] font-medium">
                   Get Expert Guidance for Your Team's Success!
                </p>
             </div>
           </div>

           {/* Right Content */}
           <div className="relative z-10 shrink-0 w-full md:w-auto flex justify-center md:justify-end">
             <button className="enquire-button bg-white text-blue-600 hover:bg-gray-50 font-bold px-8 py-3.5 rounded-lg shadow-md transition duration-200 flex items-center gap-2">
                Contact Us
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
             </button>
           </div>

        </div>
      </div>
    </section>
  );
}
