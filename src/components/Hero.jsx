import React from 'react';
import { Link } from 'react-scroll';
import { FiArrowDown, FiDownloadCloud } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Particle component for subtle background animation
const Particle = () => (
  <motion.div
    className="absolute bg-cyan-400 rounded-full opacity-0"
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      x: Math.random() * window.innerWidth - window.innerWidth / 2,
      y: Math.random() * window.innerHeight - window.innerHeight / 2,
      scale: Math.random() * 2 + 0.5,
      opacity: [0, 0.5, 0]
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
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black overflow-hidden px-6 lg:px-24"
    >
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <Particle key={i} />
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center lg:text-left max-w-3xl space-y-6 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white">
          Endale Shimelis
        </motion.h1>

        <motion.p variants={itemVariants} className="text-cyan-300 text-lg sm:text-xl md:text-2xl font-medium">
          {introText}
        </motion.p>

        <motion.p variants={itemVariants} className="text-gray-400 text-base sm:text-lg leading-relaxed">
          I specialize in building scalable web applications, crafting seamless mobile experiences, and integrating machine learning workflows to solve real-world challenges. Let's turn your vision into production-ready solutions.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Link
            to="projects"
            smooth
            duration={600}
            offset={-80}
            className="flex items-center gap-2 px-6 py-3 text-cyan-400 border border-cyan-400 rounded-lg font-medium transition-transform duration-300 hover:scale-105"
          >
            View Projects
           <FiArrowDown className="transform transition-transform duration-300" />
          </Link>

          <a
            href="/Endale_Shimelis_CV.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg font-medium transition-transform duration-300 hover:scale-105"
          >
            Download CV
          <FiDownloadCloud className="transform transition-transform duration-300" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
