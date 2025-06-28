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

// Consistent Particle component for background animation
const Particle = () => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const scale = Math.random() * 1.5 + 0.5;
    const duration = Math.random() * 8 + 5;
    const delay = Math.random() * 5;
    const size = Math.random() * 3 + 1;

    return (
        <motion.div
            className="absolute bg-cyan-400/20 rounded-full pointer-events-none"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                x: `${x}vw`,
                y: `${y}vh`,
                scale: [0, scale, 0],
                opacity: [0, 0.4, 0],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay,
            }}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                filter: 'blur(1px)',
                top: 0,
                left: 0,
            }}
        />
    );
};

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
            {/* Background particle effect */}
            <div className="absolute inset-0 z-0 opacity-20">
                {Array.from({ length: 15 }).map((_, i) => (
                    <Particle key={i} />
                ))}
            </div>

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
                                    className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-110" 
                                    loading="lazy" 
                                />
                                {/* Status badge */}
                                {proj.status === 'in-progress' && (
                                    <div className="absolute top-3 left-3 bg-yellow-500/90 text-yellow-900 text-xs px-2 py-1 rounded-full font-semibold">
                                        In Progress
                                    </div>
                                )}
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-4 w-full">
                                        <span className="text-cyan-400 font-semibold text-sm">View Details →</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 line-clamp-2">{proj.title}</h3>
                                    <div className="text-cyan-400 ml-2 shrink-0">
                                        {platformIcons[proj.platform]}
                                    </div>
                                </div>
                                
                                <span className="inline-block bg-slate-700/80 text-cyan-300 text-xs px-3 py-1 rounded-full mb-4 font-code">
                                    {proj.category}
                                </span>
                                
                                <p className="text-slate-400 text-sm line-clamp-3 flex-grow mb-4">
                                    {proj.description}
                                </p>
                                
                                {/* Project links preview */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {Object.keys(proj).filter(key => ['github', 'website', 'downloadUrl', 'pypi'].includes(key) && proj[key]).slice(0, 2).map(key => {
                                        const Icon = linkIcons[key];
                                        return (
                                            <div key={key} className="text-cyan-400/60 text-xs">
                                                {Icon}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selected && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                        />
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <motion.div
                                className="relative bg-slate-800/95 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-4xl border border-slate-700 flex flex-col max-h-[90vh]"
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="modal-title"
                            >
                                <img
                                    src={selected.coverImage}
                                    alt={`${selected.title} full preview`}
                                    className="w-full h-auto max-h-80 object-cover rounded-t-2xl"
                                    loading="lazy"
                                />
                                <div className="p-6 md:p-8 overflow-y-auto">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 id="modal-title" className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text leading-tight">
                                            {selected.title}
                                        </h3>
                                        <div className="text-2xl md:text-3xl text-cyan-400 ml-4 shrink-0">
                                            {platformIcons[selected.platform]}
                                        </div>
                                    </div>

                                    <span className="inline-block bg-slate-700 text-cyan-200 text-sm px-3 py-1 rounded-full mb-6 font-code">
                                        {selected.category}
                                    </span>

                                    <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                                        {selected.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 md:gap-4 mt-auto justify-start border-t border-slate-700 pt-6">
                                        {renderLinks(selected)}
                                    </div>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors duration-200 p-2 rounded-full bg-slate-900/50 hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    aria-label="Close project details"
                                >
                                    <FaTimes className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
