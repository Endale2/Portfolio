import React, { useState } from 'react';
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const codeFont = 'font-["JetBrains Mono","Fira Code","Monaco","Cascadia Code","Roboto Mono",Consolas,"Courier New",monospace]';
const sansFont = 'font-sans';

const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/Endale2', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/endale25', label: 'LinkedIn' },
  { icon: FaTwitter, url: 'https://twitter.com/25endale', label: 'Twitter' }
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 12 } }
};

const Contact = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { name, email, message } = data;
      const mailto = `mailto:endale406@gmail.com?subject=${encodeURIComponent(
        `Contact from ${name}`
      )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
      window.location.href = mailto;
      setTimeout(() => {
        setData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 100);
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative section-padding bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-2 md:px-6">
        {/* Code-style comment above section header */}
        <div className={`mb-2 text-cyan-400/70 text-xs md:text-sm pl-2 select-none ${codeFont}`}>{'// Contact'}</div>
        {/* Header */}
        <motion.div variants={itemVariants} className="flex items-center mb-10 md:mb-14">
          <span className={`text-cyan-400 ${codeFont} text-2xl md:text-3xl mr-4 bg-slate-800/70 px-3 py-1 rounded-lg shadow border border-cyan-400/30 animate-pulse`} style={{minWidth: '3.5rem', textAlign: 'center'}}>05.</span>
          <h2 className={`text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight ${codeFont} flex items-center gap-2`}>
            <span className="text-cyan-400">&#123;</span> Let's Connect <span className="text-cyan-400">&#125;</span>
          </h2>
          <div className="flex-grow h-px bg-gradient-to-r from-cyan-400/30 via-slate-700 to-transparent ml-6" />
        </motion.div>

        <motion.p variants={itemVariants} className={`text-base md:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto text-center ${sansFont}`}>
          I'm open to new opportunities and collaborations. Whether you have a project idea, question, or just want to say hello, send me a message below or find me on social media.
        </motion.p>

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="flex justify-center space-x-6 md:space-x-8 mb-10">
          {socialLinks.map(({ icon: Icon, url, label }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-3 p-3 rounded-full bg-slate-800/60 hover:bg-slate-800/90 border-2 border-slate-700 hover:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${codeFont}`}
            >
              <Icon size={22} className="md:w-6 md:h-6" />
            </a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          variants={itemVariants} 
          onSubmit={handleSubmit} 
          className="glass rounded-2xl border-2 border-cyan-400/20 p-4 md:p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
            <div className="relative">
              <label htmlFor="name" className={`block text-sm font-semibold text-slate-300 mb-2 ${codeFont}`}>
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={data.name}
                onChange={handleChange}
                required
                className={`w-full p-3 md:p-4 bg-slate-800/60 border-2 border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none ${sansFont} text-slate-200 placeholder-slate-400 transition-all duration-300`}
                aria-describedby="name-error"
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className={`block text-sm font-semibold text-slate-300 mb-2 ${codeFont}`}>
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={data.email}
                onChange={handleChange}
                required
                className={`w-full p-3 md:p-4 bg-slate-800/60 border-2 border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none ${sansFont} text-slate-200 placeholder-slate-400 transition-all duration-300`}
                aria-describedby="email-error"
              />
            </div>
          </div>
          <div className="relative mb-8">
            <label htmlFor="message" className={`block text-sm font-semibold text-slate-300 mb-2 ${codeFont}`}>
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project or how I can help..."
              value={data.message}
              onChange={handleChange}
              required
              className={`w-full p-3 md:p-4 bg-slate-800/60 border-2 border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none resize-none ${sansFont} text-slate-200 placeholder-slate-400 transition-all duration-300`}
              aria-describedby="message-error"
            />
          </div>
          <motion.button
            type="submit"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            className={`flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:from-slate-600 disabled:to-slate-700 rounded-lg shadow-lg transition-all duration-300 font-semibold text-white w-full sm:w-auto justify-center disabled:cursor-not-allowed ${codeFont}`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane className="w-4 h-4" />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
