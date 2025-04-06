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
  SiDocker
} from 'react-icons/si';

const skills = [
  { name: 'Go', icon: SiGo },
  { name: 'Python', icon: SiPython },
  { name: 'Django', icon: SiDjango },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Vue.js', icon: SiVuedotjs },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Dart', icon: SiDart },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Docker', icon: SiDocker },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-green-50 dark:bg-gray-800 transition duration-300">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-green-800 dark:text-green-100">Skills</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <skill.icon className="w-16 h-16 mb-2 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-700 dark:text-green-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
