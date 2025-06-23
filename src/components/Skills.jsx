import React from 'react';
import {
  SiGo,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiFlutter,
  SiDart,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiDocker,
  SiHtml5, // Added common web technologies
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiGithub,
  SiLinux,
  SiKubernetes, // Added more relevant dev tools
  SiGooglecloud,
  SiPostgresql, // Another common database
  SiTailwindcss, // Tailwind CSS for consistency
  SiFigma // Design tools if relevant
} from 'react-icons/si';

// Group skills into categories for better organization and display
const categorizedSkills = [
  {
    category: "Languages",
    skills: [
      { name: 'Go', icon: SiGo },
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Dart', icon: SiDart },
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
      { name: 'Tailwind CSS', icon: SiTailwindcss }, // Explicitly include Tailwind CSS
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Django', icon: SiDjango },
      { name: 'Express.js', icon: SiNodedotjs }, // Can use Node.js icon for Express
    ]
  },
  {
    category: "Mobile",
    skills: [
      { name: 'Flutter', icon: SiFlutter },
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Firebase', icon: SiFirebase },
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'GCP', icon: SiGooglecloud },
      { name: 'Linux', icon: SiLinux },
      // { name: 'Figma', icon: SiFigma }, // Uncomment if relevant to your workflow
    ]
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading consistent with About & Projects */}
        <h2 className="relative flex items-center text-3xl font-bold text-slate-100 mb-12 w-full">
          <span className="font-code text-2xl text-cyan-400 mr-3">03.</span> {/* Incremented section number */}
          My Skills
          <span className="flex-grow h-px bg-slate-700 ml-6"></span>
        </h2>

        {/* Skills Grid by Category */}
        <div className="space-y-12"> {/* Add vertical spacing between categories */}
          {categorizedSkills.map((categoryGroup, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6 font-code">
                {categoryGroup.category}
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-8">
                {categoryGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center bg-slate-800 p-4 rounded-lg shadow-lg
                               transition-all duration-300 hover:scale-105 hover:bg-slate-700
                               border border-slate-700 hover:border-cyan-600 w-32 h-32 justify-center" // Fixed size for better layout
                  >
                    <skill.icon className="w-12 h-12 mb-3 text-cyan-400" /> {/* Larger icons, cyan color */}
                    <span className="text-sm font-medium text-slate-200 font-code">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;