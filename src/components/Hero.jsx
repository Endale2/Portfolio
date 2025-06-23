import React, { useState, useEffect, useRef } from 'react'; // Import useRef
import { Link } from 'react-scroll';
import { FiArrowDown, FiDownloadCloud } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  // Array of skill phrases for the typewriter effect
  const skillPhrases = [
    "I build full-stack web solutions.",
    "I engineer robust mobile apps.",
    "I craft intelligent machine learning models.",
    "I develop computer vision systems.",
    "I specialize in data annotation."
  ];

  const [displayedText, setDisplayedText] = useState(''); // Current text being displayed by typewriter
  const [lineIndex, setLineIndex] = useState(0); // Index of the current phrase in skillPhrases
  const [charIndex, setCharIndex] = useState(0); // Index of the current character being typed/deleted
  const [isDeleting, setIsDeleting] = useState(false); // True if deleting, false if typing
  const typeTimeoutRef = useRef(null); // Ref to hold the timeout ID for cleanup

  // Typewriter effect logic
  useEffect(() => {
    const currentLine = skillPhrases[lineIndex]; // The full phrase for the current line

    const handleType = () => {
      if (!isDeleting) {
        // Typing phase
        if (charIndex < currentLine.length) {
          setDisplayedText(currentLine.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          typeTimeoutRef.current = setTimeout(handleType, 70); // Typing speed
        } else {
          // Line fully typed, pause then start deleting
          typeTimeoutRef.current = setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
        }
      } else {
        // Deleting phase
        if (charIndex > 0) {
          setDisplayedText(currentLine.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          typeTimeoutRef.current = setTimeout(handleType, 40); // Deleting speed
        } else {
          // Line fully deleted, move to next line
          setIsDeleting(false);
          setLineIndex((prev) => (prev + 1) % skillPhrases.length); // Cycle to next phrase
          typeTimeoutRef.current = setTimeout(handleType, 500); // Short pause before next typing starts
        }
      }
    };

    // Start the typing process
    typeTimeoutRef.current = setTimeout(handleType, isDeleting ? 40 : (charIndex === 0 ? 500 : 70));

    // Cleanup function: clear the timeout when component unmounts or dependencies change
    return () => {
      if (typeTimeoutRef.current) {
        clearTimeout(typeTimeoutRef.current);
      }
    };
  }, [lineIndex, charIndex, isDeleting, skillPhrases]); // Dependencies correctly drive the typing logic

  // Framer Motion variants for staggered entrance animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between child animations
        delayChildren: 0.2 // Initial delay for first child
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
  };

  return (
    <section id="hero" className="min-h-screen bg-slate-900 flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background radial gradient with more vibrant colors and subtle animation */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,211,238,0.2),rgba(255,255,255,0))] animate-pulse-slow"></div>

      {/* Animated subtle grid pattern */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Main content container, animated with Framer Motion */}
      <motion.div
        className="text-center md:text-left max-w-4xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="mb-3 text-lg font-code text-cyan-400" variants={itemVariants}>
          Hello, my name is
        </motion.p>

        <motion.h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight" variants={itemVariants}>
          Endale.
        </motion.h1>

        {/* Dynamic Sub-title with Typewriter effect */}
        <motion.h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-10 tracking-tight relative overflow-hidden h-16 md:h-16 flex items-center justify-center md:justify-start" variants={itemVariants}>
          <span className="inline-block">
            {displayedText}
          </span>
          {/* Blinking cursor for typewriter effect */}
          <span className={`inline-block ml-1 w-0.5 h-full bg-cyan-400 animate-blink ${!isDeleting && charIndex === skillPhrases[lineIndex].length ? 'opacity-100' : ''}`} />
        </motion.h2>

        {/* Paragraph text with highlighted areas */}
        <motion.p className="max-w-xl text-lg md:text-xl text-slate-400 mb-12 leading-relaxed md:mx-0 mx-auto" variants={itemVariants}>
          A <span className="text-cyan-300 font-bold highlight-underline">Full-Stack</span> and <span className="text-cyan-300 font-bold highlight-underline">Mobile App Developer</span> passionate about building robust solutions. I also leverage my skills in <span className="text-cyan-300 font-bold highlight-underline">Machine Learning</span>, <span className="text-cyan-300 font-bold highlight-underline">Computer Vision</span>, and <span className="text-cyan-300 font-bold highlight-underline">Data Annotation</span> to deliver intelligent applications.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4" variants={itemVariants}>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="inline-flex items-center gap-2 font-code text-lg font-medium text-cyan-400 border border-cyan-400 rounded-md px-8 py-3
                         transition-all duration-300 ease-in-out group
                         hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20 cursor-pointer"
          >
            View My Work
            <FiArrowDown className="transform group-hover:translate-y-1 transition-transform duration-300" />
          </Link>
          <a
            href="/Endale_Solomon_CV.pdf" // IMPORTANT: Replace with the actual path to your CV/Resume PDF in the public folder
            download="Endale_Solomon_CV.pdf"
            className="inline-flex items-center gap-2 font-code text-lg font-medium text-slate-100 bg-cyan-600 border border-cyan-600 rounded-md px-8 py-3
                         transition-all duration-300 ease-in-out group
                         hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-700/30 cursor-pointer"
          >
            Download Resume
            <FiDownloadCloud className="transform group-hover:scale-110 transition-transform duration-300" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;