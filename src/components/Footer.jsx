import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaTelegramPlane, FaHeart } from 'react-icons/fa';

const codeFont =
  'font-["JetBrains Mono","Fira Code","Monaco","Cascadia Code","Roboto Mono",Consolas,"Courier New",monospace]';

const socialLinks = [
  { icon: FaTwitter, url: 'https://twitter.com/25endale', label: 'Twitter' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/endale25', label: 'LinkedIn' },
  { icon: FaGithub, url: 'https://github.com/Endale2', label: 'GitHub' },
  { icon: FaTelegramPlane, url: 'https://t.me/t.me/codejkr', label: 'Telegram' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-6 md:py-8 text-center border-t border-slate-800 glass rounded-t-2xl mt-10 overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        {/* Social icons */}
        <div className="flex justify-center space-x-4 md:space-x-6 mb-4 md:mb-6">
          {socialLinks.map(({ icon: Icon, url, label }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-3 p-1.5 md:p-2 rounded-full bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700 hover:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-500 ${codeFont}`}
            >
              <Icon className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className={`text-xs md:text-sm mb-1.5 md:mb-2 ${codeFont}`}>
          &copy; {currentYear} Endale. All rights reserved.
        </p>

        {/* Built with love */}
        <p className={`text-[10px] md:text-xs flex items-center justify-center ${codeFont}`}>
          Built with <FaHeart className="text-red-500 mx-1 animate-pulse" /> by Endale
        </p>
      </div>
    </footer>
  );
};

export default Footer;
