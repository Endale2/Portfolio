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
  SiNodedotjs,
  SiC
} from 'react-icons/si';

const categories = [
  {
    name: 'Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Python', icon: SiPython },
      { name: 'Go', icon: SiGo },
      { name: 'C', icon: SiC }
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
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Django', icon: SiPython },
      { name: 'Gin Framework', icon: SiGo },
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
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

const Skills = () => (
  <section id="skills" className="relative section-padding bg-slate-900 text-white overflow-hidden">
    <div className="relative z-10 container-responsive">
      {/* Section Header */}
      <div className="flex items-center mb-16">
        <span className="text-cyan-400 font-code text-2xl mr-4">03.</span>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">
          My Skills
        </h2>
        <div className="flex-grow h-px bg-slate-700 ml-6" />
      </div>

      <div className="space-y-12 md:space-y-16">
        {categories.map((cat, i) => (
          <motion.div 
            key={cat.name} 
            className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-6 md:mb-8 font-code border-b border-slate-700 pb-3 md:pb-4">
              {cat.name}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
              {cat.skills.map((skill, j) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center bg-slate-800/50 p-4 md:p-6 rounded-xl shadow-lg border border-slate-700 hover:border-cyan-600 transition-all duration-300 card-hover group"
                    variants={skillCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.1 * i + 0.05 * j }}
                    role="button"
                    tabIndex={0}
                    aria-label={`${skill.name} skill`}
                  >
                    <div className="relative mb-3 md:mb-4">
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-cyan-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    </div>
                    <span className="text-xs md:text-sm font-medium font-code text-slate-200 text-center group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;