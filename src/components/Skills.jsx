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
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiGithub,
  SiLinux,
  SiKubernetes,
  SiGooglecloud,
  SiPostgresql,
  SiTailwindcss,
  SiSass, // Added Sass
  SiTestinglibrary, // Added Testing Library (React Testing Library, Jest)
  SiJest, // Jest specifically
  SiGraphql, // GraphQL
  SiSpring, // Java Spring Boot (if applicable)
  SiCplusplus // C++
} from 'react-icons/si';

// Group skills into categories for better organization and display
const categorizedSkills = [
  {
    category: "Languages",
    skills: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: SiPython },
      { name: 'Go', icon: SiGo },
      { name: 'Dart', icon: SiDart },
      { name: 'C++', icon: SiCplusplus }, // Example: C++
    ]
  },
  {
    category: "Frontend Frameworks",
    skills: [
      { name: 'React.js', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
    ]
  },
  {
    category: "Styling & UI",
    skills: [
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Sass', icon: SiSass },
    ]
  },
  {
    category: "Backend Technologies",
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiNodedotjs }, // Use Node.js icon for Express
      { name: 'Django', icon: SiDjango },
      { name: 'Spring Boot', icon: SiSpring }, // Example: Spring Boot
      { name: 'GraphQL', icon: SiGraphql },
    ]
  },
  {
    category: "Mobile Development",
    skills: [
      { name: 'Flutter', icon: SiFlutter },
      // { name: 'React Native', icon: SiReact }, // Can add if you use it separately from Flutter
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
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
      { name: 'Google Cloud', icon: SiGooglecloud },
      { name: 'Linux', icon: SiLinux },
      { name: 'Jest', icon: SiJest },
      { name: 'Testing Library', icon: SiTestinglibrary },
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
          {categorizedSkills.map((categoryGroup, categoryIndex) => (
            <div key={categoryIndex} className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6 font-code">
                {categoryGroup.category}
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-8">
                {categoryGroup.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center bg-slate-800 p-4 rounded-lg shadow-lg
                               transition-all duration-300 hover:scale-105 hover:bg-slate-700
                               border border-slate-700 hover:border-cyan-600 w-32 h-32 justify-center
                               animate-fade-in-up" // Staggered animation for skills
                               style={{ animationDelay: `${0.05 * skillIndex + (categoryIndex * 0.1)}s` }}
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