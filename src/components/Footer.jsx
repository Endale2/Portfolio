import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa'; // Added FaHeart icon

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-8 md:py-12 text-center text-slate-400 border-t border-slate-800"> {/* Consistent background and text color, added top border */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Media Icons - More prominent and interactive */}
        <div className="flex justify-center space-x-6 mb-6"> {/* Increased spacing and mb */}
          <a
            href="https://twitter.com/yourhandle" // Replace with your Twitter URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            aria-label="Twitter Profile"
          >
            <FaTwitter className="h-7 w-7 transform hover:scale-110 transition-transform duration-200" /> {/* Larger icons, added hover scale */}
          </a>
          <a
            href="https://linkedin.com/in/yourprofile" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="h-7 w-7 transform hover:scale-110 transition-transform duration-200" /> {/* Larger icons, added hover scale */}
          </a>
          <a
            href="https://github.com/yourusername" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub className="h-7 w-7 transform hover:scale-110 transition-transform duration-200" /> {/* Larger icons, added hover scale */}
          </a>
        </div>

        {/* Copyright and Credits */}
        <p className="text-sm text-slate-500 font-code mb-2"> {/* Muted color, font-code */}
          &copy; {currentYear} Endale. All rights reserved.
        </p>
        <p className="text-xs text-slate-600 font-code flex items-center justify-center"> {/* Smaller, more muted, with heart icon */}
          Built with <FaHeart className="text-red-500 mx-1 animate-pulse" /> by Endale
        </p>
      </div>
    </footer>
  );
};

export default Footer;