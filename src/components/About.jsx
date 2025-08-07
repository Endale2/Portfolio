import React from 'react';
import { motion } from 'framer-motion';

const codeFont = 'font-["JetBrains Mono","Fira Code","Monaco","Cascadia Code","Roboto Mono",Consolas,"Courier New",monospace]';
const sansFont = 'font-sans';

const About = () => {
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
        <section id="about" className="relative section-padding bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden">
            {/* Animated code-inspired background overlay */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute left-1/4 top-0 w-1/2 h-full bg-gradient-to-b from-cyan-400/10 via-blue-500/10 to-transparent animate-pulse rounded-full blur-2xl" />
                <div className="absolute right-0 top-1/3 w-1/4 h-1/2 bg-cyan-400/10 rounded-full blur-2xl animate-pulse" />
            </div>
            <motion.div
                className="relative z-10 max-w-3xl mx-auto px-2 md:px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Code-style comment above section header */}
                <div className={`mb-2 text-cyan-400/70 text-xs md:text-sm pl-2 select-none ${codeFont}`}>{'// About Me'}</div>
                {/* Section Header */}
                <motion.div variants={itemVariants} className="flex items-center mb-10 md:mb-14">
                    <span className={`text-cyan-400 ${codeFont} text-xl md:text-2xl mr-4 bg-slate-800/70 px-3 py-1 rounded-lg shadow border border-cyan-400/30 animate-pulse`}>01.</span>
                    <h2 className={`text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight ${codeFont} flex items-center gap-2`}>
                        <span className="text-cyan-400">&#123;</span> About Me <span className="text-cyan-400">&#125;</span>
                    </h2>
                    <div className="flex-grow h-px bg-gradient-to-r from-cyan-400/30 via-slate-700 to-transparent ml-6" />
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className={`glass rounded-2xl border-2 border-cyan-400/20 shadow-xl p-5 md:p-8 text-slate-200 text-sm md:text-base leading-relaxed ${sansFont}`}
                >
                    <p className="mb-3">
                        I design and build robust backends using Go, Python, and Node.js, and craft engaging frontends with Next.js, Nuxt.js, React, and Vue. My eye for clean UI/UX styling ensures every application feels polished and intuitive.
                    </p>
                    <p className="mb-3">
                        Beyond full-stack development, I dive into machine learning and computer vision projects—applying algorithms that turn data into actionable insights and smart features.
                    </p>
                    <p>
                        With a passion for clean code and scalable architecture, I enjoy tackling complex problems and turning innovative ideas into production-ready solutions that make a real impact.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
