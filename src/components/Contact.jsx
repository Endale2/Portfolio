import React, { useState } from 'react';
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { icon: FaTwitter, url: 'https://twitter.com/yourhandle', label: 'Twitter' }
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

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = data;
    const mailto = `mailto:endale406@gmail.com?subject=${encodeURIComponent(
      `Contact from ${name}`
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
    setTimeout(() => setData({ name: '', email: '', message: '' }), 100);
  };

  return (
    <section id="contact" className="relative py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex items-center mb-12">
          <span className="text-cyan-400 font-code text-2xl mr-4">04.</span>
          <h2 className="text-3xl font-bold">Let’s Connect</h2>
          <div className="flex-grow h-px bg-gray-700 ml-6" />
        </motion.div>

        {/* Intro Text */}
        <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8 leading-relaxed">
          I'm open to new opportunities and collaborations. Whether you have a project idea, question, or just want to say hello,
          send me a message below or find me on social media.
        </motion.p>

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-12">
          {socialLinks.map(({ icon: Icon, url, label }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-cyan-400 transition-transform transform hover:scale-110"
            >
              <Icon size={28} />
            </a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={data.name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none font-code"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={data.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none font-code"
            />
          </div>
          <textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            value={data.message}
            onChange={handleChange}
            required
            className="w-full p-4 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none resize-none font-code"
          />
          <motion.button
            type="submit"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-700 rounded-md shadow-lg transition"
          >
            Send Message
            <FaPaperPlane />
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
