import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 py-8 text-center transition duration-300">
      <div className="container mx-auto px-6">
        <p className="text-gray-400 dark:text-gray-500 mb-4 text-sm">
          &copy; {currentYear} [Your Name]. All rights reserved.
        </p>
        <div className="flex justify-center space-x-8">
          <a
            href="#"
            className="text-gray-400 dark:text-gray-500 hover:text-indigo-400 dark:hover:text-indigo-300 transition duration-300 text-lg flex items-center" // Flex for icon alignment
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="h-5 w-5 mr-2" /> {/* Icon before text */}
            Twitter
          </a>
          <a
            href="#"
            className="text-gray-400 dark:text-gray-500 hover:text-indigo-400 dark:hover:text-indigo-300 transition duration-300 text-lg flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-5 w-5 mr-2" />
            LinkedIn
          </a>
          <a
            href="#"
            className="text-gray-400 dark:text-gray-500 hover:text-indigo-400 dark:hover:text-indigo-300 transition duration-300 text-lg flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-5 w-5 mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;