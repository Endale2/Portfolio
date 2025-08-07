import React from 'react';
import { motion } from 'framer-motion';
import {
  SiJavascript, SiPython, SiGo, SiHtml5, SiCss3, SiReact, SiNextdotjs, SiVuedotjs, SiFlutter, SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiDocker, SiKubernetes, SiGit, SiGithub, SiLinux, SiGraphql, SiTailwindcss, SiSass, SiNodedotjs, SiC
} from 'react-icons/si';

const codeFont = 'font-["JetBrains Mono","Fira Code","Monaco","Cascadia Code","Roboto Mono",Consolas,"Courier New",monospace]';
const sansFont = 'font-sans';

const skills = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Python', icon: SiPython },
  { name: 'Go', icon: SiGo },
  { name: 'C', icon: SiC },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Vue.js', icon: SiVuedotjs },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Sass', icon: SiSass },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Django', icon: SiPython },
  { name: 'Gin Framework', icon: SiGo },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Docker', icon: SiDocker },
  { name: 'Kubernetes', icon: SiKubernetes },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Linux', icon: SiLinux },
];

const skillTagVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

const Skills = () => (
  <section id="skills" className="relative section-padding bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden">
    {/* Animated code-inspired background overlay */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute left-1/4 top-0 w-1/2 h-full bg-gradient-to-b from-cyan-400/10 via-blue-500/10 to-transparent animate-pulse rounded-full blur-2xl" />
      <div className="absolute right-0 top-1/3 w-1/4 h-1/2 bg-cyan-400/10 rounded-full blur-2xl animate-pulse" />
    </div>
    <div className="relative z-10 max-w-4xl mx-auto px-2 md:px-6">
      {/* Code-style comment above section header */}
      <div className={`mb-2 text-cyan-400/70 text-xs md:text-sm pl-2 select-none ${codeFont}`}>{'// My Skills'}</div>
      {/* Section Header */}
      <div className="flex items-center mb-10 md:mb-14">
        <span className={`text-cyan-400 ${codeFont} text-2xl md:text-3xl mr-4 bg-slate-800/70 px-3 py-1 rounded-lg shadow border border-cyan-400/30 animate-pulse`} style={{minWidth: '3.5rem', textAlign: 'center'}}>04.</span>
        <h2 className={`text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight ${codeFont} flex items-center gap-2`}>
          <span className="text-cyan-400">&#123;</span> My Skills <span className="text-cyan-400">&#125;</span>
        </h2>
        <div className="flex-grow h-px bg-gradient-to-r from-cyan-400/30 via-slate-700 to-transparent ml-6" />
      </div>
      <motion.div
        className="glass rounded-2xl border-2 border-cyan-400/20 shadow-xl p-4 md:p-8 flex flex-wrap gap-2 md:gap-3 justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.1 }}
      >
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className={`flex items-center gap-2 bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-950/90 px-3 py-2 rounded-full shadow-md border border-cyan-400/20 hover:border-cyan-400/70 hover:shadow-cyan-400/10 transition-all duration-300 card-hover group ${codeFont} focus-within:ring-2 focus-within:ring-cyan-400/60`}
              variants={skillTagVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.04 * i }}
              role="button"
              tabIndex={0}
              aria-label={`${skill.name} skill`}
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              <span className="text-xs md:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Skills;