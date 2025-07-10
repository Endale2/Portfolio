import React, { useState, useEffect, useCallback } from 'react';
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
        "title": "[In Progress] Custom Shop Builder Platform",
        "category": "Full-Stack Web (Go, Vue.js)",
        "description": "A web-based platform that lets users create and manage their own custom online shops through an intuitive dashboard. The frontend is built with Vue.js and the backend with Golang.",
        "coverImage": "/images/drps.png",
        "platform": "web",
        "website": null,
        "github": null,
        "status": "in-progress"
    },
    {
        "title": "Ethiopian Recipe Sharing Platform",
        "category": "Full-Stack Web (MERN)",
        "description": "A feature-rich web platform for food enthusiasts. Users can discover, share, and save their favorite Ethiopian recipes, fostering a vibrant community around traditional dishes.",
        "coverImage": "/images/mern-recipe.png",
        "platform": "web",
        "website": "https://mern-ethiopian-recipes.vercel.app",
        "github": "https://github.com/Endale2/MERN-Ethiopian-Recipes",
        "status": "completed"
    },
    {
        "title": "Social Networking App",
        "category": "Mobile App (Flutter & BLoC)",
        "description": "A mobile social networking application developed using Flutter and BLoC for state management. It leverages Firebase for authentication and real-time database operations.",
        "coverImage": "/images/socialX.png",
        "platform": "mobile",
        "github": "https://github.com/Endale2/Social-Media-App-flutter-bloc-firebase-",
        "downloadUrl": "https://t.me/codejkr/64",
        "status": "completed"
    },
    {
        "title": "Telegather CLI Tool",
        "category": "CLI Tool (Python)",
        "description": "A versatile Command Line Interface (CLI) tool designed to efficiently scrape messages from public Telegram channels and export them to a CSV file for analysis.",
        "coverImage": "/images/telegather.png",
        "platform": "cli",
        "github": "https://github.com/Endale2/telegather",
        "pypi": "https://pypi.org/project/telegather/",
        "status": "completed"
    },
    {
        "title": "Instagram Homepage Clone",
        "category": "Front-End Web (Nuxt3)",
        "description": "A fully responsive clone of Instagram’s homepage built with Nuxt3, optimized for both mobile and desktop experiences.",
        "coverImage": "/images/insta.png",
        "platform": "web",
        "website": "https://instagram-clone-by-nuxt3.vercel.app",
        "github": "hhttps://github.com/Endale2/instagram-clone_by_Nuxt3",
        "status": "completed"
      }
      
];

// Icon mapping for project links and platforms
const linkIcons = {
    github: <FaGithub />,
    website: <FaRocket />,
    downloadUrl: <FaDownload />,
    pypi: <FaPython />,
    docs: <FaExternalLinkAlt />
};

const platformIcons = {
    web: <FaGlobe />,
    mobile: <FaMobileAlt />,
    cli: <FaPython />,
};

const Projects = () => {
    const [selected, setSelected] = useState(null);

    const openModal = useCallback((proj) => {
        setSelected(proj);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeModal = useCallback(() => {
        setSelected(null);
        document.body.style.overflow = '';
    }, []);

    useEffect(() => {
        const handleKey = (e) => e.key === 'Escape' && closeModal();
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [closeModal]);

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 150, damping: 20 } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
    };

    // Renders the links for each project card/modal
    const renderLinks = (proj) => {
        const keys = ['github', 'website', 'downloadUrl', 'pypi'];
        return keys.map(key => {
            if (!proj[key]) return null;
            const Icon = linkIcons[key] || <FaExternalLinkAlt />;
            return (
                <a
                    key={key}
                    href={proj[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-300 bg-slate-700/50 hover:bg-slate-700 transition-all duration-300 rounded-lg px-4 py-2 shadow-md text-sm font-medium hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    aria-label={`Open ${key.replace('Url', '')} for ${proj.title}`}
                >
                    {Icon}
                    <span className="capitalize">{key.replace('Url', '')}</span>
                </a>
            );
        });
    };

    return (
        <section id="projects" className="relative section-padding bg-slate-900 text-white overflow-hidden">
            <div className="relative z-10 container-responsive">
                {/* Section Header */}
                <div className="flex items-center mb-16">
                    <span className="text-cyan-400 font-code text-2xl mr-4">02.</span>
                    <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                        My Projects
                    </h2>
                    <div className="flex-grow h-px bg-slate-700 ml-6" />
                </div>

                {/* Projects Grid - Responsive with optimal breakpoints */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((proj, i) => (
                        <motion.article
                            key={i}
                            className="bg-slate-800/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 border border-slate-700 cursor-pointer flex flex-col group card-hover"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => openModal(proj)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && openModal(proj)}
                            aria-label={`View details for ${proj.title}`}
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden">
                                <img 
                                    src={proj.coverImage} 
                                    alt={`${proj.title} preview`}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                {/* Platform Badge */}
                                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-cyan-400 p-2 rounded-lg border border-slate-700">
                                    {platformIcons[proj.platform]}
                                </div>
                                {/* Status Badge */}
                                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
                                    proj.status === 'completed' 
                                        ? 'bg-green-500/80 text-white' 
                                        : 'bg-yellow-500/80 text-slate-900'
                                }`}>
                                    {proj.status === 'completed' ? 'Completed' : 'In Progress'}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                                    {proj.title}
                                </h3>
                                <p className="text-cyan-400 text-sm font-code mb-3">
                                    {proj.category}
                                </p>
                                <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                                    {proj.description}
                                </p>
                                
                                {/* Links */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {renderLinks(proj)}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="bg-slate-800/95 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="relative p-6 border-b border-slate-700">
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors duration-200"
                                    aria-label="Close modal"
                                >
                                    <FaTimes size={24} />
                                </button>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-slate-700/50 p-3 rounded-lg">
                                        {platformIcons[selected.platform]}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{selected.title}</h3>
                                        <p className="text-cyan-400 font-code">{selected.category}</p>
                                    </div>
                                </div>
                                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                    selected.status === 'completed' 
                                        ? 'bg-green-500/80 text-white' 
                                        : 'bg-yellow-500/80 text-slate-900'
                                }`}>
                                    {selected.status === 'completed' ? 'Completed' : 'In Progress'}
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6">
                                <img 
                                    src={selected.coverImage} 
                                    alt={`${selected.title} preview`}
                                    className="w-full h-64 object-cover rounded-lg mb-6"
                                />
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    {selected.description}
                                </p>
                                
                                {/* Modal Links */}
                                <div className="flex flex-wrap gap-3">
                                    {renderLinks(selected)}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
