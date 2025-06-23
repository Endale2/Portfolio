import React, { useState, useEffect } from 'react'; // Added useEffect for potential Esc key close
import {
  FaGithub,
  FaPlus,
  FaTimes, // The X icon for closing
  FaPython,
  FaMobileAlt,
  FaGlobe,
  FaBook,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "SwiftTask Pro",
    category: "Mobile App",
    description:
      "A feature-rich task manager built with React Native and Firebase. It offers real-time synchronization, seamless collaboration features, and robust cross-platform support for both iOS and Android devices, ensuring productivity on the go.",
    coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=SwiftTask+Pro",
    platform: "mobile",
    github: "https://github.com/endale-dev/swift-task-pro-mobile",
    downloadUrl: "https://expo.dev/@endale-dev/swifttask-pro-demo"
  },
  {
    title: "DevPortfolio Template",
    category: "Full-Stack Web",
    description:
      "A highly customizable portfolio boilerplate developed with Next.js and styled using Tailwind CSS. It features a built-in dark mode, excellent performance optimizations, and a modern, responsive design perfect for showcasing developer projects.",
    coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=DevPortfolio",
    platform: "web",
    website: "https://devportfolio-template-demo.vercel.app",
    github: "https://github.com/endale-dev/devportfolio-template"
  },
  {
    title: "E-commerce REST API",
    category: "Backend Service",
    description:
      "A scalable and secure E-commerce REST API built with Express.js and MongoDB. It includes comprehensive features like JWT authentication, a flexible product catalog, shopping carts, order management, and integrated Stripe payment processing.",
    coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=E-commerce+API",
    platform: "web",
    website: "https://ecommerce-api-docs.example.com", // Placeholder
    github: "https://github.com/endale-dev/ecommerce-api-backend"
  },
  {
    title: "PyCLI Image Processor",
    category: "CLI Tool",
    description:
      "A powerful, Python-powered command-line interface tool designed for batch image operations. It supports resizing, watermarking, format conversion, and various image filters, making it fast and highly scriptable for automated workflows.",
    coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=PyCLI+Image",
    platform: "cmd",
    github: "https://github.com/endale-dev/pycli-image-processor",
    pypi: "https://pypi.org/project/pycli-image-processor/"
  }
];

const linkIcons = {
  github: FaGithub,
  website: FaGlobe,
  downloadUrl: FaMobileAlt,
  pypi: FaPython,
  docs: FaBook // Added docs icon in case it's needed in the future
};

const Projects = () => {
  const [selected, setSelected] = useState(null);

  const openModal = (proj) => {
    setSelected(proj);
    document.body.style.overflow = 'hidden'; // Prevents scrolling behind modal
  };

  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = ''; // Restores scrolling
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selected) {
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.removeEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selected]); // Re-run effect when selected project changes

  const cardVariants = { // Renamed from 'variants' to 'cardVariants' for clarity
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 20 } },
    exit: { opacity: 0, scale: 0.9, y: -50, transition: { duration: 0.2 } }
  };

  const renderLinks = (proj, isModal = false) => {
    const keys = ['github', 'website', 'downloadUrl', 'pypi'];
    return keys.map((key) => {
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
    <section id="projects" className="relative py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="flex items-center text-3xl font-bold mb-12">
          <span className="text-cyan-400 font-code text-2xl mr-4">02.</span>
          My Projects
          <div className="flex-grow h-px bg-gray-700 ml-6" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 border border-gray-700 cursor-pointer" // Added cursor-pointer
              initial="enter"
              animate="center"
              whileHover={{ scale: 1.02 }}
              variants={cardVariants} // Using renamed variant
              transition={{ delay: i * 0.1 }}
              onClick={() => openModal(proj)} // Make entire card clickable for modal
            >
              <img
                src={proj.coverImage}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2 font-code">{proj.title}</h3>
                <span className="inline-block bg-gray-700 text-xs px-2 py-1 rounded-full mb-3 font-code">
                  {proj.category}
                </span>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{proj.description}</p>
                <div className="flex flex-wrap gap-4">
                  {renderLinks(proj)}
                  {/* The "Details" button is now redundant if the whole card opens the modal */}
                  {/* <button
                    onClick={() => openModal(proj)}
                    className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition text-sm"
                  >
                    <FaPlus className="w-4 h-4" /> Details
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop with click to close */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal} // Close modal when clicking on backdrop
            />
            {/* Modal */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants} // Apply modal variants
            >
              <div className="bg-gray-800 rounded-lg shadow-2xl max-w-xl w-full p-6 border border-gray-700 relative"> {/* Added relative for positioning close button */}
                {/* Modal Closing Icon - Enhanced */}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 text-cyan-400 hover:text-red-500 transition-all duration-200 p-2 rounded-full bg-gray-700 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50"
                  aria-label="Close"
                >
                  <FaTimes className="w-7 h-7" /> {/* Increased size for better visibility */}
                </button>

                <h3 className="text-2xl font-bold text-cyan-300 mb-3 font-code mt-4">{selected.title}</h3> {/* Added mt-4 to push content down from close button */}
                <span className="inline-block bg-gray-700 text-xs px-2 py-1 rounded-full mb-4 font-code">
                  {selected.category}
                </span>
                <p className="text-gray-300 text-base mb-6 leading-relaxed">{selected.description}</p> {/* Added leading-relaxed */}
                
                {/* Project Image in Modal (Optional, if you want a larger image) */}
                {selected.coverImage && (
                  <img
                    src={selected.coverImage}
                    alt={selected.title}
                    className="w-full h-auto rounded-md mb-6 border border-gray-700"
                  />
                )}

                <div className="flex flex-wrap gap-4">
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