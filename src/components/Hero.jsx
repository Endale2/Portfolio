import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center py-12 transition duration-300 px-4"
    >
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-6 tracking-wide drop-shadow-lg flex flex-col md:flex-row items-center justify-center">
          Hi, I'm <span className="text-green-600 dark:text-green-400 transition duration-300 ml-0 md:ml-2">Endale</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
          I deliver full-stack development with scalable backends and engaging, responsive interfaces—tailored for efficiency and innovation.
        </p>
        <a
          href="#projects"
          className="px-8 py-4 bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white font-bold rounded-lg text-lg transition duration-300 shadow-md hover:shadow-lg"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
