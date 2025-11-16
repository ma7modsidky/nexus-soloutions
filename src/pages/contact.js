'use client';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { useState } from 'react';
import { submitContactForm } from '@/utils/wordpress';

export default function ContactPage() {
    const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitContactForm(formData);
      setSubmitStatus('success');
      // Reset form on success
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Form submission logic would go here
  //   window.location.href = 'mailto:info@nexussoloutions.com';
  // };

  return (
    <>
    <Head>
        <title>Contact Us | Nexus Soloutions</title>
        <meta name="description" content="Get in touch with our team to discuss your business needs" />
    </Head>
    <Header />
    <div className="bg-white  overflow-hidden mt-20">
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
                 {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                      There was an error submitting your form. Please try again.
                    </div>
                  )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name*</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email*</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-700 mb-2">Service Needed</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    ></textarea>
                  </div>
                  <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 w-full ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
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
                      {/* <p className="text-gray-600">+20 115 252 3318 (Egypt)</p>
                      <p className="text-gray-600">+44 773 554 6027 (UK)</p> */}
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
                      <h3 className="font-semibold">USA</h3>
                      {/* <p className="text-gray-600">2900 Knights RD, Philadelphia, PA 19020 United States of America</p> */}
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-4 text-xl" />
                    <div>
                      <h3 className="font-semibold">Egypt</h3>
                      {/* <p className="text-gray-600">81 South Loutas, New Cairo, Cairo, Egypt</p> */}
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-4 text-xl" />
                    <div>
                      <h3 className="font-semibold">UK</h3>
                      {/* <p className="text-gray-600">27 The Mount, Rickmansworth, England, WD3 4DW, United Kingdom</p> */}
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