'use client';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    window.location.href = 'mailto:info@nexussoloutions.com';
  };

  return (
    <>
    <Header />
    <div className="bg-white  overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's Build Your Solution Together
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Get in touch with our team to discuss your business needs
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name*</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email*</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-700 mb-2">Service Needed</label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="customer-support">Customer Support</option>
                      <option value="medical-billing">Medical Billing & RCM</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="sales-solutions">Sales Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message*</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 w-full"
                  >
                    Submit Request
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="w-full lg:w-1/2 space-y-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Contact Methods */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaPhone className="text-primary mt-1 mr-4 text-xl" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+1 (445) 448-6171 (USA)</p>
                      <p className="text-gray-600">+20 115 252 3318 (Egypt)</p>
                      <p className="text-gray-600">+44 773 554 6027 (UK)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaEnvelope className="text-primary mt-1 mr-4 text-xl" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">info@nexussoloutions.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaGlobe className="text-primary mt-1 mr-4 text-xl" />
                    <div>
                      <h3 className="font-semibold">Live Chat</h3>
                      <p className="text-gray-600">Available 24/7 (Powered by AI)</p>
                      {/* Chat widget would be embedded here */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6">Global Presence</h2>
                <p className="text-gray-600 mb-6">
                  Headquartered in Philadelphia, USA, with teams in Cairo, Egypt and England, United Kingdom.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-4 text-xl" />
                    <div>
                      <h3 className="font-semibold">USA Office</h3>
                      <p className="text-gray-600">2900 Knights RD, Philadelphia, PA 19020 United States of America</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-4 text-xl" />
                    <div>
                      <h3 className="font-semibold">Egypt Office</h3>
                      <p className="text-gray-600">81 South Loutas, New Cairo, Cairo, Egypt</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-4 text-xl" />
                    <div>
                      <h3 className="font-semibold">UK Office</h3>
                      <p className="text-gray-600">27 The Mount, Rickmansworth, England, WD3 4DW, United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}