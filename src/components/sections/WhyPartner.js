'use client';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { 
  FaRobot, 
  FaShieldAlt, 
  FaHeadset, 
  FaExpandArrowsAlt 
} from 'react-icons/fa';

export default function WhyPartnerSection() {
  const benefits = [
    {
      icon: <FaRobot className="text-primary text-2xl" />,
      title: "AI & Automation",
      description: "Leverage cutting-edge AI to reduce costs and boost efficiency."
    },
    {
      icon: <FaShieldAlt className="text-primary text-2xl" />,
      title: "Certified Security",
      description: "HIPAA, PCI DSS, and GDPR-compliant data protection."
    },
    {
      icon: <FaHeadset className="text-primary text-2xl" />,
      title: "Omnichannel Support",
      description: "Phone, email, chat, social media-seamlessly integrated."
    },
    {
      icon: <FaExpandArrowsAlt className="text-primary text-2xl" />,
      title: "Scalable Solutions",
      description: "Flexibly adjust teams to match your business needs."
    }
  ];

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 bg-gray-50" id='why-partner'>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Partner With Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by 10+ Global Brands for Secure, High-Performance Outsourcing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center mb-4 bg-primary/10 rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="primary" 
            className="px-8 py-3 text-lg"
            onClick={scrollToServices}
          >
            Explore Our Services →
          </Button>
        </div>
      </div>
    </section>
  );
}