import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

// A more subtle and performant particle component for the background.
const Particle = () => {
    // Generate random properties for each particle's animation
    const x = Math.random() * 100; // Position across the width (in vw)
    const y = Math.random() * 100; // Position across the height (in vh)
    const scale = Math.random() * 1.5 + 0.5; // Random scale between 0.5 and 2
    const duration = Math.random() * 8 + 5; // Random duration between 5s and 13s
    const delay = Math.random() * 5; // Random delay up to 5s
    const size = Math.random() * 3 + 1; // Random size between 1px and 4px

    return (
        <motion.div
            className="absolute bg-cyan-400/50 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                // Animate to a random position within the viewport
                x: `${x}vw`,
                y: `${y}vh`,
                scale: [0, scale, 0], // Scale up and then back down
                opacity: [0, 1, 0],
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
                filter: 'blur(1px)', // A soft blur effect
                top: 0,
                left: 0,
            }}
        />
    );
};


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
    // Variants for the main container to orchestrate children animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        },
    };

    // Variants for individual items fading in
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 15 }
        },
    };

    return (
        <section id="about" className="relative py-24 md:py-32 bg-gray-900 text-white overflow-hidden">
            {/* Background particle effect */}
            <div className="absolute inset-0 z-0 opacity-50">
                {Array.from({ length: 25 }).map((_, i) => (
                    <Particle key={i} />
                ))}
            </div>

            {/* Main content container with glassmorphism effect */}
            <motion.div
                className="relative z-10 container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700 p-8 md:p-12">
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="flex items-center mb-12">
                        <span className="text-cyan-400 font-mono text-2xl mr-4">01.</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            About Me
                        </h2>
                        <div className="flex-grow h-px bg-slate-700 ml-6" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-start">
                        {/* Bio Section */}
                        <motion.div
                            variants={itemVariants}
                            className="md:col-span-3 text-slate-300 text-base md:text-lg leading-relaxed space-y-4"
                        >
                            <p>
                                I architect and build robust backends using Go, Python, and Node.js, and craft engaging frontends with Next.js, Nuxt.js, React, and Vue. My eye for clean UI/UX styling ensures every application feels polished and intuitive.
                            </p>
                            <p>
                                Beyond full-stack development, I dive into machine learning and computer vision projects—applying algorithms that turn data into actionable insights and smart features.
                            </p>
                        </motion.div>

                        {/* Tech Stack Section */}
                        <motion.div variants={itemVariants} className="md:col-span-2">
                            <h3 className="text-xl font-semibold text-white mb-5">My Tech Stack</h3>
                            <ul className="flex flex-wrap gap-3 text-sm font-mono">
                                {skills.map((skill) => (
                                    <li key={skill} className="flex items-center bg-slate-700/50 text-cyan-300 rounded-md px-3 py-1.5 transition-colors hover:bg-slate-700">
                                        <FiChevronRight className="text-cyan-500 mr-1.5" aria-hidden="true" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
