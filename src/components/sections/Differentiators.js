'use client';
import { motion } from 'framer-motion';
import { FaRobot, FaUserGraduate, FaChartLine } from 'react-icons/fa';
import Image from 'next/image';

export default function Differentiators() {
  const differentiators = [
    {
      icon: <FaRobot className="text-primary text-3xl" />,
      title: "Technology",
      description: "AI-powered analytics and predictive routing for faster resolutions."
    },
    {
      icon: <FaUserGraduate className="text-primary text-3xl" />,
      title: "Talent",
      description: "Certified agents with industry-specific expertise (e.g., healthcare, tech)."
    },
    {
      icon: <FaChartLine className="text-primary text-3xl" />,
      title: "Transparency",
      description: "Real-time reporting dashboards and SLA guarantees."
    }
  ];

  const certifications = [
    { name: "HIPAA", logo: "/images/certifications/HIPAA COMPLIANT.svg" },
    { name: "ISO 27001", logo: "/images/certifications/iso.svg" },
    { name: "PCI DSS", logo: "/images/certifications/pci-dss.svg" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Sets Us Apart?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our unique combination of technology, talent, and transparency delivers exceptional results
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center mb-6 bg-primary/10 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center justify-center w-32 h-32 p-4">
              <Image
                src={cert.logo}
                alt={cert.name}
                width={150}
                height={150}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}