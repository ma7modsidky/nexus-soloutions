'use client';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobeAmericas } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our HR outsourcing services? Reach out to our team.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div 
            className="w-full lg:w-1/2 bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Our Offices</h3>
            
            {/* Egypt Office */}
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <FaGlobeAmericas className="text-secondary mt-1 mr-4 text-xl" />
                <div>
                  <h4 className="text-lg font-semibold">Egypt Office</h4>
                </div>
              </div>
              <div className="flex items-start mb-3">
                <FaMapMarkerAlt className="text-gray-400 mt-1 mr-4" />
                <p>123 Nile Tower, Downtown Cairo, Egypt</p>
              </div>
              <div className="flex items-start mb-3">
                <FaPhone className="text-gray-400 mt-1 mr-4" />
                <p>+20 2 1234 5678</p>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-gray-400 mt-1 mr-4" />
                <p>egypt@hrcompany.com</p>
              </div>
            </div>

            {/* US Office */}
            <div>
              <div className="flex items-start mb-4">
                <FaGlobeAmericas className="text-secondary mt-1 mr-4 text-xl" />
                <div>
                  <h4 className="text-lg font-semibold">US Representative Office</h4>
                </div>
              </div>
              <div className="flex items-start mb-3">
                <FaMapMarkerAlt className="text-gray-400 mt-1 mr-4" />
                <p>456 Business Ave, Suite 789 Chicago, IL 60601, USA</p>
              </div>
              <div className="flex items-start mb-3">
                <FaPhone className="text-gray-400 mt-1 mr-4" />
                <p>+1 (212) 123-4567</p>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-gray-400 mt-1 mr-4" />
                <p>usa@hrcompany.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-1/2 bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}