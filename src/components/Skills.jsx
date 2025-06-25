import React from 'react';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiPython,
  SiGo,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiFlutter,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiLinux,
  SiGraphql,
  SiTailwindcss,
  SiSass,
  SiNodedotjs, // Corrected import for Node.js
  SiC // Added import for C language
} from 'react-icons/si';

// Note: If you want to include specific backend frameworks for Python/Go,
// you might want to consider specific icons if available (e.g., SiDjango for Django)
// or use the language icon as a placeholder. For Gin, SiGo is appropriate.

const categories = [
  {
    name: 'Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Python', icon: SiPython },
      { name: 'Go', icon: SiGo },
      { name: 'C', icon: SiC } // Added C language
    ]
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 }
    ]
  },
  {
    name: 'Styling',
    skills: [
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Sass', icon: SiSass }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs }, // Corrected icon for Node.js
      { name: 'Django', icon: SiPython }, // Django framework
      { name: 'Gin Framework', icon: SiGo }, // Added Gin Framework with Go icon
      { name: 'GraphQL', icon: SiGraphql }
    ]
  },
  {
    name: 'Mobile',
    skills: [
      { name: 'Flutter', icon: SiFlutter }
    ]
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Firebase', icon: SiFirebase }
    ]
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Linux', icon: SiLinux }
    ]
  }
];

const skillCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => (
  <section id="skills" className="py-20 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="flex items-center mb-12">
                    <span className="text-cyan-400 font-mono text-2xl mr-4">03.</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        My Skills
                    </h2>
                    <div className="flex-grow h-px bg-slate-700 ml-6" />
                </div>

      <div className="space-y-16">
        {categories.map((cat, i) => (
          <div key={cat.name} className="" >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-6 font-code">{cat.name}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
              {cat.skills.map((skill, j) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-700 hover:border-cyan-600 transition-transform transform hover:scale-105"
                    variants={skillCardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 * i + 0.05 * j }}
                  >
                    <Icon className="w-10 h-10 mb-3 text-cyan-400" />
                    <span className="text-sm font-medium font-code text-slate-200">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;