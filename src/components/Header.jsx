import React, { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const codeFont =
  'font-["JetBrains Mono","Fira Code","Monaco","Cascadia Code","Roboto Mono",Consolas,"Courier New",monospace]';

const navLinks = [
  { to: "hero", text: "Home" },
  { to: "about", text: "About" },
  { to: "projects", text: "Projects" },
  { to: "skills", text: "Skills" },
  { to: "contact", text: "Contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setHasScrolled(window.scrollY > 10);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
  }, []);

  const NavLink = ({ to, text, onClick, style }) => (
    <li className="group relative" style={style}>
      <a
        href={`#${to}`}
        className={`cursor-pointer text-slate-200 hover:text-cyan-400 transition-all duration-300 relative py-1 md:py-2 px-2 md:px-3 rounded-lg hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${codeFont} text-sm md:text-base`}
        onClick={onClick}
        aria-label={`Navigate to ${text} section`}
      >
        {text}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </a>
    </li>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 glass border-b-2 border-cyan-400/10 shadow-lg ${
        hasScrolled ? "bg-slate-900/90 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/4 top-0 w-1/2 h-full bg-gradient-to-b from-cyan-400/10 via-blue-500/10 to-transparent animate-pulse rounded-full blur-2xl" />
        <div className="absolute right-0 top-1/3 w-1/4 h-1/2 bg-cyan-400/10 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Nav content */}
      <div className="relative z-10 container-responsive flex justify-center items-center h-16 md:h-20">
        <div
          className={`absolute left-0 -top-6 text-cyan-400/70 text-xs md:text-sm select-none ${codeFont}`}
        >
          {"// Navigation"}
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:block"
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className="flex items-center gap-3 lg:gap-4">
            {navLinks.map((link) => (
              <NavLink key={link.to} {...link} onClick={closeMobileMenu} />
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-4 z-50">
          <button
            onClick={toggleMobileMenu}
            className="text-slate-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-2 transition-all duration-300"
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
        className={`md:hidden fixed top-0 left-0 w-full bg-slate-900/95 backdrop-blur-xl transition-transform duration-500 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
        style={{ height: "100vh", paddingTop: "4rem" }}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col items-center justify-center h-full gap-6 md:gap-8">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              {...link}
              onClick={closeMobileMenu}
              style={{
                animation: `fadeInRight 0.3s ease-out ${0.1 * index}s forwards`,
                opacity: 0,
              }}
            />
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
