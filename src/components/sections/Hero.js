'use client';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Image from 'next/image';

export default function Hero() {
  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Text animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.6
      }
    }
  };

  return (
    <section className="relative h-screen max-h-[800px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Professional team working together"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>
      
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-secondary/80 z-1 mix-blend-multiply" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 text-white">
        <div className="max-w-3xl space-y-6">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            <span className="text-primary">Transform</span> Your Workforce Strategy
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
          >
            Streamline your operations and boost efficiency with our comprehensive 
            HR outsourcing solutions. Focus on your core business while we handle 
            the complexities of talent acquisition, payroll, and compliance.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-6"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <Button 
              variant="primary" 
              className="text-lg px-8 py-4"
              onClick={() => scrollToSection('contact')}
            >
              Get Your Free Consultation
            </Button>
            <Button 
              variant="outline-white" 
              className="text-lg px-8 py-4"
              onClick={() => scrollToSection('services')}
            >
              Our Services
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scrolling indicator */}
      <button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce focus:outline-none"
        onClick={() => scrollToSection('mission-vision')}
        aria-label="Scroll down"
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}