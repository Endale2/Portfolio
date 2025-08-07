import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Core tech skills for easy updates
const skills = [
    'Go, Python & Node.js',
    'Next.js, Nuxt.js, React & Vue',
    'Tailwind CSS & SCSS',
    'Machine Learning & CV',
    'GraphQL & REST APIs',
    'Docker & Kubernetes',
    'MongoDB & PostgreSQL',
    'TypeScript & JavaScript',
];

const About = () => {

    // Font classes for consistency
    const codeFont = 'font-["JetBrains Mono","Fira Code","Monaco","Cascadia Code","Roboto Mono",Consolas,"Courier New",monospace]';
    const sansFont = 'font-sans';

    // Variants for the main container to orchestrate children animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 15 }
        },
    };

    return (
        <section id="about" className="relative py-16 min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a192f] text-white overflow-hidden">
            <motion.div
                className="relative z-10 max-w-5xl mx-auto px-2 md:px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 md:p-8 lg:p-12">
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="flex items-center mb-14 md:mb-20">
                        <span className={`text-cyan-400 ${codeFont} text-2xl md:text-3xl mr-4 bg-slate-800/70 px-3 py-1 rounded-lg shadow border border-cyan-400/30 animate-pulse`}>
                            01.
                        </span>
                        <h2 className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight ${codeFont} flex items-center gap-2`}>
                            <span className="text-cyan-400">&#123;</span> About Me <span className="text-cyan-400">&#125;</span>
                        </h2>
                        <div className="flex-grow h-px bg-gradient-to-r from-cyan-400/30 via-slate-700 to-transparent ml-6" />
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start">
                        {/* Bio Section */}
                        <motion.div
                            variants={itemVariants}
                            className={`lg:col-span-3 text-slate-300 text-base md:text-lg leading-relaxed space-y-4 md:space-y-6 ${sansFont}`}
                        >
                            <p>
                                I architect and build robust backends using Go, Python, and Node.js, and craft engaging frontends with Next.js, Nuxt.js, React, and Vue. My eye for clean UI/UX styling ensures every application feels polished and intuitive.
                            </p>
                            <p>
                                Beyond full-stack development, I dive into machine learning and computer vision projects—applying algorithms that turn data into actionable insights and smart features.
                            </p>
                            <p>
                                With a passion for clean code and scalable architecture, I enjoy tackling complex problems and turning innovative ideas into production-ready solutions that make a real impact.
                            </p>
                        </motion.div>

                        {/* Tech Stack Section */}
                        <motion.div variants={itemVariants} className="lg:col-span-2">
                            <h3 className={`text-lg md:text-xl font-semibold text-white mb-6 ${codeFont}`}>My Tech Stack</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        className={`flex items-center bg-slate-700/50 text-cyan-300 rounded-lg px-3 md:px-4 py-2 md:py-3 transition-all duration-300 hover:bg-slate-700 hover:scale-105 border border-slate-600/50 hover:border-cyan-400/50 group ${codeFont}`}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`${skill} technology`}
                                    >
                                        <FiChevronRight className="text-cyan-500 mr-2 md:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                                        <span className="text-xs md:text-sm leading-tight">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
