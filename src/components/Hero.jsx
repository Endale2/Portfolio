import React from 'react';
import { Link } from 'react-scroll';
import { FiArrowDown, FiDownloadCloud } from 'react-icons/fi';
import { motion } from 'framer-motion';

const codeFont = 'font-["JetBrains Mono","Fira Code","Monaco","Cascadia Code","Roboto Mono",Consolas,"Courier New",monospace]';
const sansFont = 'font-sans';

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
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a192f] overflow-hidden pt-28 md:pt-36"
    >
      {/* Animated code-inspired background overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/4 top-0 w-1/2 h-full bg-gradient-to-b from-cyan-400/10 via-blue-500/10 to-transparent animate-pulse rounded-full blur-2xl" />
        <div className="absolute right-0 top-1/3 w-1/4 h-1/2 bg-cyan-400/10 rounded-full blur-2xl animate-pulse" />
      </div>
      {/* Background particles */}
      <div className="absolute inset-0 z-0 opacity-20">
        {Array.from({ length: 24 }).map((_, i) => (
          <Particle key={i} />
        ))}
      </div>
      <motion.div
        className="relative z-10 w-full flex flex-col items-center justify-center px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading with creative underline/accent */}
        <motion.h1 variants={itemVariants} className={`relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg ${codeFont} flex items-center justify-center gap-2 mb-4 md:mb-6`}
        >
          <span className="text-cyan-400">&#123;</span> Endale Shimelis <span className="text-cyan-400">&#125;</span>
          {/* Animated underline/accent */}
          <span className="absolute left-1/2 -bottom-2 md:-bottom-3 w-2/3 md:w-1/2 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full blur-[2px] -translate-x-1/2 animate-pulse" />
        </motion.h1>
        <motion.p variants={itemVariants} className={`text-cyan-300 text-lg sm:text-xl md:text-2xl font-semibold tracking-wide ${codeFont} mb-4 md:mb-6`}>
          {introText}
        </motion.p>
        <motion.p variants={itemVariants} className={`text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto ${sansFont} mb-8 md:mb-12`}>
          I specialize in building scalable web applications, crafting seamless mobile experiences, and integrating machine learning workflows to solve real-world challenges. Let's turn your vision into production-ready solutions.
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-lg">
          <Link
            to="projects"
            smooth
            duration={600}
            offset={-80}
            className={`btn-outline flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold group w-full sm:w-auto justify-center ${codeFont} hover:shadow-cyan-400/30 focus:ring-2 focus:ring-cyan-400/60`}
            aria-label="View my projects"
          >
            View Projects
            <FiArrowDown className="transform transition-transform duration-300 group-hover:translate-y-1" />
          </Link>
          <a
            href="/endale.pdf"
            download
            className={`btn-primary flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold w-full sm:w-auto justify-center ${codeFont} hover:shadow-cyan-400/30 focus:ring-2 focus:ring-cyan-400/60`}
            aria-label="Download my CV"
          >
            Download CV
            <FiDownloadCloud className="transform transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
