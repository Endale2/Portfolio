import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaPlus, FaTimes, FaPython, FaMobileAlt, FaGlobe, FaBook } from 'react-icons/fa'; // Added FaBook for docs

const Projects = () => {
  // Define your project data with specific categories and links
  const projects = [
    {
      title: "SwiftTask Pro (Mobile)",
      category: "Mobile App Development",
      description:
        "A feature-rich mobile task management application designed for seamless personal and team productivity. SwiftTask Pro offers intuitive task creation, collaborative features, real-time synchronization, and cross-platform accessibility. Built using React Native for the frontend and a scalable Firebase backend for real-time data.",
      coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=SwiftTask+Pro+Mobile",
      platform: "mobile",
      github: "https://github.com/endale-dev/swift-task-pro-mobile", // Replace with your actual GitHub link
      downloadUrl: "https://expo.dev/@endale-dev/swifttask-pro-demo" // Example: Expo demo link or app store link
    },
    {
      title: "DevPortfolio Template (Web)",
      category: "Fullstack Web Development",
      description:
        "A highly customizable, modern, and responsive portfolio template built with Next.js and Tailwind CSS. Designed specifically for developers, it features dynamic project sections, dark mode, smooth scrolling, and performance optimizations. This template aims to provide an effortless way to showcase professional work online.",
      coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=DevPortfolio+Web",
      platform: "web",
      website: "https://devportfolio-template-demo.vercel.app", // Replace with your actual live demo URL
      github: "https://github.com/endale-dev/devportfolio-template", // Replace with your actual GitHub link
    },
    {
      title: "E-commerce REST API (Backend)",
      category: "Backend Development",
      description:
        "A robust and scalable RESTful API powering an e-commerce platform. Developed with Node.js, Express.js, and MongoDB, it handles core functionalities like user authentication (JWT), product catalog management, shopping cart operations, order processing, and secure payment integration via Stripe. Designed for microservice architecture compatibility.",
      coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=E-commerce+API",
      platform: "web", // Backend for a web application
      website: "https://ecommerce-api-docs.example.com", // Example: Link to API documentation (Swagger/Postman)
      github: "https://github.com/endale-dev/ecommerce-api-backend", // Replace with your actual GitHub link
    },
    {
      title: "PyCLI Image Processor (CLI Tool)",
      category: "Command Line Tool",
      description:
        "A powerful command-line interface (CLI) tool for batch image processing. Written in Python, it supports operations like resizing, watermarking, format conversion, and applying filters. Optimized for performance and ease of use, it's ideal for developers and designers needing quick, automated image manipulations.",
      coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=PyCLI+Image+Processor",
      platform: "cmd",
      github: "https://github.com/endale-dev/pycli-image-processor", // Replace with your actual GitHub link
      pypi: "https://pypi.org/project/pycli-image-processor/" // Example: PyPI or NPM link for package
    },
    {
      title: "Smart Home Dashboard (Web)",
      category: "IoT & Web Development",
      description:
        "An interactive web dashboard for monitoring and controlling smart home devices. Built with React for the frontend and a custom Node.js WebSocket server for real-time communication. Users can visualize sensor data, manage smart lights, and set automated routines through a responsive and intuitive interface.",
      coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=Smart+Home+Dashboard",
      platform: "web",
      website: "https://smarthome-dashboard.example.com", // Replace with your actual live demo URL
      github: "https://github.com/endale-dev/smart-home-dashboard", // Replace with your actual GitHub link
    },
    {
      title: "Data Visualization Engine (Web)",
      category: "Data Science & Frontend",
      description:
        "A web-based data visualization engine capable of rendering complex datasets into interactive charts and graphs. Utilizes D3.js and React to create dynamic and responsive visualizations. Supports various data inputs (CSV, JSON) and allows users to customize chart types and parameters.",
      coverImage: "https://via.placeholder.com/400x250/1a202c/edf2f7?text=Data+Viz+Engine",
      platform: "web",
      website: "https://data-viz-engine.example.com", // Replace with your actual live demo URL
      github: "https://github.com/endale-dev/data-visualization-engine", // Replace with your actual GitHub link
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
    const textClass = isModal ? "text-base" : "text-xs md:text-sm";
    const linkBaseClass = `flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 ${textClass} cursor-pointer group`; // Added group for icon animations

    return (
      <div className={`flex flex-wrap gap-x-4 gap-y-2 ${isModal ? "mt-4" : ""}`}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkBaseClass}
          >
            <FaGithub className={`${iconClass} group-hover:scale-110 transition-transform duration-200`} />
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
            <FaGlobe className={`${iconClass} group-hover:scale-110 transition-transform duration-200`} />
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
            <FaMobileAlt className={`${iconClass} group-hover:scale-110 transition-transform duration-200`} />
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
            <FaPython className={`${iconClass} group-hover:scale-110 transition-transform duration-200`} />
            View on PyPI/Package
          </a>
        )}
        {project.website && !['web', 'mobile', 'cmd'].includes(project.platform) && ( // For general documentation/website if not a typical web/mobile/cmd project
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className={linkBaseClass}
          >
            <FaBook className={`${iconClass} group-hover:scale-110 transition-transform duration-200`} />
            View Docs/Info
          </a>
        )}
        {!isModal && ( // "Details" button only on the card, not in the modal
          <button
            onClick={() => openModal(project)}
            className={`${linkBaseClass} mt-2 md:mt-0`} // Adjust margin for smaller screens
          >
            <FaPlus className={`${iconClass} group-hover:rotate-90 transition-transform duration-300`} /> {/* Rotate on hover */}
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
                         border border-slate-700 hover:border-cyan-600 flex flex-col h-full animate-fade-in-up" // Added fade-in-up
                         style={{ animationDelay: `${0.1 * index}s` }} // Staggered animation
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
                    {project.description.substring(0, 150)}... {/* Increased description length slightly */}
                  </p>
                </div>
                {renderProjectLinks(project)}
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4 animate-fade-in">
            <div className="bg-slate-800 rounded-lg shadow-2xl max-w-xl md:max-w-2xl w-full p-6 relative animate-scale-up border border-slate-700"> {/* Added border to modal */}
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