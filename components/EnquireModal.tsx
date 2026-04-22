"use client";
import React, { useState } from 'react';

interface EnquireModalProps {
  onClose: () => void;
}

export default function EnquireModal({ onClose }: EnquireModalProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    domain: '',
    candidates: '',
    mode: '',
    location: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
        setTimeout(onClose, 2500); // Close after showing success message
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[750px] md:h-[550px] overflow-hidden flex flex-col md:flex-row relative">
         
         <button onClick={onClose} className="absolute right-4 top-4 z-10 text-gray-400 hover:text-gray-700 transition">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
         </button>

         <div className="hidden md:block w-[40%] relative">
           <img 
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
             alt="Office Corporate" 
             className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
           />
         </div>

         <div className="w-full md:w-[60%] flex flex-col p-6 md:p-8 h-full overflow-y-auto custom-scrollbar">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                <p className="text-gray-500">Your inquiry has been received. Our team will contact you soon.</p>
              </div>
            ) : (
              <>
                <h2 className="text-[24px] font-bold text-gray-900 mb-6 mt-1">Enquire Now</h2>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-[360px]">
                   <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Enter Name" className="w-full border-b border-gray-300 pb-2 text-[15px] outline-none focus:border-blue-500 text-gray-800 placeholder:text-gray-400" />
                   <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Enter Email" className="w-full border-b border-gray-300 pb-2 text-[15px] outline-none focus:border-blue-500 text-gray-800 placeholder:text-gray-400" />
                   
                   <div className="flex border-b border-gray-300 pb-2">
                     <div className="flex items-center gap-2 pr-3 border-r border-gray-300 cursor-pointer">
                        <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5" />
                        <span className="text-[15px] text-gray-700">+91</span>
                     </div>
                     <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone Number" className="w-full pl-3 text-[15px] outline-none text-gray-800" />
                   </div>

                   <input required name="company" value={formData.company} onChange={handleChange} type="text" placeholder="Enter company name" className="w-full border-b border-gray-300 pb-2 text-[15px] outline-none focus:border-blue-500 text-gray-800 placeholder:text-gray-400" />
                   
                    <div className="relative">
                      <select 
                        required
                        name="domain"
                        value={formData.domain}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 text-[15px] outline-none focus:border-blue-500 text-gray-400 appearance-none bg-transparent cursor-pointer"
                      >
                        <option value="" disabled>Select Domain</option>
                        <option value="tech">Technology</option>
                        <option value="finance">Finance</option>
                        <option value="healthcare">Healthcare</option>
                      </select>
                      <svg className="w-4 h-4 text-gray-400 absolute right-1 top-1 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                    </div>

                    <input required name="candidates" value={formData.candidates} onChange={handleChange} type="number" placeholder="Enter No. of candidates" className="w-full border-b border-gray-300 pb-2 text-[15px] outline-none focus:border-blue-500 text-gray-800 placeholder:text-gray-400" />
                    
                    <div className="relative">
                      <select 
                        required
                        name="mode"
                        value={formData.mode}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 text-[15px] outline-none focus:border-blue-500 text-gray-400 appearance-none bg-transparent cursor-pointer"
                      >
                        <option value="" disabled>Select Mode of Delivery *</option>
                        <option value="online">Online</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="offline">Offline</option>
                      </select>
                      <svg className="w-4 h-4 text-gray-400 absolute right-1 top-1 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                    </div>

                   <input required name="location" value={formData.location} onChange={handleChange} type="text" placeholder="Eg: Gurgoan, Delhi, India" className="w-full border-b border-gray-300 pb-2 text-[15px] outline-none focus:border-blue-500 text-gray-800 placeholder:text-gray-400" />

                   <button disabled={loading} type="submit" className="mt-4 w-full bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-3.5 rounded-lg transition duration-200 disabled:bg-blue-300 disabled:cursor-not-allowed">
                     {loading ? 'Submitting...' : 'Submit'}
                   </button>
                </form>
              </>
            )}
         </div>
      </div>
    </div>
  );
}
