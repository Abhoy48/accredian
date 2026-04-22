export default function TrackRecord() {
  const stats = [
    { number: "10K+", label: "Professionals Trained For Exceptional Career Success" },
    { number: "200+", label: "Sessions Delivered With Unmatched Learning Excellence" },
    { number: "5K+", label: "Active Learners Engaged In Dynamic Courses" },
  ];

  return (
    <section id="stats" className="py-16 sm:py-24 bg-white text-center">
      <h2 className="text-[32px] sm:text-[40px] font-bold text-gray-900 mb-2">
        Our <span className="text-blue-600">Track Record</span>
      </h2>
      <p className="text-gray-600 font-medium mb-16 text-[15px]">
        The Numbers Behind <span className="text-blue-500">Our Success</span>
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center max-w-[1200px] mx-auto">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center px-10 relative flex-1 mb-10 md:mb-0">
            <div className="bg-[#e9f0ff] text-blue-600 font-bold text-xl px-8 py-2 rounded-full mb-6">
              {item.number}
            </div>
            <p className="text-gray-800 text-[13px] font-medium leading-relaxed max-w-[220px]">
              {item.label}
            </p>
            {index < stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[1px] h-[80%] bg-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
