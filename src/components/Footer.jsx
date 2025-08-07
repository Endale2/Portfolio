import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaTelegramPlane, FaHeart } from 'react-icons/fa';

const codeFont = 'font-["JetBrains Mono","Fira Code","Monaco","Cascadia Code","Roboto Mono",Consolas,"Courier New",monospace]';

const socialLinks = [
  { icon: FaTwitter, url: 'https://twitter.com/25endale', label: 'Twitter' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/endale25', label: 'LinkedIn' },
  { icon: FaGithub, url: 'https://github.com/Endale2', label: 'GitHub' },
  { icon: FaTelegramPlane, url: 'https://t.me/t.me/codejkr', label: 'Telegram' }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-8 md:py-12 text-center border-t border-slate-800 glass rounded-t-2xl mt-10 overflow-hidden">
      <div className="relative z-10 container-responsive max-w-3xl mx-auto">
        <div className="flex justify-center space-x-6 md:space-x-8 mb-6 md:mb-8">
          {socialLinks.map(({ icon: Icon, url, label }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-3 p-2 md:p-3 rounded-full bg-slate-800/60 hover:bg-slate-800/90 border-2 border-slate-700 hover:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${codeFont}`}
            >
              <Icon className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          ))}
        </div>
        <p className={`text-sm mb-2 md:mb-3 ${codeFont}`}>
          &copy; {currentYear} Endale. All rights reserved.
        </p>
        <p className={`text-xs flex items-center justify-center ${codeFont}`}>
          Built with <FaHeart className="text-red-500 mx-1 animate-pulse" /> by Endale
        </p>
      </div>
    </footer>
  );
};

export default Footer;