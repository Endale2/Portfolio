import React from 'react';
import { motion } from 'framer-motion';

// Programming language symbols for the snowfall effect
const programmingSymbols = [
  '{}', '()', '[]', '<>', '//', '/*', '*/', '=>', '&&', '||', '++', '--',
  '==', '!=', '>=', '<=', '+=', '-=', '*=', '/=', '%=', '&=', '|=', '^=',
  '<<', '>>', '>>>', '<<=', '>>=', '>>>=', '&=', '|=', '^=', '~', '!', '?',
  ':', ';', ',', '.', '->', '::', '...', '??', '?.', '!?', '?=', '??=',
  'import', 'export', 'const', 'let', 'var', 'function', 'class', 'return',
  'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue',
  'try', 'catch', 'finally', 'throw', 'new', 'this', 'super', 'extends',
  'interface', 'type', 'enum', 'namespace', 'module', 'async', 'await',
  'Promise', 'Array', 'Object', 'String', 'Number', 'Boolean', 'Date',
  'Map', 'Set', 'WeakMap', 'WeakSet', 'Proxy', 'Reflect', 'Symbol'
];

// Snowflake component with programming symbols
const ProgrammingSnowflake = ({ symbol, index }) => {
  const randomX = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200);
  const randomDelay = Math.random() * 10;
  const randomDuration = Math.random() * 10 + 10;
  const randomSize = Math.random() * 24 + 12;
  const randomOpacity = Math.random() * 0.8 + 0.3;

  return (
    <motion.div
      className="absolute text-cyan-400/50 font-mono pointer-events-none select-none hidden sm:block"
      style={{
        left: `${randomX}px`,
        fontSize: `${randomSize}px`,
        opacity: randomOpacity,
        zIndex: 1
      }}
      initial={{
        y: -100,
        x: randomX,
        rotate: 0,
        opacity: 0
      }}
      animate={{
        y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
        x: randomX + (Math.random() - 0.5) * 200,
        rotate: Math.random() * 360,
        opacity: [0, randomOpacity, randomOpacity, 0]
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        ease: 'linear'
      }}
    >
      {symbol}
    </motion.div>
  );
};

// Mobile-optimized smaller snowflakes
const MobileSnowflake = ({ symbol, index }) => {
  const randomX = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 400);
  const randomDelay = Math.random() * 8;
  const randomDuration = Math.random() * 8 + 8;
  const randomSize = Math.random() * 16 + 8;
  const randomOpacity = Math.random() * 0.6 + 0.2;

  return (
    <motion.div
      className="absolute text-cyan-400/40 font-mono pointer-events-none select-none sm:hidden"
      style={{
        left: `${randomX}px`,
        fontSize: `${randomSize}px`,
        opacity: randomOpacity,
        zIndex: 1
      }}
      initial={{
        y: -50,
        x: randomX,
        rotate: 0,
        opacity: 0
      }}
      animate={{
        y: (typeof window !== 'undefined' ? window.innerHeight : 600) + 50,
        x: randomX + (Math.random() - 0.5) * 100,
        rotate: Math.random() * 180,
        opacity: [0, randomOpacity, randomOpacity, 0]
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        ease: 'linear'
      }}
    >
      {symbol}
    </motion.div>
  );
};

