import React, { useState } from 'react';

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
    const mailtoLink = `mailto:endale406@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white px-6 transition duration-300">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-100">Contact Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-green-200 mb-8 text-center">
            Have a project in mind or just want to say hello? You can also reach me directly at{' '}
            <span className="font-semibold">endale406@gmail.com</span> or fill out the form below.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-800 border border-green-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-800 border-green-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-800 border-green-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 h-32"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
