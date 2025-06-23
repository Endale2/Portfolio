import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

// Define your list of skills here for easy maintenance
const skills = [
  'JavaScript (ES6+)',
  'React & Next.js',
  'Node.js & Express',
  'TypeScript',
  'Tailwind CSS',
  'MongoDB & SQL',
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">

        {/* Section Heading */}
        <h2 className="relative flex items-center text-3xl font-bold text-slate-100 mb-12 w-full">
          <span className="font-code text-2xl text-cyan-400 mr-3">01.</span>
          About Me
          <span className="flex-grow h-px bg-slate-700 ml-6"></span>
        </h2>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-start">

          {/* Left Column: Text and Skills */}
          <div className="md:col-span-3 text-slate-400 text-lg leading-relaxed">
            <p className="mb-4">
              I am a versatile full-stack developer passionate about crafting innovative and scalable applications. My journey in web development started with a deep curiosity for how things work, and it has evolved into a career where I get to build meaningful products.
            </p>
            <p className="mb-6">
              With a focus on intuitive user interfaces, robust backends, and seamless API integrations, I turn challenges into performance-driven solutions that elevate the user experience.
            </p>
            
            {/* Skills List */}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 font-code text-base text-slate-300">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <FiChevronRight className="text-cyan-400 text-lg mr-2" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Profile Image */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-72 md:h-72 group">
              {/* Decorative border with hover effect */}
              <div className="absolute inset-0 border-2 border-cyan-400 rounded-md transition-transform duration-300
                          group-hover:translate-x-2 group-hover:translate-y-2">
              </div>
              
              {/* Image with a color overlay */}
              <div className="relative w-full h-full rounded-md overflow-hidden">
                {/* NOTE: Replace this src with the path to your actual profile picture! */}
                <img 
                  src="https://via.placeholder.com/300" // <-- REPLACE THIS URL
                  alt="Endale Solomon" 
                  className="w-full h-full object-cover" 
                />
                {/* Color overlay with transition */}
                <div className="absolute inset-0 bg-cyan-600/30 mix-blend-multiply
                            transition-opacity duration-300 group-hover:opacity-0">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;