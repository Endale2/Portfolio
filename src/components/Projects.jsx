import React from 'react';
import {
  FaGithub,
  FaPython,
  FaMobileAlt,
  FaGlobe,
  FaRocket,
  FaDownload,
} from 'react-icons/fa';
import { FaRobot } from 'react-icons/fa6';
import { motion } from 'framer-motion';

// Fonts
const codeFont =
  'font-["JetBrains Mono","Fira Code","Monaco","Cascadia Code","Roboto Mono",Consolas,"Courier New",monospace]';
const sansFont = 'font-sans';

// -----------------------------------------------------------------------------
// 1. DATA
// -----------------------------------------------------------------------------
const projects = [
  {
    title: 'n8n AutoNewsBot – Intelligent RSS to Telegram Automation with OpenAI',
    category: 'n8n AI Automation',
    description:
      'AutoNewsBot is a fully automated content curation workflow built using n8n, designed to fetch, analyze, and rewrite trending articles from RSS feeds using OpenAI for more engaging summaries. It enhances posts with thumbnails and publishes them to Telegram hourly.',
    coverImage: '/images/n8n.png',
    platform: 'bot',
    status: 'completed',
  },
  {
    title: 'Shop24 - Custom Shop Builder Platform',
    category: 'Full-Stack Web (Go, Vue.js)',
    description:
      'A platform that lets users create and manage custom online shops with Vue.js frontend and Golang backend.',
    coverImage: '/images/drps.png',
    platform: 'web',
    status: 'in-progress',
    website: 'http://shop24.sbs',
  },
  {
    title: 'Ethiopian Recipe Sharing Platform',
    category: 'Full-Stack Web (MERN)',
    description:
      'A recipe-sharing platform where users discover, share, and save Ethiopian recipes.',
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
      'A mobile social networking application built with Flutter & Firebase.',
    coverImage: '/images/socialX.png',
    platform: 'mobile',
    github:
      'https://github.com/Endale2/Social-Media-App-flutter-bloc-firebase-',
    downloadUrl: 'https://t.me/codejkr/64',
    status: 'completed',
  },
  {
    title: 'Telegather CLI Tool',
    category: 'CLI Tool (Python)',
    description:
      'A CLI tool to scrape Telegram channel messages and export them to CSV.',
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
      'A responsive clone of Instagram’s homepage built with Nuxt3.',
    coverImage: '/images/insta.png',
    platform: 'web',
    website: 'https://instagram-clone-by-nuxt3.vercel.app',
    github: 'https://github.com/Endale2/instagram-clone_by_Nuxt3',
    status: 'completed',
  },
];

// -----------------------------------------------------------------------------
// 2. CONFIG
// -----------------------------------------------------------------------------
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
  bot: <FaRobot />,
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
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 90,
      damping: 14,
    },
  }),
};

// -----------------------------------------------------------------------------
// 3. CHILD: ProjectCard (shrunk + centered)
// -----------------------------------------------------------------------------
function ProjectCard({ project, index, isLeft }) {
  const { title, category, description, coverImage, platform, status } = project;
  const styles = statusStyles[status];

  const renderLinks = () =>
    ['github', 'website', 'downloadUrl', 'pypi']
      .filter((k) => project[k])
      .map((k) => (
        <a
          key={k}
          href={project[k]}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1 text-cyan-300 bg-slate-800/80 hover:bg-cyan-700/90 transition-all duration-300 rounded-md px-2 py-0.5 shadow text-[11px] font-medium hover:scale-105 ${codeFont}`}
        >
          {linkIcons[k]}
          <span className="capitalize">{k.replace('Url', '')}</span>
        </a>
      ));

  return (
    <motion.div
      className={`relative flex flex-col md:flex-row items-center ${
        isLeft ? 'md:flex-row-reverse' : ''
      } glass rounded-xl shadow-lg border ${styles.border} p-3 md:p-5 gap-3 md:gap-6`}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={timelineVariants}
    >
      {/* Image */}
      <div className="md:w-1/2 w-full flex justify-center items-center relative">
        <img
          src={coverImage}
          alt={title}
          className={`w-full max-w-xs h-28 md:h-36 object-cover rounded-lg border-2 ${styles.border} shadow-md transition-transform duration-500`}
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-b-lg p-2">
          <h3 className={`text-sm md:text-base font-bold text-white truncate ${codeFont}`}>
            {title}
          </h3>
          <span className={`text-cyan-300 text-[11px] ${codeFont}`}>
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="md:w-1/2 w-full flex flex-col justify-center gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-slate-800/90 p-1.5 rounded border border-slate-700 text-cyan-400 text-sm">
            {platformIcons[platform]}
          </span>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${styles.badge} ${codeFont}`}
          >
            {status === 'completed' ? 'Completed' : 'In Progress'}
          </span>
        </div>
        <p className={`text-slate-200 text-xs leading-relaxed ${sansFont}`}>
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-1">{renderLinks()}</div>
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------------------
// 4. MAIN: Projects Section
// -----------------------------------------------------------------------------
function Projects() {
  return (
    <section
      id="projects"
      className="relative py-14 min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a192f] text-white"
    >
      {/* Overlay glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/4 top-0 w-1/3 h-full bg-gradient-to-b from-cyan-400/10 via-blue-500/10 to-transparent blur-2xl animate-pulse" />
        <div className="absolute right-0 top-1/3 w-1/5 h-1/3 bg-cyan-400/10 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-3">
        {/* Section header */}
        <div className={`mb-2 text-cyan-400/70 text-xs pl-1 ${codeFont}`}>
          {'// Featured Projects'}
        </div>
        <div className="flex items-center mb-10">
          <span
            className={`text-cyan-400 ${codeFont} text-lg mr-3 bg-slate-800/70 px-2 py-0.5 rounded shadow border border-cyan-400/30`}
          >
            03.
          </span>
          <h2
            className={`text-xl md:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight ${codeFont}`}
          >
            <span className="text-cyan-400">&#123;</span> Projects{' '}
            <span className="text-cyan-400">&#125;</span>
          </h2>
          <div className="flex-grow h-px bg-gradient-to-r from-cyan-400/30 via-slate-700 to-transparent ml-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-400/80 via-blue-500/60 to-transparent -translate-x-1/2 animate-pulse" />
          <div className="flex flex-col gap-10 md:gap-16">
            {projects.map((p, i) => (
              <div key={i} className="relative flex justify-center">
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full items-center justify-center z-10">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-slate-900 shadow animate-pulse ring-2 ring-cyan-400/20" />
                </div>
                <ProjectCard project={p} index={i} isLeft={i % 2 !== 0} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  
}

export default Projects;
