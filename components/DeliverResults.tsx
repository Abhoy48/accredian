export default function DeliverResults() {
  const steps = [
    {
      number: "01",
      title: "Skill Gap Analysis",
      description: "Assess your team's current capabilities and identify key developmental gaps to target.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="3 14 8 9 13 14 21 6"/></svg>
      )
    },
    {
      number: "02",
      title: "Customized Training Plan",
      description: "Design a bespoke learning roadmap tailored to your organizational goals and business outcomes.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      )
    },
    {
      number: "03",
      title: "Flexible Program Delivery",
      description: "Execute adaptable, high-impact programs online or offline, aligned with your team's schedule.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="2" y="3" width="20" height="14" rx="2"/><polygon points="10 8 16 12 10 16 10 8"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      )
    }
  ];

  return (
    <section id="how" className="py-24 bg-white text-center">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-[32px] sm:text-[42px] font-bold text-gray-900 mb-2 tracking-tight">
          How We <span className="text-blue-600">Deliver Results</span>
        </h2>
        <p className="text-gray-500 font-medium mb-14 text-[15px]">
          A Structured Three-Step Approach to <span className="text-blue-500">Skill Development</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-[#f8faff] border border-blue-50 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-[0_8px_40px_rgba(59,130,246,0.12)] transition-all duration-300 group">
              
              {/* Step number badge */}
              <div className="absolute top-4 left-4 text-[11px] font-black text-blue-200 tracking-widest">
                {step.number}
              </div>

              {/* Left and right accent bars */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[55%] bg-blue-500 rounded-r-full opacity-60 group-hover:opacity-100 group-hover:h-[75%] transition-all duration-300" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-[55%] bg-blue-500 rounded-l-full opacity-60 group-hover:opacity-100 group-hover:h-[75%] transition-all duration-300" />

              {/* Icon */}
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_6px_20px_rgba(59,130,246,0.3)] mb-5 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              <h3 className="font-bold text-[17px] text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed max-w-[220px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
