"use client";
import { useEffect, useState } from 'react';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-[32px] sm:text-[42px] font-bold text-gray-900 mb-2 tracking-tight">
            Testimonials from <span className="text-blue-600">Our Partners</span>
          </h2>
          <p className="text-gray-500 font-medium text-[15px]">
            What <span className="text-blue-500">Our Clients</span> Are Saying
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300">
              <div className="h-10 mb-6 flex items-center">
                <img src={item.logo} alt={`${item.company} Logo`} className="h-full w-auto object-contain" />
              </div>
              <p className="text-gray-600 text-[14px] leading-relaxed italic">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}
