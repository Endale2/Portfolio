import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaTelegramPlane, FaHeart } from 'react-icons/fa';

const socialLinks = [
  { icon: FaTwitter, url: 'https://twitter.com/25endale', label: 'Twitter' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/endale25', label: 'LinkedIn' },
  { icon: FaGithub, url: 'https://github.com/Endale2', label: 'GitHub' },
  { icon: FaTelegramPlane, url: 'https://t.me/t.me/codejkr', label: 'Telegram' }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-8 md:py-12 text-center text-slate-400 border-t border-slate-800" role="contentinfo">
      <div className="container-responsive">
        <div className="flex justify-center space-x-6 md:space-x-8 mb-6 md:mb-8">
          {socialLinks.map(({ icon: Icon, url, label }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-3 p-2 md:p-3 rounded-full bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700 hover:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <Icon className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          ))}
        </div>
        <p className="text-sm font-code mb-2 md:mb-3">
          &copy; {currentYear} Endale. All rights reserved.
        </p>
        <p className="text-xs font-code flex items-center justify-center">
          Built with <FaHeart className="text-red-500 mx-1 animate-pulse" /> by Endale
        </p>
      </div>
    </footer>
  );
};

export default Footer;