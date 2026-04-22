import React from 'react';

export default function CourseSegmentation() {
  const courses = [
    {
      title: "Program Specific",
      description: "Certificate, Executive, Post Graduate Certificate",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Industry Specific",
      description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Topic Specific",
      description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Level Specific",
      description: "Senior Leadership, Mid-Career Professionals, Freshers",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white text-center pb-32">
      <h2 className="text-[32px] sm:text-[36px] font-bold text-gray-900 mb-2">
        Tailored <span className="text-blue-600">Course Segmentation</span>
      </h2>
      <p className="text-gray-600 font-medium mb-12 text-[15px]">
        Explore <span className="text-blue-500">Custom-fit Courses</span> Designed to Address Every Professional Focus
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1300px] mx-auto px-6 text-left">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex flex-col items-center">
            <div className="h-44 w-full overflow-hidden">
                <img 
                   src={course.image} 
                   alt={course.title} 
                   className="w-full h-full object-cover"
                />
            </div>
            
            <div className="p-6 w-full text-center flex flex-col items-center justify-center min-h-[130px]">
               <h3 className="text-blue-600 font-bold text-lg mb-2">{course.title}</h3>
               <p className="text-gray-600 text-[13px] leading-relaxed max-w-[220px]">
                 {course.description}
               </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
