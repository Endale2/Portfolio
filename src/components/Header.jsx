import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiHome, FiUser, FiCode, FiBriefcase, FiMail, FiMenu, FiX } from 'react-icons/fi';

// Define navigation links in an array for cleaner code
const navLinks = [
  { to: 'hero', text: 'Home', icon: <FiHome /> },
  { to: 'about', text: 'About', icon: <FiUser /> },
  { to: 'projects', text: 'Projects', icon: <FiBriefcase /> },
  { to: 'skills', text: 'Skills', icon: <FiCode /> },
  { to: 'contact', text: 'Contact', icon: <FiMail /> },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Effect to detect scroll and apply a background style to the header
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLink = ({ to, text, icon, onClick }) => (
    <li className="group">
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        activeClass="nav-link-active" // This class is defined in index.css
        className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-cyan-400 transition-colors duration-300"
        onClick={onClick}
      >
        <span className="text-xl">{icon}</span>
        <span className="font-code font-medium">{text}</span>
      </Link>
    </li>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hasScrolled ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="logo font-code text-2xl font-bold">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-white hover:text-cyan-400 transition-colors duration-300">
            &lt;ES /&gt;
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} {...link} />
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-cyan-400 focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-slate-900/95 backdrop-blur-xl transition-transform duration-500 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ height: 'calc(100vh - 5rem)' }} // Full viewport height minus header height
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.to} {...link} onClick={toggleMobileMenu} />
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;