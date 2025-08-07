import React from 'react';
import {
    FaGithub,
    FaPython,
    FaMobileAlt,
    FaGlobe,
    FaRocket,
    FaDownload,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// Font classes
const codeFont = 'font-["JetBrains Mono","Fira Code","Monaco","Cascadia Code","Roboto Mono",Consolas,"Courier New",monospace]';
const sansFont = 'font-sans';

// ============================================================================
// 1. DATA SOURCE
// Centralized project data. Easy to add, remove, or update projects.
// ============================================================================
const projects = [
    {
        title: '[In Progress] Custom Shop Builder Platform',
        category: 'Full-Stack Web (Go, Vue.js)',
        description:
            'A web-based platform that lets users create and manage their own custom online shops through an intuitive dashboard. The frontend is built with Vue.js and the backend with Golang.',
        coverImage: '/images/drps.png',
        platform: 'web',
        status: 'in-progress',
    },
    {
        title: 'Ethiopian Recipe Sharing Platform',
        category: 'Full-Stack Web (MERN)',
        description:
            'A feature-rich web platform for food enthusiasts. Users can discover, share, and save their favorite Ethiopian recipes, fostering a vibrant community around traditional dishes.',
        coverImage: '/images/mern-recipe.png',
        platform: 'web',
        website: 'https://mern-ethiopian-recipes.vercel.app',
        github: 'https://github.com/Endale2/MERN-Ethiopian-Recipes',
        status: 'completed',
    },
    {
        title: 'Social Networking App',
        category: 'Mobile App (Flutter & BLoC)',
        description:
            'A mobile social networking application developed using Flutter and BLoC for state management. It leverages Firebase for authentication and real-time database operations.',
        coverImage: '/images/socialX.png',
        platform: 'mobile',
        github: 'https://github.com/Endale2/Social-Media-App-flutter-bloc-firebase-',
        downloadUrl: 'https://t.me/codejkr/64',
        status: 'completed',
    },
    {
        title: 'Telegather CLI Tool',
        category: 'CLI Tool (Python)',
        description:
            'A versatile Command Line Interface (CLI) tool designed to efficiently scrape messages from public Telegram channels and export them to a CSV file for analysis.',
        coverImage: '/images/telegather.png',
        platform: 'cli',
        github: 'https://github.com/Endale2/telegather',
        pypi: 'https://pypi.org/project/telegather/',
        status: 'completed',
    },
    {
        title: 'Instagram Homepage Clone',
        category: 'Front-End Web (Nuxt3)',
        description:
            'A fully responsive clone of Instagram’s homepage built with Nuxt3, optimized for both mobile and desktop experiences.',
        coverImage: '/images/insta.png',
        platform: 'web',
        website: 'https://instagram-clone-by-nuxt3.vercel.app',
        github: 'https://github.com/Endale2/instagram-clone_by_Nuxt3',
        status: 'completed',
    },
];

// ============================================================================
// 2. CONFIGURATION
// Icons and style mappings are kept here for easy customization.
// ============================================================================
const linkIcons = {
    github: <FaGithub />,
    website: <FaRocket />,
    downloadUrl: <FaDownload />,
    pypi: <FaPython />,
};

const platformIcons = {
    web: <FaGlobe />,
    mobile: <FaMobileAlt />,
    cli: <FaPython />,
};

const statusStyles = {
    completed: {
        border: 'border-green-400 shadow-green-400/30',
        badge: 'bg-green-500/90 text-white',
    },
    'in-progress': {
        border: 'border-yellow-400 shadow-yellow-300/30',
        badge: 'bg-yellow-400/90 text-slate-900',
    },
};

const timelineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, type: 'spring', stiffness: 100, damping: 15 },
    }),
};

