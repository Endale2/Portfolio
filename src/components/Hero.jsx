import React from 'react';
import { Link } from 'react-scroll'; // Using react-scroll for the button link for consistency
import { FiArrowDown } from 'react-icons/fi'; // A subtle icon for the CTA button

const Hero = () => {
  return (
    <section 
      id="hero" 
      // Main container: full screen height, dark background, and centered content
      className="min-h-screen bg-slate-900 flex flex-col justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* Background radial gradient for a subtle lighting effect */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="text-center md:text-left max-w-4xl mx-auto">
        
        {/* Sub-heading with the developer theme font */}
        <p className="mb-3 text-lg font-code text-cyan-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Hi, my name is
        </p>

        {/* Main Heading */}
        <h1 
          className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Endale.
        </h1>

        {/* Sub-title with a slightly muted color for contrast */}
        <h2 
          className="text-4xl md:text-6xl font-bold text-slate-400 mb-10 tracking-tight animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          I build things for the web.
        </h2>

        {/* Paragraph text */}
        <p 
          className="max-w-xl text-lg md:text-xl text-slate-400 mb-12 leading-relaxed animate-fade-in-up md:mx-0 mx-auto"
          style={{ animationDelay: '0.8s' }}
        >
          I deliver full-stack development with scalable backends and engaging, responsive interfaces—tailored for efficiency and innovation.
        </p>
        
        {/* Call to Action Button */}
        <div 
          className="animate-fade-in-up"
          style={{ animationDelay: '1s' }}
        >
          <Link
            to="projects" // Smooth scrolls to the "projects" section
            smooth={true}
            duration={500}
            offset={-70}
            className="inline-flex items-center gap-2 font-code text-lg font-medium text-cyan-400 border border-cyan-400 rounded-md px-8 py-3
                       transition-all duration-300 ease-in-out
                       hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            View My Work
            <FiArrowDown className="transform group-hover:translate-y-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;