// Floating code blocks for additional background effect
const FloatingCodeBlock = ({ code, index }) => {
  const randomX = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200);
  const randomY = Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800);
  const randomDelay = Math.random() * 8;
  const randomDuration = Math.random() * 15 + 20;

  return (
    <motion.div
      className="absolute text-cyan-500/25 font-mono text-xs md:text-sm pointer-events-none select-none hidden md:block"
      style={{
        left: `${randomX}px`,
        top: `${randomY}px`,
        zIndex: 0
      }}
      initial={{
        opacity: 0,
        scale: 0.8,
        rotate: -5
      }}
      animate={{
        opacity: [0, 0.25, 0.25, 0],
        scale: [0.8, 1.1, 1.1, 0.8],
        rotate: [0, 8, 0],
        y: [0, -80, 0]
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <pre className="whitespace-pre-wrap">
        {code}
      </pre>
    </motion.div>
  );
};

// Mobile-optimized floating code blocks
const MobileCodeBlock = ({ code, index }) => {
  const randomX = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 400);
  const randomY = Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600);
  const randomDelay = Math.random() * 6;
  const randomDuration = Math.random() * 12 + 15;

  return (
    <motion.div
      className="absolute text-cyan-500/20 font-mono text-xs pointer-events-none select-none md:hidden"
      style={{
        left: `${randomX}px`,
        top: `${randomY}px`,
        zIndex: 0
      }}
      initial={{
        opacity: 0,
        scale: 0.7,
        rotate: -3
      }}
      animate={{
        opacity: [0, 0.2, 0.2, 0],
        scale: [0.7, 1, 1, 0.7],
        rotate: [0, 5, 0],
        y: [0, -40, 0]
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <pre className="whitespace-pre-wrap">
        {code}
      </pre>
    </motion.div>
  );
};

// Sample code snippets for floating blocks
const codeSnippets = [
  `function createPortfolio() {
  return {
    skills: ['React', 'Node.js'],
    passion: 'innovation'
  };
}`,
  `const Hero = () => {
  return (
    <section className="hero">
      <h1>Endale Shimelis</h1>
    </section>
  );
}`,
  `async function buildFuture() {
  const innovation = await create();
  return innovation.deploy();
}`,
  `class FullStackEngineer {
  constructor() {
    this.skills = ['frontend', 'backend'];
  }
}`,
  `const techStack = {
  frontend: ['React', 'Vue'],
  backend: ['Node.js', 'Python']
};`,
  `function handleSubmit() {
  const formData = new FormData();
  return fetch('/api/contact', {
    method: 'POST',
    body: formData
  });
}`,
  `const ProjectCard = ({ title, tech }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <div className="tech-stack">{tech}</div>
    </div>
  );
}`,
  `const SkillsSection = () => {
  const skills = ['JavaScript', 'React', 'Node.js'];
  return skills.map(skill => <Skill key={skill} name={skill} />);
}`
];

// Shorter code snippets for mobile
const mobileCodeSnippets = [
  `function create() {
  return { skills: ['React'] };
}`,
  `const Hero = () => {
  return <h1>Endale</h1>;
}`,
  `async function build() {
  return await create();
}`,
  `class Engineer {
  constructor() {
    this.skills = ['fullstack'];
  }
}`,
  `const stack = {
  frontend: ['React'],
  backend: ['Node.js']
};`,
  `function submit() {
  return fetch('/api/contact');
}`,
  `const Project = ({ title }) => {
  return <div>{title}</div>;
}`,
  `const Skills = () => {
  return ['JS', 'React'].map(s => <Skill key={s} />);
}`
];

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Programming snowfall background - Desktop */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <ProgrammingSnowflake 
            key={`snowflake-${i}`} 
            symbol={programmingSymbols[i % programmingSymbols.length]} 
            index={i} 
          />
        ))}
      </div>

      {/* Programming snowfall background - Mobile */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <MobileSnowflake 
            key={`mobile-snowflake-${i}`} 
            symbol={programmingSymbols[i % programmingSymbols.length]} 
            index={i} 
          />
        ))}
      </div>

      {/* Floating code blocks - Desktop */}
      <div className="absolute inset-0">
        {codeSnippets.map((code, i) => (
          <FloatingCodeBlock key={`code-${i}`} code={code} index={i} />
        ))}
      </div>

      {/* Floating code blocks - Mobile */}
      <div className="absolute inset-0">
        {mobileCodeSnippets.map((code, i) => (
          <MobileCodeBlock key={`mobile-code-${i}`} code={code} index={i} />
        ))}
      </div>

      {/* Subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/30 z-5"></div>
    </div>
  );
};

export default BackgroundAnimation; 