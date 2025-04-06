import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white px-6"> {/* Removed min-h-screen */}
      <div className="container mx-auto"> {/* Added container for responsiveness */}
        <div className="max-w-3xl mx-auto text-center"> {/* Centered content */}
          <h2 className="text-4xl font-bold mb-6 text-white-400">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate software developer with a knack for building innovative solutions.
            With expertise in modern web technologies, I create seamless user experiences and
            robust applications. Always eager to learn and tackle new challenges!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;