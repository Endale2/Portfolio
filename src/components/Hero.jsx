import React from 'react';


const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center py-12 transition duration-300">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-6 tracking-wide drop-shadow-lg flex items-center justify-center"> {/* Added flex and justify-center */}
          Hi, I'm <span className="text-indigo-600 dark:text-indigo-400 transition duration-300 ml-2">Endale</span>
          
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl">
          I'm a passionate Full-Stack Developer & Mobile App Developer.
        </p>
        <a
          href="#projects"
          className="px-8 py-4 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-bold rounded-lg text-lg transition duration-300 shadow-md hover:shadow-lg"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;