import React from 'react';
import { SiGo, SiPython, SiMongodb, SiNodedotjs, SiReact, SiFlutter, SiDart, SiDocker } from 'react-icons/si';

const skills = [
  { name: 'Go', icon: SiGo },
  { name: 'Python', icon: SiPython },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'React', icon: SiReact },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Dart', icon: SiDart },
  { name: 'Docker', icon: SiDocker },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-800 transition duration-300">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Skills</h2>
        <div className="flex flex-wrap justify-center gap-8"> {/* Use flexbox for layout */}
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center"> {/* Center icon and text */}
              <skill.icon className="w-16 h-16 mb-2 text-indigo-500 dark:text-indigo-400" /> {/* Icon only */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;