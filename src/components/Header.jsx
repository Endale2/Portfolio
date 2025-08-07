import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import { FiHome, FiUser, FiCode, FiBriefcase, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

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
  const codeFont = 'font-["JetBrains Mono","Fira Code","Monaco","Cascadia Code","Roboto Mono",Consolas,"Courier New",monospace]';

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setHasScrolled(window.scrollY > 10);
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  // Framer Motion variants for nav links
  const navLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, type: 'spring', stiffness: 120, damping: 14 }
    }),
    hover: {
      scale: 1.07,
      backgroundColor: 'rgba(21, 94, 130, 0.8)',
      color: '#22d3ee',
      transition: { type: 'spring', stiffness: 300, damping: 18 }
    }
  };

  // Desktop NavLink with animation
  const NavLink = ({ to, text, icon, onClick, index }) => (
    <motion.li
      className="group relative"
      custom={index}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={navLinkVariants}
    >
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        activeClass="nav-link-active"
        className={`flex items-center gap-2 text-cyan-300 bg-slate-800/80 transition-all duration-300 rounded-lg px-4 py-2 shadow-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 ${codeFont}`}
        onClick={onClick}
        aria-label={`Navigate to ${text} section`}
      >
        <span className="text-lg md:text-xl">{icon}</span>
        <span className={`font-medium text-base md:text-lg ${codeFont}`}>{text}</span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </Link>
    </motion.li>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${hasScrolled ? 'bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/50' : 'bg-transparent'}`}
    >
      <div className="container-responsive flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <div className={`logo ${codeFont} text-2xl md:text-3xl font-bold z-50`}>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className={`cursor-pointer text-slate-100 hover:text-cyan-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded ${codeFont}`}
            aria-label="Go to top of page"
          >
            &lt;ES /&gt;
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
          <ul className="flex items-center gap-4 lg:gap-6">
            <AnimatePresence>
              {navLinks.map((link, i) => (
                <NavLink key={link.to} {...link} onClick={closeMobileMenu} index={i} />
              ))}
            </AnimatePresence>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMobileMenu}
            className={`text-cyan-300 bg-slate-800/80 hover:bg-cyan-700/90 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-2 transition-all duration-300 ${codeFont}`}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 left-0 w-full bg-slate-900/95 backdrop-blur-xl transition-transform duration-500 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}
        style={{ height: '100vh', paddingTop: '4rem' }}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col items-center justify-center h-full gap-6 md:gap-8">
          <AnimatePresence>
            {navLinks.map((link, i) => (
              <motion.li
                key={link.to}
                custom={i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0, transition: { delay: i * 0.12, type: 'spring', stiffness: 120, damping: 16 } }}
                exit={{ opacity: 0, x: 40, transition: { duration: 0.2 } }}
                whileHover={{ scale: 1.08, backgroundColor: 'rgba(21, 94, 130, 0.8)', color: '#22d3ee' }}
                className="group relative w-full"
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="nav-link-active"
                  className={`flex items-center gap-2 text-cyan-300 bg-slate-800/80 transition-all duration-300 rounded-lg px-6 py-3 shadow-md text-lg font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full justify-center ${codeFont}`}
                  onClick={closeMobileMenu}
                  aria-label={`Navigate to ${link.text} section`}
                >
                  <span className="text-xl md:text-2xl">{link.icon}</span>
                  <span className={`font-medium text-lg md:text-xl ${codeFont}`}>{link.text}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </header>
  );
};

export default Header;