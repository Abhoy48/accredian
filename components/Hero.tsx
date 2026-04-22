export default function Hero() {
  return (
    <section id="home" className="py-6 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="bg-[#f2f6ff] rounded-[32px] relative flex flex-col md:flex-row items-center min-h-[500px]">
          
          <div className="md:w-1/2 pl-8 pr-8 py-12 md:pl-20 md:py-20 z-10">
            <h1 className="text-[40px] md:text-[56px] font-bold text-gray-900 leading-[1.1] tracking-tight">
              Next-Gen <span className="text-blue-600">Expertise</span><br />
              For Your <span className="text-blue-600">Enterprise</span>
            </h1>

            <p className="mt-8 text-[20px] text-gray-900 font-medium leading-snug">
              Cultivate high-performance<br />
              teams through expert learning.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-3 text-[14px] font-semibold text-gray-900">
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span>Tailored Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span>Industry Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon />
                <span>Expert Guidance</span>
              </div>
            </div>

            <button className="enquire-button mt-10 bg-[#3b82f6] text-white font-medium text-lg px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-[0_4px_14px_0_rgba(59,130,246,0.39)]">
              Enquire Now
            </button>
          </div>

          <div className="md:absolute md:right-10 md:bottom-0 md:w-[50%] max-w-[650px] flex justify-end z-0">
            {/* We assume the existing image is a transparent PNG corresponding to the professionals */}
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
              alt="Corporate Professionals"
              className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600 drop-shadow-sm">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}