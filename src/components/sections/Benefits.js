'use client';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { FaHeadset, FaChartLine, FaMoneyBillWave, FaUserFriends } from 'react-icons/fa';

// Animated counter component


const Counter = ({ from = 0, to, suffix = '+' }) => {
  const [count, setCount] = useState(from);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { duration: 2 }
      });
      
      // Simple counter animation
      const duration = 2000; // 2 seconds
      const startTime = Date.now();
      const range = to - from;
      
      const updateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(from + progress * range));
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [controls, inView, to, from]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className="text-4xl md:text-5xl font-bold"
    >
      {count}{suffix}
    </motion.span>
  );
};

export default function BenefitsSection() {
  return (
    <section className="bg-secondary text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Reasons to Outsource */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Large Customer Service Icon */}
              <div className="mb-8 text-7xl">
                <FaHeadset />
              </div>
              
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Reasons to Outsource your HR to Egypt
              </h2>
              
              {/* Benefits List */}
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Cost Reduction for your company that is tailored to fit your needs.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Focus on your core business and gain valuable market knowledge.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Overcoming the regulatory and cost hurdles when employing resources in a remote location.
</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Meeting each country’s legislation and rules can be a significant barrier to cross-border business expansion.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true,  }}
            transition={{ duration: 0.8 }}
            
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Stat 1 - Support Given */}
              <motion.div 
                className="bg-white/10 p-6 rounded-xl text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4 flex justify-center">
                  <FaChartLine />
                </div>
                <Counter to={165} />
                <p className="text-lg mt-2">Support Given</p>
              </motion.div>

              {/* Stat 2 - Clients Rating */}
              <motion.div 
                className="bg-white/10 p-6 rounded-xl text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4 flex justify-center">
                  <FaUserFriends />
                </div>
                <Counter to={254} />
                <p className="text-lg mt-2">Clients Rating</p>
              </motion.div>

              {/* Stat 3 - Money Saved */}
              <motion.div 
                className="bg-white/10 p-6 rounded-xl text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4 flex justify-center">
                  <FaMoneyBillWave />
                </div>
                <Counter to={2} suffix="M+" />
                <p className="text-lg mt-2">Money Saved</p>
              </motion.div>

              {/* Stat 4 - Happy Clients */}
              <motion.div 
                className="bg-white/10 p-6 rounded-xl text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4 flex justify-center">
                  <FaUserFriends />
                </div>
                <Counter to={145} />
                <p className="text-lg mt-2">Happy Clients</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}