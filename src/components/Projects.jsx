import React, { useState, useEffect } from 'react';
import {
  FaGithub,
  FaPlus,
  FaTimes,
  FaPython,
  FaMobileAlt,
  FaGlobe,
  FaBook,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
 
  {
    title: "Ethiopian Recipe Sharing Platform (MERN Stack)",
    category: "Full-Stack Web",
    description:
      "A web platform built with the MERN stack where users can share their favorite Ethiopian recipes, save others’ recipes, and explore a variety of traditional dishes shared by the community.",
    coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=DevPortfolio",
    platform: "web",
    website: "https://devportfolio-template-demo.vercel.app",
    github: "https://github.com/endale-dev/devportfolio-template"
  },
  {
    title: "E-commerce REST API",
    category: "Backend Service",
    description:
      "",
    coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=E-commerce+API",
    platform: "web",
    website: "https://ecommerce-api-docs.example.com",
    github: "https://github.com/endale-dev/ecommerce-api-backend"
  },
   {
    title: "Basic Social NetWorking App  With Flutter & BLoC",
    category: "Mobile App",
    description:
      "A simple social networking app built with Flutter and BLoC. It uses Firebase for authentication and database, and Supabase for file storage.",
    coverImage: "/images/socialX.png",
    platform: "Android",
    github: "https://github.com/Endale2/Social-Media-App-flutter-bloc-firebase-",
    downloadUrl: "https://t.me/codejkr/64"
  },
  {
    title: "Telegather CLI Tool",
    category: "CLI Tool",
    description:
      "A lightweight CLI tool to scrape messages from a public Telegram channel and save them to CSV. Supports both flag-driven and interactive modes with a colored banner.",
    coverImage: "/images/telegather.png",
    platform: "cmd",
    github: "https://github.com/Endale2/telegather",
    pypi: "https://pypi.org/project/telegather"
  }
];

const linkIcons = {
  github: FaGithub,
  website: FaGlobe,
  downloadUrl: FaMobileAlt,
  pypi: FaPython,
  docs: FaBook
};

const Projects = () => {
  const [selected, setSelected] = useState(null);

  const openModal = proj => {
    setSelected(proj);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = '';
  };

  // Close on Escape
  useEffect(() => {
    const handleKey = e => e.key === 'Escape' && closeModal();
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // Variants
  const cardVariants = { enter: { opacity: 0, y: 20 }, center: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 } };
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 150, damping: 20 } },
    exit: { opacity: 0, scale: 0.9, y: -50, transition: { duration: 0.2 } }
  };

  const renderLinks = (proj, isModal = false) => {
    const keys = ['github', 'website', 'downloadUrl', 'pypi'];
    return keys.map(key => {
      if (!proj[key]) return null;
      const Icon = linkIcons[key] || FaExternalLinkAlt;
      return (
        <a
          key={key}
          href={proj[key]}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition transform hover:scale-105 ${isModal ? 'text-base' : 'text-sm'}`}
        >
          <Icon className="w-5 h-5" />
          {key === 'github' && 'GitHub'}
          {key === 'website' && 'Live Site'}
          {key === 'downloadUrl' && 'Download App'}
          {key === 'pypi' && 'PyPI Package'}
        </a>
      );
    });
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="flex items-center text-3xl font-bold mb-12">
          <span className="text-cyan-400 font-code text-2xl mr-4">02.</span>My Projects
          <div className="flex-grow h-px bg-gray-700 ml-6" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 border border-gray-700 cursor-pointer"
              initial="enter"
              animate="center"
              whileHover={{ scale: 1.02 }}
              variants={cardVariants}
              transition={{ delay: i * 0.1 }}
              onClick={() => openModal(proj)}
            >
              <img src={proj.coverImage} alt={proj.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2 font-code">{proj.title}</h3>
                <span className="inline-block bg-gray-700 text-xs px-2 py-1 rounded-full mb-3 font-code">
                  {proj.category}
                </span>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{proj.description}</p>
                <div className="flex flex-wrap gap-4">{renderLinks(proj)}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal Container */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6 lg:p-8 overflow-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
            >
              <div className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl p-4 sm:p-6 md:p-8 border border-gray-700 relative overflow-y-auto max-h-full">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 text-cyan-400 hover:text-red-500 transition-all duration-200 p-2 rounded-full bg-gray-700 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50"
                  aria-label="Close"
                >
                  <FaTimes className="w-7 h-7" />
                </button>

                <h3 className="text-2xl font-bold text-cyan-300 mb-3 font-code mt-6">{selected.title}</h3>
                <span className="inline-block bg-gray-700 text-xs px-2 py-1 rounded-full mb-4 font-code">
                  {selected.category}
                </span>
                <p className="text-gray-300 text-base mb-6 leading-relaxed">{selected.description}</p>

                {selected.coverImage && (
                  <img
                    src={selected.coverImage}
                    alt={selected.title}
                    className="w-full h-auto rounded-md mb-6 border border-gray-700 object-cover"
                  />
                )}

                <div className="flex flex-wrap gap-4">{renderLinks(selected, true)}</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
