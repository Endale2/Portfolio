import React, { useState } from 'react';
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Particle component for background animation
const Particle = () => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const scale = Math.random() * 1.5 + 0.5;
    const duration = Math.random() * 8 + 5;
    const delay = Math.random() * 5;
    const size = Math.random() * 3 + 1;

    return (
        <motion.div
            className="absolute bg-cyan-400/20 rounded-full pointer-events-none"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                x: `${x}vw`,
                y: `${y}vh`,
                scale: [0, scale, 0],
                opacity: [0, 0.4, 0],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay,
            }}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                filter: 'blur(1px)',
                top: 0,
                left: 0,
            }}
        />
    );
};

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
      console.error('Error sending message:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative section-padding bg-slate-900 text-white overflow-hidden">
      {/* Background particle effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        {Array.from({ length: 15 }).map((_, i) => (
          <Particle key={i} />
        ))}
      </div>

      <motion.div
        className="relative z-10 container-responsive"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex items-center mb-16">
          <span className="text-cyan-400 font-code text-2xl mr-4">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Let's Connect
          </h2>
          <div className="flex-grow h-px bg-slate-700 ml-6" />
        </motion.div>

        {/* Intro Text */}
        <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto text-center">
          I'm open to new opportunities and collaborations. Whether you have a project idea, question, or just want to say hello,
          send me a message below or find me on social media.
        </motion.p>

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="flex justify-center space-x-6 md:space-x-8 mb-16">
          {socialLinks.map(({ icon: Icon, url, label }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-3 p-3 rounded-full bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700 hover:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <Icon size={24} className="md:w-7 md:h-7" />
            </a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          variants={itemVariants} 
          onSubmit={handleSubmit} 
          className="max-w-2xl mx-auto bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
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
                className="w-full p-3 md:p-4 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none font-code text-slate-200 placeholder-slate-400 transition-all duration-300"
                aria-describedby="name-error"
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
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
                className="w-full p-3 md:p-4 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none font-code text-slate-200 placeholder-slate-400 transition-all duration-300"
                aria-describedby="email-error"
              />
            </div>
          </div>
          <div className="relative mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
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
              className="w-full p-3 md:p-4 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none resize-none font-code text-slate-200 placeholder-slate-400 transition-all duration-300"
              aria-describedby="message-error"
            />
          </div>
          <motion.button
            type="submit"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            className="flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:from-slate-600 disabled:to-slate-700 rounded-lg shadow-lg transition-all duration-300 font-semibold text-white w-full sm:w-auto justify-center disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <FaPaperPlane className="animate-pulse" />
              </>
            )}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
