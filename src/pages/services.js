'use client';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  FaHeadset,
  FaFileMedical,
  FaLaptopCode,
  FaChevronRight
} from 'react-icons/fa';

const services = [
  {
    title: 'Customer Support',
    icon: <FaHeadset className="text-primary text-3xl" />,
    features: [
      'Multilingual support (English, Spanish, German, Arabic, French, Italian)',
      'AI chatbots for instant responses',
      'Customizable scripts and KPIs',
      '24/7/365 availability',
      'Omnichannel solutions (phone, email, chat, social)'
    ],
    useCase: 'Reduce handle time by 30% with our AI-driven workflows.'
  },
  {
    title: 'Medical Billing & RCM',
    icon: <FaFileMedical className="text-primary text-3xl" />,
    features: [
      'End-to-end revenue cycle management',
      'HIPAA-compliant data handling',
      'Denial rate reduction strategies',
      'Claims processing and follow-up',
      'Patient billing and collections'
    ],
    useCase: 'Increase clean claims to 95%+ with our auditing tools.'
  },
  {
    title: 'Technical Support',
    icon: <FaLaptopCode className="text-primary text-3xl" />,
    features: [
      'Tier 1/2 escalation paths',
      'Hardware and software troubleshooting',
      'SaaS product support',
      'IoT device diagnostics',
      'Knowledge base integration'
    ],
    useCase: 'Resolve 80% of basic Tier 1/2 tickets in under 10 minutes.'
  }
];

export default function ServicesPage() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <>
    <Header />
    <div className="bg-white mt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Specialized Solutions for Your Industry
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Tailored BPO services that drive efficiency and reduce operational costs
          </motion.p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="flex flex-col lg:flex-row gap-12 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">Use Case:</h3>
                    <p className="italic text-gray-700">"{service.useCase}"</p>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-xl font-semibold mb-4">Features:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaChevronRight className="text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Get customized pricing for your specific business needs
            </p>
            <Button 
              variant="primary" 
              className="px-8 py-4 text-lg"
              onClick={() => window.location.href = '/contact#form'}
            >
              Request Pricing
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}