import React from 'react';

export default function CATFramework() {
  const steps = [
    {
      title: "Concept",
      description: "Foundational knowledge for deep subject understanding.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/><rect x="5" y="2" width="14" height="20" rx="2" ry="2" className="opacity-30"/></svg>
      )
    },
    {
      title: "Application",
      description: "Practical implementation through real-world scenarios.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" className="opacity-30"/><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
      )
    },
    {
      title: "Tools",
      description: "Resources and techniques for effective skill mastery.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2" className="opacity-30"/><circle cx="5" cy="19" r="2" className="opacity-30"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
      )
    }
  ];

  return (
    <section id="cat" className="py-24 bg-white text-center flex flex-col items-center">
      <h2 className="text-[32px] sm:text-[40px] font-bold text-gray-900 mb-2">
        The <span className="text-blue-600">CAT Framework</span>
      </h2>
      <p className="text-gray-600 font-medium mb-16 text-[15px]">
        Our Proven Approach to <span className="text-blue-500">Learning Excellence</span>
      </p>

      {/* Infographic Container */}
      <div className="relative w-full max-w-[900px] flex justify-center hidden md:flex h-[280px]">
        
        {/* Beautiful Custom SVG wave for background connection */}
        <div className="absolute inset-0 top-10 flex justify-center w-[110%] -left-[5%] z-0 h-[300px]">
           <svg width="100%" height="80%" viewBox="0 0 1000 300" preserveAspectRatio="none" fill="none">
             <path d="M 0,220 C 150,220 150,20 300,20 C 450,20 450,220 540,220 C 650,220 700,20 900,20" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
             <circle cx="210" cy="20" r="8" fill="#3b82f6" />
             <circle cx="25" cy="220" r="8" fill="#3b82f6" />
             <circle cx="480" cy="220" r="8" fill="#3b82f6" />
             <circle cx="680" cy="80" r="8" fill="#3b82f6" />
             <circle cx="600" cy="20" r="4" fill="#60a5fa" />
             <circle cx="150" cy="180" r="4" fill="#60a5fa" />
           </svg>
        </div>

        <div className="relative z-10 flex justify-between w-[85%] mt-12">
            {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center w-[220px]">
                    <div className="w-[100px] h-[100px] flex items-center justify-center bg-white rounded-full shadow-[0_10px_30px_rgba(59,130,246,0.15)] mb-6 z-20">
                       {step.icon}
                    </div>
                    <h3 className="font-bold text-[22px] text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-[13px] leading-snug px-4">{step.description}</p>
                </div>
            ))}
        </div>
      </div>
      
      {/* Mobile view logic */}
       <div className="md:hidden flex flex-col gap-12 px-6 pb-20">
          {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                   <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-[0_10px_30px_rgba(59,130,246,0.15)] mb-4">
                       {step.icon}
                   </div>
                   <h3 className="font-bold text-[22px] text-gray-900 mb-1">{step.title}</h3>
                   <p className="text-gray-600 text-[14px] leading-snug">{step.description}</p>
              </div>
          ))}
       </div>

    </section>
  );
}
