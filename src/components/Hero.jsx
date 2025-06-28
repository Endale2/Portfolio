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
  // Static professional introduction text
  const introText = 'Full-Stack Engineer | Mobile Developer | ML Enthusiast';

  // Framer Motion variants for entrance animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 12 } }
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden"
    >
      {/* Background particles */}
      <div className="absolute inset-0 z-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <Particle key={i} />
        ))}
      </div>

      <motion.div
        className="relative z-10 container-responsive text-center max-w-4xl space-y-6 md:space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Endale Shimelis
        </motion.h1>

        <motion.p variants={itemVariants} className="text-cyan-300 text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
          {introText}
        </motion.p>

        <motion.p variants={itemVariants} className="text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
          I specialize in building scalable web applications, crafting seamless mobile experiences, and integrating machine learning workflows to solve real-world challenges. Let's turn your vision into production-ready solutions.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8">
          <Link
            to="projects"
            smooth
            duration={600}
            offset={-80}
            className="btn-outline flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold group w-full sm:w-auto justify-center"
            aria-label="View my projects"
          >
            View Projects
            <FiArrowDown className="transform transition-transform duration-300 group-hover:translate-y-1" />
          </Link>

          <a
            href="/endale.pdf"
            download
            className="btn-primary flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold w-full sm:w-auto justify-center"
            aria-label="Download my CV"
          >
            Download CV
            <FiDownloadCloud className="transform transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
