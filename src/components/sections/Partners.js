'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const partners = [
  { id: 1, name: 'Partner 1', logo: '/images/partners/1.svg' },
  { id: 2, name: 'Partner 2', logo: '/images/partners/2.svg' },
  { id: 3, name: 'Partner 3', logo: '/images/partners/3.svg' },
  { id: 4, name: 'Partner 4', logo: '/images/partners/4.svg' },
  { id: 5, name: 'Partner 5', logo: '/images/partners/5.svg' },
  { id: 6, name: 'Partner 6', logo: '/images/partners/6.svg' },
  { id: 7, name: 'Partner 7', logo: '/images/partners/7.svg' },
//   { id: 8, name: 'Partner 8', logo: '/images/partners/partner8.png' },
];

export default function PartnersSection() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Trusted Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver exceptional HR solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Slider Controls */}
          <button 
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous partners"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button 
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next partners"
          >
            <FaChevronRight className="text-gray-700" />
          </button>

          {/* Logo Slider */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide space-x-8 md:space-x-12 px-4 py-4"
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                className="flex-shrink-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-40 h-24 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={96}
                    className="object-contain w-full h-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}