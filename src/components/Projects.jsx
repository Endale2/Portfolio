import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my projects and skills.",
      link: "#",
      coverImage: "/assets/images/project1.jpg", 
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce web application with payment integration.",
      link: "#",
      coverImage: "/assets/images/project2.jpg", 
    },
    {
      title: "Task Manager App",
      description: "A productivity tool to manage daily tasks and projects.",
      link: "#",
      coverImage: "/assets/images/project3.jpg", 
    },
   
  ];

  return (
    <section id="projects" className="py-16 bg-gray-900 text-white px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2> {/* Title in white */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"> {/* Reduced gap */}
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md transition duration-300 hover:scale-105 p-4"> {/* Added padding to card, p-4 overall padding */}
              {project.coverImage && (
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="rounded-t-lg w-full h-40 object-cover" // Reduced image height
                />
              )}
              <div className="pt-4"> {/* Added padding top to content */}
                <h3 className="text-xl font-semibold text-indigo-300 mb-2">{project.title}</h3> {/* Reduced margin */}
                <p className="text-gray-400 text-sm mb-4">{project.description}</p> {/* Smaller font size, reduced margin */}
                <a
                  href={project.link}
                  className="text-indigo-400 hover:underline inline-block text-sm" // Smaller font size
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;