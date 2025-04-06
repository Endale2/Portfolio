import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaPlus, FaTimes } from 'react-icons/fa';
import social from "../assets/images/social.png";

const Projects = () => {
  const projects = [
    {
      title: "Mobile App",
      description:
        "A cutting-edge mobile application that streamlines productivity on the go. This app integrates modern design with robust functionality to offer a seamless user experience.",
      coverImage: social,
      platform: "mobile",
      website: "", // No website demo for mobile app
      github: "https://github.com/yourusername/mobile-app-repo",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing my projects and skills with interactive design. The site highlights my expertise in modern web technologies and engaging UI/UX.",
      coverImage: "/assets/images/project2.jpg",
      platform: "web",
      website: "https://yourportfolio.com",
      github: "https://github.com/yourusername/portfolio-website",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce web application with seamless payment integration. This project demonstrates my ability to build scalable systems with efficient backend and intuitive frontend.",
      coverImage: "/assets/images/project3.jpg",
      platform: "web",
      website: "https://ecommerce.example.com",
      github: "https://github.com/yourusername/ecommerce-platform",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 bg-gray-900 text-white px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md transition duration-150 hover:scale-105 p-3 flex flex-col justify-between h-[360px]"
            >
              {project.coverImage && (
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="rounded-t-lg w-full h-40 object-cover"
                />
              )}
              <div className="pt-3 flex-1">
                <h3 className="text-lg font-semibold text-green-300 mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs mb-3">
                  {project.description.substring(0, 60)}...
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-400 hover:underline text-xs cursor-pointer"
                  >
                    <FaExternalLinkAlt className="mr-1" />
                    Website
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-400 hover:underline text-xs cursor-pointer"
                  >
                    <FaGithub className="mr-1" />
                    GitHub
                  </a>
                )}
                <button
                  onClick={() => openModal(project)}
                  className="flex items-center text-green-400 hover:underline text-xs cursor-pointer"
                >
                  <FaPlus className="mr-1" />
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
            <div className="bg-gray-800 rounded-lg shadow-lg max-w-lg w-full p-4 relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-green-400 hover:text-green-500 cursor-pointer"
              >
                <FaTimes className="w-6 h-6" />
              </button>
              {selectedProject.coverImage && (
                <img
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
              )}
              <h3 className="text-2xl font-semibold text-green-300 mb-2">
                {selectedProject.title}
              </h3>
              <div className="text-gray-300 mb-4 max-h-60 overflow-y-auto text-sm">
                {selectedProject.description}
              </div>
              <div className="flex flex-wrap gap-4">
                {selectedProject.website && (
                  <a
                    href={selectedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-400 hover:underline text-sm cursor-pointer"
                  >
                    <FaExternalLinkAlt className="mr-1" />
                    Website
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-400 hover:underline text-sm cursor-pointer"
                  >
                    <FaGithub className="mr-1" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
