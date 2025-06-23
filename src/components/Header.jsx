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
      // Check if window object exists (for SSR compatibility)
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Optional: Prevent body scroll when mobile menu is open
    // This is often handled by a global state/context or a dedicated hook in larger apps
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  // Close mobile menu on route change (for `react-scroll` links)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset'; // Re-enable scroll
  };

  const NavLink = ({ to, text, icon, onClick, style }) => (
    <li className="group relative" style={style}> {/* Added relative for potential future hover effects and passed style */}
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        activeClass="nav-link-active" // This class is defined in index.css (ensure it's using cyan-400)
        className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-cyan-400
                   transition-colors duration-300 relative py-2 px-3 rounded-md" // Added padding for hover area
        onClick={onClick}
      >
        <span className="text-xl">{icon}</span>
        <span className="font-code font-medium text-lg">{text}</span> {/* Slightly larger text for clarity */}
        {/* Underline on hover effect - Developer style */}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
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
        <div className="logo font-code text-3xl md:text-2xl font-bold z-50"> {/* Ensured logo is above mobile menu */}
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-slate-100 hover:text-cyan-400 transition-colors duration-300">
            &lt;ES /&gt;
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} {...link} onClick={closeMobileMenu} /> 
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50"> {/* Ensured button is above mobile menu */}
          <button
            onClick={toggleMobileMenu}
            className="text-slate-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md p-1" // Added ring focus
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-slate-900/95 backdrop-blur-xl transition-transform duration-500 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`} // Adjusted z-index for mobile menu
        style={{ height: '100vh', paddingTop: '5rem' }} // Full viewport height with padding for header
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              {...link}
              onClick={closeMobileMenu}
              // Staggered animation for mobile links
              style={{ animation: `fadeInRight 0.3s ease-out ${0.1 * index}s forwards`, opacity: 0 }}
            />
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;