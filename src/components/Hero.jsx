import React from 'react';
import { Link } from 'react-scroll';
import { FiArrowDown, FiDownloadCloud } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Particle component for subtle background animation
const Particle = () => (
  <motion.div
    className="absolute bg-cyan-400/20 rounded-full pointer-events-none"
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      x: Math.random() * window.innerWidth - window.innerWidth / 2,
      y: Math.random() * window.innerHeight - window.innerHeight / 2,
      scale: Math.random() * 2 + 0.5,
      opacity: [0, 0.4, 0]
    }}
    transition={{
      duration: Math.random() * 5 + 3,
      repeat: Infinity,
      ease: 'linear',
      delay: Math.random() * 5
    }}
    style={{
      width: `${Math.random() * 4 + 1}px`,
      height: `${Math.random() * 4 + 1}px`,
      filter: 'blur(0.5px)'
    }}
  />
);

const Hero = () => {

  // Font classes for consistency
  const codeFont = 'font-["JetBrains Mono","Fira Code","Monaco","Cascadia Code","Roboto Mono",Consolas,"Courier New",monospace]';
  const sansFont = 'font-sans';

  const introText = 'Full-Stack Engineer | Mobile Developer | ML Enthusiast';

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 12 } }
  };

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a192f] text-white overflow-x-hidden overflow-y-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <Particle key={i} />
        ))}
      </div>

      <motion.div
        className="relative z-10 w-full max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center mb-8 md:mb-16 gap-2 sm:gap-0">
          <span className={`text-cyan-400 ${codeFont} text-xl sm:text-2xl md:text-3xl mr-0 sm:mr-4 bg-slate-800/70 px-3 py-1 rounded-lg shadow border border-cyan-400/30 animate-pulse`}>
            00.
          </span>
          <h1 className={`text-3xl sm:text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight ${codeFont} flex items-center gap-2`}>
            <span className="text-cyan-400">&#123;</span> Endale Shimelis <span className="text-cyan-400">&#125;</span>
          </h1>
          <div className="hidden sm:block flex-grow h-px bg-gradient-to-r from-cyan-400/30 via-slate-700 to-transparent ml-6" />
        </motion.div>

        <motion.p variants={itemVariants} className={`text-cyan-300 text-base sm:text-lg md:text-2xl font-medium ${codeFont}`}>{introText}</motion.p>
        <motion.p variants={itemVariants} className={`text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto ${sansFont}`}>I specialize in building scalable web applications, crafting seamless mobile experiences, and integrating machine learning workflows to solve real-world challenges. Let's turn your vision into production-ready solutions.</motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-8 w-full">
          <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="projects"
              smooth
              duration={600}
              offset={-80}
              className={`flex items-center gap-2 text-cyan-300 bg-slate-800/80 hover:bg-cyan-700/90 transition-all duration-300 rounded-lg px-5 py-3 shadow-md text-base font-medium hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full sm:w-auto justify-center ${codeFont}`}
              aria-label="View my projects"
            >
              View Projects
              <FiArrowDown className="transform transition-transform duration-300 group-hover:translate-y-1" />
            </Link>
            <a
              href="/endale.pdf"
              download
              className={`flex items-center gap-2 text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 rounded-lg px-5 py-3 shadow-md text-base font-semibold hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full sm:w-auto justify-center ${codeFont}`}
              aria-label="Download my CV"
            >
              Download CV
              <FiDownloadCloud className="transform transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
