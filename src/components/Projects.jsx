import React, { useState, useEffect } from 'react';
import {
  FaGithub,
  FaTimes,
  FaPython,
  FaMobileAlt,
  FaGlobe,
  FaExternalLinkAlt,
  FaRocket,
  FaDownload, 
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';


const projects = [
  {
  "title": "[In Progress] Custom Shop Builder Platform(Golang, Vuejs) ",
  "category": "Full-Stack Web ",
  "description": "A web-based platform that lets users create and manage their own custom online shops through an intuitive dashboard. The frontend is built with Vue.js and the backend with Golang. Features include store setup, product management, order processing, and analytics.",
  "coverImage": "/images/drps.png",
  "platform": "web",
  "website": null,
  "github": null
}
,
  {
    title: "Ethiopian Recipe Sharing Platform (MERN Stack)",
    category: "Full-Stack Web",
    description:
      "A feature-rich web platform built with the **MERN stack** (MongoDB, Express.js, React, Node.js) for passionate food enthusiasts. Users can **discover, share, and save** their favorite Ethiopian recipes, fostering a vibrant community around traditional dishes. Key features include **user authentication, recipe CRUD operations, search functionality, and user profiles**.",
    coverImage: "/images/mern-recipe.png", 
    platform: "web",
    website: "https://mern-ethiopian-recipes.vercel.app",
    github: "https://github.com/Endale2/MERN-Ethiopian-Recipes"
  },
  {
    title: "Basic Social Networking App (Flutter & BLoC)",
    category: "Mobile App",
    description:
      "A foundational **mobile social networking application** developed using **Flutter** for cross-platform compatibility and **BLoC (Business Logic Component)** for state management. It leverages **Firebase** for secure user authentication and real-time database operations, and **Supabase** for efficient file storage (e.g., user avatars, post images).",
    coverImage: "/images/socialX.png", 
    platform: "Android",
    github: "https://github.com/Endale2/Social-Media-App-flutter-bloc-firebase-",
    downloadUrl: "https://t.me/codejkr/64" 
  },
  {
    title: "Telegather CLI Tool",
    category: "CLI Tool",
    description:
      "A versatile and lightweight **Command Line Interface (CLI) tool** designed to **efficiently scrape messages from public Telegram channels** and export them to a **CSV file**. It offers both **flag-driven arguments** for quick execution and an **interactive mode** for user-friendly configuration, complete with a **visually appealing colored banner**.",
    coverImage: "/images/telegather.png", 
    platform: "cmd",
    github: "https://github.com/Endale2/telegather",
    pypi: "https://pypi.org/project/telegather"
  }
];


const linkIcons = {
  github: FaGithub,
  website: FaRocket,
  downloadUrl: FaDownload,
  pypi: FaPython,
  docs: FaExternalLinkAlt
};

const Projects = () => {
  const [selected, setSelected] = useState(null);

  const openModal = (proj) => {
    setSelected(proj);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = ''; // Restore scrolling
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && closeModal();
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // Framer Motion Variants for smoother animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 150, damping: 20, delay: 0.1 } },
    exit: { opacity: 0, scale: 0.9, y: -50, transition: { duration: 0.2 } }
  };

  const renderLinks = (proj, isModal = false) => {
    const keys = ['github', 'website', 'downloadUrl', 'pypi'];
    return keys.map(key => {
      if (!proj[key]) return null;
      const Icon = linkIcons[key] || FaExternalLinkAlt; // Fallback icon
      return (
        <a
          key={key}
          href={proj[key]}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex items-center gap-2 transition-all duration-300 transform hover:scale-105
            ${isModal
              ? 'text-lg font-medium text-cyan-400 hover:text-cyan-200 bg-gray-700/60 hover:bg-gray-700 rounded-lg px-4 py-2 shadow-md'
              : 'text-sm text-cyan-400 hover:text-cyan-300'
            }
          `}
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
        {/* Section Heading */}
        <h2 className="flex items-center text-3xl font-bold mb-12 font-sans">
          <span className="text-cyan-400 font-mono text-2xl mr-4">02.</span>My Projects
          <div className="flex-grow h-px bg-gray-700 ml-6" />
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 border border-gray-700 cursor-pointer flex flex-col"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: i * 0.1 }}
              onClick={() => openModal(proj)}
            >
              <img src={proj.coverImage} alt={proj.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2 font-mono">{proj.title}</h3>
                <span className="inline-block bg-gray-700 text-xs px-2 py-1 rounded-full mb-3 font-mono text-gray-300">
                  {proj.category}
                </span>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{proj.description}</p>
                <div className="flex flex-wrap gap-4 mt-auto">{renderLinks(proj)}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop with subtle blur effect */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 flex items-center justify-center p-4 sm:p-6 lg:p-8"
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
              <div className="
                bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl
                w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl
                p-6 md:p-8 border border-gray-700 relative
                flex flex-col max-h-[90vh] overflow-y-auto custom-scrollbar
                transform transition-transform duration-300 ease-out
              ">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-all duration-200 p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 z-10"
                  aria-label="Close"
                >
                  <FaTimes className="w-7 h-7" />
                </button>

                {selected.coverImage && (
                  <img
                    src={selected.coverImage}
                    alt={selected.title}
                    className="w-full h-auto max-h-72 object-cover rounded-lg mb-6 border border-gray-600 shadow-md"
                    loading="lazy"
                  />
                )}

                <h3 className="text-4xl font-extrabold text-cyan-300 mb-3 font-mono leading-tight">{selected.title}</h3>
                <span className="inline-block bg-cyan-700/30 text-cyan-200 text-sm px-3 py-1 rounded-full mb-6 font-mono tracking-wide">
                  {selected.category}
                </span>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed flex-grow">{selected.description}</p>

                <div className="flex flex-wrap gap-4 mt-auto justify-center sm:justify-start">
                  {renderLinks(selected, true)}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;