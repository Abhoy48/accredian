export default function AccredianEdge() {
  const edgeSteps = [
    {
      title: "Tailored Solutions",
      description: "Programs customized to your organization's goals and challenges.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
        </svg>
      ),
      above: true,
    },
    {
      title: "Expert Guidance",
      description: "Learn from industry leaders with real-world success.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>
        </svg>
      ),
      above: false,
    },
    {
      title: "Innovative Framework",
      description: "Proprietary methods for impactful, application-driven results.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 4.6a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 .4 1.65 1.65 0 0 0 10 -1.11V-2a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      above: true,
    },
    {
      title: "Advanced Technology",
      description: "State-of-the-art LMS for seamless learning experiences.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      above: false,
    },
    {
      title: "Diverse Offerings",
      description: "Courses across industries, skill levels, and emerging fields.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
        </svg>
      ),
      above: true,
    },
    {
      title: "Proven Impact",
      description: "Trusted by leading organizations for measurable ROI.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      above: false,
    },
    {
      title: "Flexible Delivery",
      description: "Online and offline options tailored to your needs.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
        </svg>
      ),
      above: true,
    },
  ];

  return (
    <section id="edge" className="py-24 bg-white text-center overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[32px] sm:text-[42px] font-bold text-gray-900 mb-2 tracking-tight">
          The <span className="text-blue-600">Accredian Edge</span>
        </h2>
        <p className="text-gray-500 font-medium mb-20 text-[15px]">
          Key Aspects of <span className="text-blue-500">Our Strategic Training</span>
        </p>

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block" style={{ height: "420px" }}>
          
          {/* Horizontal dashed line through middle */}
          <div
            className="absolute w-full border-t-2 border-dashed border-gray-300"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          />

          {/* Nodes */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            {edgeSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center" style={{ width: `${100 / edgeSteps.length}%` }}>

                {/* Text ABOVE */}
                {step.above && (
                  <div className="absolute bottom-[calc(50%+68px)] w-[145px] text-left">
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <h4 className="font-bold text-[13px] text-gray-900 leading-tight">{step.title}</h4>
                    </div>
                    <p className="text-[11.5px] text-gray-500 leading-snug pl-3">{step.description}</p>
                    {/* Vertical connector line */}
                    <div className="absolute left-1 bottom-[-20px] w-[1.5px] h-5 bg-blue-300" />
                  </div>
                )}

                {/* Circle Node */}
                <div className="relative z-10 w-[88px] h-[88px] rounded-full border-2 border-dashed border-blue-200 flex items-center justify-center bg-white group hover:scale-105 transition-transform duration-300">
                  <div className="w-[64px] h-[64px] rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_4px_20px_rgba(59,130,246,0.35)] group-hover:bg-blue-700 transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Text BELOW */}
                {!step.above && (
                  <div className="absolute top-[calc(50%+68px)] w-[145px] text-left">
                    {/* Vertical connector line */}
                    <div className="absolute left-1 top-[-20px] w-[1.5px] h-5 bg-blue-300" />
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <h4 className="font-bold text-[13px] text-gray-900 leading-tight">{step.title}</h4>
                    </div>
                    <p className="text-[11.5px] text-gray-500 leading-snug pl-3">{step.description}</p>
                  </div>
                )}

                {/* Arrow between nodes */}
                {index < edgeSteps.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-gray-300 text-[20px] font-bold z-20 select-none">
                    ›
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="flex flex-col lg:hidden gap-4 mt-4">
          {edgeSteps.map((step, index) => (
            <div key={index} className="flex gap-5 items-start text-left bg-blue-50 border border-blue-100 p-5 rounded-2xl">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-200">
                {step.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-[15px] mb-1">{step.title}</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