// ============================================================================
// 3. CHILD COMPONENT: ProjectCard
// This component is responsible for rendering a single project.
// ============================================================================
function ProjectCard({ project, index, isLeft }) {
    const { title, category, description, coverImage, platform, status } = project;
    const currentStatusStyles = statusStyles[status];

    const renderLinks = () => {
        const keys = ['github', 'website', 'downloadUrl', 'pypi'];
        return keys
            .filter((key) => project[key])
            .map((key) => (
                <a
                    key={key}
                    href={project[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-cyan-300 bg-slate-800/80 hover:bg-cyan-700/90 transition-all duration-300 rounded-lg px-3 py-1.5 shadow-md text-xs font-medium hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${codeFont}`}
                    aria-label={`Open ${key.replace('Url', '')} for ${title}`}
                >
                    {linkIcons[key]}
                    <span className="capitalize">{key.replace('Url', '')}</span>
                </a>
            ));
    };

    return (
        <motion.div
            className={`relative flex flex-col md:flex-row items-center md:items-stretch ${isLeft ? 'md:flex-row-reverse' : ''} glass rounded-2xl shadow-xl border-2 ${currentStatusStyles.border} p-4 md:p-6 gap-4 md:gap-8 transition-all duration-300 group hover:border-cyan-400/80 hover:shadow-cyan-400/20`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={timelineVariants}
        >
            {/* Image Section */}
            <div className="md:w-1/2 w-full flex justify-center items-center px-2 md:px-4 mt-3 md:mt-0 relative group">
                <img
                    src={coverImage}
                    alt={`${title} preview`}
                    className={`w-full max-w-xs h-36 md:h-44 object-cover rounded-xl border-4 ${currentStatusStyles.border} shadow-lg group-hover:scale-105 transition-transform duration-500 cursor-pointer`}
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-b-xl p-3 flex flex-col gap-1">
                    <h3 className={`text-lg font-bold text-white drop-shadow-md truncate ${codeFont}`}>{title}</h3>
                    <span className={`text-cyan-300 text-xs ${codeFont}`}>{category}</span>
                </div>
            </div>

            {/* Content Section */}
            <div className={`md:w-1/2 w-full px-2 md:px-4 py-3 md:py-0 flex flex-col justify-center ${isLeft ? 'md:pr-8' : 'md:pl-8'} gap-2`}> 
                <div className="flex items-center gap-2 mb-1">
                    <span className="bg-slate-800/90 p-2 rounded-lg border border-slate-700 text-cyan-400">
                        {platformIcons[platform]}
                    </span>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${currentStatusStyles.badge} ${codeFont}`}>
                        {status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                </div>
                <p className={`text-slate-200 text-xs md:text-sm leading-relaxed mb-2 ${sansFont}`}>{description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">{renderLinks()}</div>
            </div>
        </motion.div>
    );
}

// ============================================================================
// 4. MAIN COMPONENT: Projects
// The primary component that assembles the section.
// ============================================================================
function Projects() {
    return (
        <section id="projects" className={`relative py-16 min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a192f] text-white overflow-hidden`}>
            <div className="relative z-10 max-w-5xl mx-auto px-2 md:px-6">
                {/* Section Header */}
                <div className="flex items-center mb-14 md:mb-20">
                    <span className={`text-cyan-400 ${codeFont} text-2xl md:text-3xl mr-4 bg-slate-800/70 px-3 py-1 rounded-lg shadow border border-cyan-400/30 animate-pulse`}>03.</span>
                    <h2 className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight ${codeFont} flex items-center gap-2`}>
                        <span className="text-cyan-400">&#123;</span> Projects <span className="text-cyan-400">&#125;</span>
                    </h2>
                    <div className="flex-grow h-px bg-gradient-to-r from-cyan-400/30 via-slate-700 to-transparent ml-6" />
                </div>

                {/* Timeline Layout */}
                <div className="relative">
                    {/* Vertical line for desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-400/60 via-cyan-700/30 to-transparent -translate-x-1/2 animate-pulse" />
                    <div className="flex flex-col gap-14 md:gap-20">
                        {projects.map((proj, i) => (
                            <div key={i} className="relative flex justify-center">
                                {/* Timeline Dot for desktop */}
                                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full items-center justify-center z-10">
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-slate-900 shadow-lg animate-pulse" />
                                </div>
                                <ProjectCard project={proj} index={i} isLeft={i % 2 !== 0} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;