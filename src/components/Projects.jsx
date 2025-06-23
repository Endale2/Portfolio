import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaPlus, FaTimes, FaPython, FaMobileAlt, FaGlobe } from 'react-icons/fa'; // Added FaGlobe for web apps

const Projects = () => {
  // Define your project data with specific categories and links
  const projects = [
    {
      title: "TaskFlow Mobile App",
      category: "Mobile App",
      description:
        "A cutting-edge mobile application designed to streamline personal and team productivity. TaskFlow offers intuitive task management, collaborative features, and real-time synchronization, providing a seamless user experience for staying organized on the go. Built with React Native and a Firebase backend.",
      coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=TaskFlow+Mobile", // Placeholder for a mobile app screenshot
      platform: "mobile",
      github: "https://github.com/yourusername/taskflow-mobile",
      downloadUrl: "https://play.google.com/store/apps/details?id=com.taskflow" // Example: Google Play Store link
    },
    {
      title: "DevPortfolio Template",
      category: "Fullstack Web",
      description:
        "A modern, responsive portfolio template built with Next.js and Tailwind CSS, designed for developers to showcase their work effortlessly. Features include dark mode, smooth scrolling, and dynamic project sections. It's fully customizable and optimized for performance.",
      coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=Portfolio+Web", // Placeholder for a web screenshot
      platform: "web",
      website: "https://devportfolio-template.vercel.app", // Example: Live demo URL
      github: "https://github.com/yourusername/devportfolio-template",
    },
    {
      title: "E-commerce API",
      category: "Fullstack Web",
      description:
        "A robust RESTful API for an e-commerce platform, built with Node.js, Express, and MongoDB. It handles user authentication, product management, order processing, and payment integration (Stripe). Designed for scalability and high performance.",
      coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=E-commerce+API", // Placeholder for an API screenshot/diagram
      platform: "web", // Considered web as it serves web applications
      website: "https://api.ecommerce-example.com/docs", // Example: Link to API documentation (Swagger/Postman)
      github: "https://github.com/yourusername/ecommerce-api-backend",
    },
    {
      title: "Image Recognition CLI",
      category: "Machine Learning & CV",
      description:
        "A command-line tool for basic image recognition tasks, leveraging pre-trained deep learning models (e.g., TensorFlow/PyTorch). Users can input an image path and receive predictions about its content. Ideal for quick local image analysis.",
      coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=Image+Rec+CLI", // Placeholder for a CLI screenshot/logo
      platform: "cmd",
      github: "https://github.com/yourusername/image-recognition-cli",
      pypi: "https://pypi.org/project/image-rec-cli/" // Example: PyPI or NPM link
    },
    {
      title: "Smart Home Dashboard",
      category: "Fullstack Web",
      description:
        "An interactive web dashboard for managing smart home devices, built with React and a custom WebSocket server. Allows users to monitor sensors, control lights, and schedule automations from a single interface.",
      coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=Smart+Home+Dashboard", // Placeholder image
      platform: "web",
      website: "https://smarthome.yourdomain.com",
      github: "https://github.com/yourusername/smart-home-dashboard",
    },
    {
      title: "Portfolio Generator CLI",
      category: "Command Line Tools",
      description:
        "A Python-based command-line tool that generates a static HTML portfolio website from a simple configuration file. Automates the process of creating a professional online presence for developers and designers.",
      coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=Portfolio+Generator", // Placeholder image
      platform: "cmd",
      github: "https://github.com/yourusername/portfolio-generator-cli",
      pypi: "https://pypi.org/project/portfolio-gen-cli/"
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Disable scrolling on the body when modal is open
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  // Function to render appropriate links based on project platform
  const renderProjectLinks = (project, isModal = false) => {
    const iconClass = isModal ? "mr-2" : "mr-1";
    const textClass = isModal ? "text-base" : "text-xs md:text-sm"; // Adjusted for better readability on card
    const linkBaseClass = `flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 ${textClass} cursor-pointer`; // More vibrant cyan

    return (
      <div className={`flex flex-wrap gap-x-4 gap-y-2 ${isModal ? "mt-4" : ""}`}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkBaseClass}
          >
            <FaGithub className={iconClass} />
            View Source Code
          </a>
        )}
        {project.website && project.platform === "web" && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className={linkBaseClass}
          >
            <FaGlobe className={iconClass} /> {/* Using FaGlobe for web */}
            View Live Demo
          </a>
        )}
        {project.downloadUrl && project.platform === "mobile" && (
          <a
            href={project.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkBaseClass}
          >
            <FaMobileAlt className={iconClass} />
            Download App
          </a>
        )}
        {project.pypi && project.platform === "cmd" && (
          <a
            href={project.pypi}
            target="_blank"
            rel="noopener noreferrer"
            className={linkBaseClass}
          >
            <FaPython className={iconClass} />
            View on PyPI/Package
          </a>
        )}
        {!isModal && ( // "See More" button only on the card, not in the modal
          <button
            onClick={() => openModal(project)}
            className={`${linkBaseClass} mt-2 md:mt-0`} // Adjust margin for smaller screens
          >
            <FaPlus className={iconClass} />
            Details
          </button>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl"> {/* Increased max-width for more content */}
        {/* Section Heading with consistent styling */}
        <h2 className="relative flex items-center text-3xl font-bold text-slate-100 mb-12 w-full">
          <span className="font-code text-2xl text-cyan-400 mr-3">02.</span> {/* Incremented section number */}
          My Projects
          <span className="flex-grow h-px bg-slate-700 ml-6"></span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"> {/* Adjusted grid for flexibility */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2
                         border border-slate-700 hover:border-cyan-600 flex flex-col h-full" // Added subtle border and hover effect
            >
              {project.coverImage && (
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="rounded-t-lg w-full h-48 object-cover border-b border-slate-700"
                />
              )}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2 font-code">{project.title}</h3> {/* Applied font-code */}
                  <span className="text-slate-400 text-xs bg-slate-700 px-2 py-1 rounded-full mb-3 inline-block font-code">
                    {project.category}
                  </span>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description.substring(0, 120)}... {/* Increased description length */}
                  </p>
                </div>
                {renderProjectLinks(project)}
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4 animate-fadeIn">
            <div className="bg-slate-800 rounded-lg shadow-2xl max-w-xl md:max-w-2xl w-full p-6 relative animate-scaleUp border border-slate-700"> {/* Added border to modal */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 cursor-pointer p-1 rounded-full bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label="Close project details"
              >
                <FaTimes className="w-6 h-6" />
              </button>
              {selectedProject.coverImage && (
                <img
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  className="rounded-lg w-full h-56 object-cover mb-6 border border-slate-700"
                />
              )}
              <h3 className="text-3xl font-bold text-cyan-300 mb-3 font-code">{selectedProject.title}</h3>
              <p className="text-slate-400 text-base mb-4 bg-slate-700 px-3 py-1 rounded-full inline-block font-code">
                {selectedProject.category}
              </p>
              <div className="text-slate-300 mb-6 max-h-72 overflow-y-auto text-base leading-relaxed custom-scrollbar"> {/* Custom scrollbar class */}
                {selectedProject.description}
              </div>
              {renderProjectLinks(selectedProject, true)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;