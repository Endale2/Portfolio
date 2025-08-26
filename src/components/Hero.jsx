import React, { useMemo } from "react";
import { Link } from "react-scroll";
import { FiArrowDown, FiDownloadCloud } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";

const codeFont =
  'font-["JetBrains Mono","Fira Code","Monaco","Cascadia Code","Roboto Mono",Consolas,"Courier New",monospace]';
const sansFont = "font-sans";

const Particle = ({ x, y, size, delay, duration }) => (
  <motion.div
    className="absolute bg-cyan-400/20 rounded-full pointer-events-none"
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      x,
      y,
      scale: Math.random() * 2 + 0.5,
      opacity: [0, 0.4, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "linear",
      delay,
    }}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      filter: "blur(0.5px)",
    }}
  />
);

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const particles = useMemo(() => {
    if (shouldReduceMotion) return [];
    return Array.from({ length: 16 }).map(() => ({
      x: Math.random() * 500 - 250,
      y: Math.random() * 500 - 250,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 3,
    }));
  }, [shouldReduceMotion]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a192f] overflow-hidden pt-24 md:pt-32"
    >
      {/* Background overlay accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/4 top-0 w-1/2 h-full bg-gradient-to-b from-cyan-400/10 via-blue-500/10 to-transparent animate-pulse rounded-full blur-2xl" />
        <div className="absolute right-0 top-1/3 w-1/4 h-1/2 bg-cyan-400/10 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 z-0 opacity-20">
        {particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
      </div>

      <motion.div
        className="relative z-10 w-full flex flex-col items-center justify-center px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name Heading */}
        <motion.h1
          variants={itemVariants}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg ${sansFont} text-center mb-3 md:mb-4`}
        >
          Hi, I’m <span className="text-cyan-400">Endale Shimelis</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className={`text-cyan-300 text-base sm:text-lg md:text-xl font-medium tracking-wide ${sansFont} text-center mb-3 md:mb-4`}
        >
          Full-Stack Engineer · Mobile Developer · ML Enthusiast
        </motion.p>

        {/* Intro paragraph */}
        <motion.p
          variants={itemVariants}
          className={`text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto ${sansFont} text-center mb-6 md:mb-8`}
        >
          I love building clean, modern apps that feel natural to use. From web
          platforms to mobile experiences, and even AI-powered workflows — I
          enjoy turning ideas into real products that people love.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full max-w-md"
        >
          <Link
            to="projects"
            smooth
            duration={600}
            offset={-80}
            className={`btn-outline flex items-center gap-2 md:gap-2.5 px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-semibold group w-full sm:w-auto justify-center ${codeFont} hover:shadow-cyan-400/30 focus-visible:ring-2 focus-visible:ring-cyan-400/60`}
            aria-label="View my projects"
          >
            View Projects
            <FiArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
          </Link>
          <a
            href="/endale.pdf"
            download
            className={`btn-primary flex items-center gap-2 md:gap-2.5 px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-semibold w-full sm:w-auto justify-center ${codeFont} hover:shadow-cyan-400/30 focus-visible:ring-2 focus-visible:ring-cyan-400/60`}
            aria-label="Download my CV"
          >
            Download CV
            <FiDownloadCloud className="transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
