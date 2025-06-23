import React, { useState } from 'react';
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Added social icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, message, name } = formData;
    // URL-encode the components for the mailto link
    const mailtoLink = `mailto:endale406@gmail.com?subject=${encodeURIComponent("Portfolio Contact: " + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    // Open the mailto link
    window.location.href = mailtoLink;

    // Optional: Add a small delay before resetting form to allow mail client to open
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      alert('Your message is being sent! Your mail client should open shortly.');
    }, 100);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl"> {/* Increased max-width for consistency */}
        {/* Section Heading consistent with other sections */}
        <h2 className="relative flex items-center text-3xl font-bold text-slate-100 mb-12 w-full">
          <span className="font-code text-2xl text-cyan-400 mr-3">04.</span> {/* Incremented section number */}
          Get In Touch
          <span className="flex-grow h-px bg-slate-700 ml-6"></span>
        </h2>

        <div className="text-center mb-10">
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            I'm currently seeking new opportunities and am always open to collaborating on exciting projects. Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
          </p>
          <p className="text-xl font-semibold text-cyan-400 mb-4 font-code">
            <a href="mailto:endale406@gmail.com" className="hover:underline hover:text-cyan-300 transition-colors duration-200">
              endale406@gmail.com
            </a>
          </p>
          {/* Optional: Add social media links */}
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://github.com/yourusername" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 group"
              aria-label="GitHub Profile"
            >
              <FaGithub size={32} className="group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 group"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={32} className="group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              href="https://twitter.com/yourhandle" // Replace with your Twitter URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 group"
              aria-label="Twitter Profile"
            >
              <FaTwitter size={32} className="group-hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto"> {/* Centered form, adjusted max-width */}
          <div>
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-md bg-slate-800 border border-slate-700 text-slate-100
                         placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500
                         transition duration-300 font-code"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-md bg-slate-800 border border-slate-700 text-slate-100
                         placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500
                         transition duration-300 font-code"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-md bg-slate-800 border border-slate-700 text-slate-100
                         placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500
                         transition duration-300 h-40 resize-y font-code custom-scrollbar"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-md
                         transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2
                         focus:ring-offset-slate-900 shadow-lg hover:shadow-xl font-code"
            >
              Send Message <FaPaperPlane className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" /> {/* Added subtle animation */}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;