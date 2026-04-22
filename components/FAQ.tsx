import React from 'react';

export default function FAQ() {
  const tabs = ["About the Course", "About the Delivery", "Miscellaneous"];
  
  const faqs = [
    { question: "What types of corporate training programs does Accredian offer?" },
    { question: "What domain specializations are available?" }
  ];

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* Header */}
        <h2 className="text-[32px] sm:text-[40px] font-bold text-gray-900 mb-12 text-center md:text-left">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* Left Column Tabs - scrollable row on mobile */}
          <div className="flex flex-row md:flex-col overflow-x-auto gap-3 pb-2 md:pb-0 md:w-[350px] md:gap-4 scrollbar-hide">
            {tabs.map((tab, index) => {
              const isActive = index === 0;
              return (
                <button 
                  key={index} 
                  className={`py-3 px-5 md:py-4 md:px-6 rounded-lg font-bold text-center border transition duration-200 whitespace-nowrap flex-shrink-0 text-[13px] md:text-[14px] ${isActive ? 'bg-white text-blue-600 border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.08)]' : 'bg-white text-gray-500 border-gray-200 hover:border-blue-300'}`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Right Column Questions */}
          <div className="md:flex-1 flex flex-col gap-6 pt-2">
            {faqs.map((faq, index) => (
              <div key={index} className="flex justify-between items-center py-2 cursor-pointer group border-b border-gray-100 pb-4">
                <h4 className="font-bold text-[15px] md:text-[16px] text-gray-900 group-hover:text-blue-600 transition pr-4">
                  {faq.question}
                </h4>
                <svg className="text-gray-400 group-hover:text-blue-600 shrink-0 transition" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </div>
            ))}
          </div>

        </div>

        {/* Enquire Now Button */}
        <div className="mt-16 flex justify-center">
          <button className="enquire-button bg-[#3668f4] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-200">
            Enquire Now
          </button>
        </div>

      </div>
    </section>
  );
}
