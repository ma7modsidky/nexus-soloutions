'use client';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

import { 
  FaHeadset,
  FaFileMedical,
  FaLaptopCode,
  FaPhoneVolume
} from 'react-icons/fa';
import Button from '../ui/Button';

const services = [
  {
    title: 'Customer Support',
    description: 'Multilingual agents, 24/7 availability, CSAT monitoring',
    icon: <FaHeadset className="w-full h-full" />,
    details: [
      'Multilingual support team',
      '24/7/365 availability',
      'Real-time CSAT monitoring',
      'Omnichannel solutions'
    ]
  },
  {
    title: 'Medical Billing & RCM',
    description: 'Claims processing, denial management, HIPAA-trained specialists',
    icon: <FaFileMedical className="w-full h-full" />,
    details: [
      'End-to-end claims processing',
      'Denial prevention & management',
      'HIPAA-compliant specialists',
      'Revenue cycle optimization'
    ]
  },
  {
    title: 'Technical Support (Tier 2)',
    description: 'Advanced troubleshooting for SaaS, hardware, and IoT',
    icon: <FaLaptopCode className="w-full h-full" />,
    details: [
      'Advanced technical expertise',
      'SaaS product support',
      'Hardware diagnostics',
      'IoT device troubleshooting'
    ]
  },
  {
    title: 'Sales Solutions',
    description: 'Inbound/outbound campaigns, lead nurturing, CRM integration',
    icon: <FaPhoneVolume className="w-full h-full" />,
    details: [
      'Custom sales campaigns',
      'Lead qualification & nurturing',
      'Seamless CRM integration',
      'Performance analytics'
    ]
  }
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Services() {
  return (
    <>
    
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-4">
            End-to-End Business Process Outsourcing
          </motion.h2>
          <motion.p variants={item} className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive outsourcing solutions tailored to your business needs.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="p-8 hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-16 h-16 mx-auto md:mx-0 text-primary flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: index * 0.1
                      }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button 
            variant="primary" 
            className="px-8 py-3 text-lg"
            onClick={() => window.location.href = '/services'}
          >
            See All Services →
          </Button>
        </motion.div>
      </div>
    </section>
    
    </>
  );
}