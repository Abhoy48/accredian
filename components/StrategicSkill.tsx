import React from 'react';

export default function StrategicSkill() {
  const skills = [
    {
      title: "Tech Professionals",
      description: "Enhance expertise, embrace tech, drive innovation.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><polyline points="9 10 12 13 15 10"/></svg>
      )
    },
    {
      title: "Non-Tech Professionals",
      description: "Adapt digitally, collaborate in tech environments.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="9" y1="8" x2="15" y2="14"/><line x1="15" y1="8" x2="9" y2="14"/></svg>
      )
    },
    {
      title: "Emerging Professionals",
      description: "Develop powerful skills for rapid career growth.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
      )
    },
    {
      title: "Senior Professionals",
      description: "Strengthen leadership, enhance strategic decisions.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-[1300px] mx-auto bg-[#3668f4] rounded-2xl md:rounded-[32px] overflow-hidden flex flex-col md:flex-row relative shadow-lg min-h-[400px]">
        
        {/* Left Side (Text & Image) */}
        <div className="md:w-1/2 pt-10 md:pt-16 px-8 md:pl-20 relative flex flex-col justify-start z-10">
          <p className="text-white font-medium text-[13px] md:text-[15px] mb-2 opacity-90 tracking-wide">
            Who Should Join?
          </p>
          <h2 className="text-white text-[28px] md:text-[46px] font-bold leading-[1.1] mb-8 md:mb-0 relative z-20">
            Strategic Skill Enhancement
          </h2>
          
          <div className="hidden md:block absolute bottom-0 left-0 w-full flex justify-center translate-y-[5%] z-0">
             <img 
               src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
               alt="Professionals"
               className="w-[85%] max-w-[450px] object-contain drop-shadow-2xl"
             />
          </div>
        </div>
        
        {/* Right Side (Grid of Skills) */}
        <div className="md:w-1/2 px-8 pb-10 md:py-16 md:pr-20 grid grid-cols-2 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-12 z-10 bg-[#3668f4]">
          {skills.map((skill, index) => (
             <div key={index} className="flex flex-col">
                <div className="mb-3 text-white opacity-95">
                   {skill.icon}
                </div>
                <h3 className="text-white font-bold text-base md:text-xl mb-1">{skill.title}</h3>
                <p className="text-blue-100 text-[12px] md:text-[13px] leading-relaxed pr-2 md:pr-6">{skill.description}</p>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
}
