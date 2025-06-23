import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
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
      opacity: [0, 0.5, 0],
    }}
    transition={{
      duration: Math.random() * 5 + 3,
      repeat: Infinity,
      ease: 'linear',
      delay: Math.random() * 5,
    }}
    style={{
      width: `${Math.random() * 4 + 1}px`,
      height: `${Math.random() * 4 + 1}px`,
      filter: 'blur(0.5px)',
    }}
  />
);

// Core tech skills list for maintenance
const skills = [
  'Go, Python & Node.js (Backend)',
  'Next.js, Nuxt.js, React & Vue (Frontend)',
  'UI/UX Styling & Tailwind CSS',
  'Machine Learning & Computer Vision',
  'GraphQL & REST APIs',
  'Docker & Kubernetes',
  'MongoDB & PostgreSQL',
  'TypeScript & JavaScript (ES6+)',
];

const About = () => {
  // Framer Motion variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 12 } },
  };

  return (
    <section id="about" className="relative py-20 md:py-32 bg-gray-900 text-white overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <Particle key={i} />
        ))}
      </div>

      <motion.div
        className="relative z-10 container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="flex items-center mb-12">
          <span className="text-cyan-400 font-code text-2xl mr-4">01.</span>
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="flex-grow h-px bg-gray-700 ml-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-start">
          {/* Bio */}
          <motion.div variants={itemVariants} className="md:col-span-3 text-gray-300 text-base md:text-lg leading-relaxed space-y-4">
            <p>
              I architect and build robust backends using Go, Python, and Node.js, and craft engaging frontends with Next.js,
              Nuxt.js, React, and Vue. My eye for clean UI/UX styling ensures every application feels polished and intuitive.
            </p>
            <p>
              Beyond full‐stack development, I dive into machine learning and computer vision projects—applying algorithms that
              turn data into actionable insights and smart features.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-4">Tech Stack</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-code text-base">
              {skills.map((skill, idx) => (
                <li key={idx} className="flex items-center">
                  <FiChevronRight className="text-cyan-400 mr-2" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
