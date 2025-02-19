import React, { useState } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaCode } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-100 dark:bg-gray-800 py-4 shadow-md transition duration-300 fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="logo flex items-center gap-3">
          
          <span className="text-2xl font-bold text-gray-800 dark:text-white transition duration-300">ES</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-gray-600 dark:text-gray-300 transition duration-300">
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={800}
                className="nav-link cursor-pointer flex items-center gap-2"
              >
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={800}
                className="nav-link cursor-pointer flex items-center gap-2"
              >
                <FaUser /> About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={800}
                className="nav-link cursor-pointer flex items-center gap-2"
              >
                <FaProjectDiagram /> Projects
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={800}
                className="nav-link cursor-pointer flex items-center gap-2"
              >
                <FaCode /> Skills
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                className="nav-link cursor-pointer flex items-center gap-2"
              >
                <FaEnvelope /> Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 dark:text-gray-300 focus:outline-none transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gray-100 dark:bg-gray-800 z-10 transition duration-300">
            <ul className="flex flex-col gap-4 p-4 text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={800}
                  onClick={toggleMobileMenu}
                  className="block py-2 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={800}
                  onClick={toggleMobileMenu}
                  className="block py-2 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={800}
                  onClick={toggleMobileMenu}
                  className="block py-2 cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  duration={800}
                  onClick={toggleMobileMenu}
                  className="block py-2 cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  onClick={toggleMobileMenu}
                  className="block py-2 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;