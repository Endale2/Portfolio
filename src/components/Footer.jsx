import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaTelegramPlane, FaHeart } from 'react-icons/fa';

const socialLinks = [
  { icon: FaTwitter, url: 'https://twitter.com/yourhandle', label: 'Twitter' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { icon: FaGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FaTelegramPlane, url: 'https://t.me/yourhandle', label: 'Telegram' }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-8 text-center text-gray-400 border-t border-gray-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map(({ icon: Icon, url, label }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-cyan-400 transition-transform transform hover:scale-110"
            >
              <Icon className="h-7 w-7" />
            </a>
          ))}
        </div>
        <p className="text-sm font-code mb-2">
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