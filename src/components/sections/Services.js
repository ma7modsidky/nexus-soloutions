'use client';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { 
  FaUserPlus, 
  FaUserCheck, 
  FaFileMedical, 
  FaUmbrellaBeach,
  FaHandHoldingUsd,
  FaUserSlash
} from 'react-icons/fa';

const services = [
  {
    title: 'Employee Registration',
    description: 'Comprehensive employee data management and documentation services for seamless HR operations.',
    icon: <FaUserPlus className="w-full h-full" />,
  },
  {
    title: 'Hiring & Onboarding',
    description: 'End-to-end recruitment and smooth onboarding processes to integrate new hires effectively.',
    icon: <FaUserCheck className="w-full h-full" />,
  },
  {
    title: 'Medical Insurance Claims',
    description: 'Efficient processing and management of employee health insurance claims and benefits.',
    icon: <FaFileMedical className="w-full h-full" />,
  },
  {
    title: 'Leave Management',
    description: 'Automated leave tracking and approval systems for balanced workforce management.',
    icon: <FaUmbrellaBeach className="w-full h-full" />,
  },
  {
    title: 'Benefits Management',
    description: 'Administration of competitive employee benefits packages to enhance satisfaction and retention.',
    icon: <FaHandHoldingUsd className="w-full h-full" />,
  },
  {
    title: 'Terminations',
    description: 'Professional handling of offboarding processes with compliance to labor regulations.',
    icon: <FaUserSlash className="w-full h-full" />,
  },
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
            Our HR Services
          </motion.h2>
          <motion.p variants={item} className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive human resource outsourcing solutions tailored to your organizational needs.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="w-16 h-16 mx-auto mb-6 text-primary">
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
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}