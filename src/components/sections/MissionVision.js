// import Image from 'next/image';

// export function MissionVisionSections() {
//   return (
//     <div className="space-y-20 py-20">
//       {/* Mission Section */}
//       <section className="container mx-auto px-6">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Image on left for mission */}
//           <div className="w-full lg:w-1/2">
//             <div className="relative aspect-video lg:aspect-square rounded-xl overflow-hidden shadow-xl">
//               <Image
//                 src="/images/mission.jpg" // Replace with your image
//                 alt="Our mission in action"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
          
//           {/* Content on right for mission */}
//           <div className="w-full lg:w-1/2 space-y-6">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Our <span className="text-primary">Mission</span>
//             </h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               To empower businesses through personalized and scalable customer service solutions. At Nexus Soloutions, our mission is to be the voice behind every great brand — delivering exceptional support experiences that drive loyalty, growth, and trust.
//             </p>
            
//           </div>
//         </div>
//       </section>

//       {/* Vision Section - Reversed layout */}
//       <section className=" mx-auto px-6 bg-gray-100">
//         <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
//           {/* Image on right for vision */}
//           <div className="w-full lg:w-1/2">
//             <div className="relative aspect-video lg:aspect-square rounded-xl overflow-hidden shadow-xl">
//               <Image
//                 src="/images/vision.jpg" // Replace with your image
//                 alt="Our vision for the future"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
          
//           {/* Content on left for vision */}
//           <div className="w-full lg:w-1/2 space-y-6">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Our <span className="text-primary">Vision</span>
//             </h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               To become the leading provider of smart customer engagement solutions in the region, recognized for innovation, reliability, and a people-first approach. We envision a future where every customer interaction becomes an opportunity to create lasting value.
//             </p>
           
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
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

const imageVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export function MissionVisionSections() {
  return (
    <div className="space-y-0 relative" id="mission-vision">
      {/* Unified diagonal line that spans both sections */}
      {/* <div className="absolute hidden lg:block left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent transform -translate-x-1/2 -skew-x-12 z-20" /> */}
      
      {/* Mission Section */}
      <section className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[300px]">
          {/* Full-width image - now visible on mobile */}
          <motion.div 
            className="w-full lg:w-1/2 relative h-64 lg:h-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/1-min.jpg"
                alt="Our mission in action"
                fill
                className="object-cover"
                priority
                quality={80}
              />
              {/* Diagonal overlay that matches the vision section */}
              <div className="absolute -right-[100px] top-0 bottom-0 w-26 bg-white transform skew-x-12 -translate-x-12 mix-blend-lighten hidden lg:block" />
            </div>
          </motion.div>
          
          {/* Content section */}
          <motion.div 
            className="w-full lg:w-1/2 relative bg-white py-12 lg:py-20 px-6 lg:px-12 xl:px-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900">
                Our <span className="text-primary">Mission</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed mt-6">
                To empower businesses through personalized and scalable customer service solutions. At Nexus Soloutions, our mission is to be the voice behind every great brand — delivering exceptional support experiences that drive loyalty, growth, and trust.
              </motion.p>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section - Reversed layout */}
      <section className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row-reverse min-h-[300px]">
          {/* Full-width image - now visible on mobile */}
          <motion.div 
            className="w-full lg:w-1/2 relative h-64 lg:h-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { x: 100, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: "easeOut"
                }
              }
            }}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/2-min.jpg"
                alt="Our vision for the future"
                fill
                className="object-cover"
                priority
              />
              {/* Diagonal overlay that matches the mission section */}
              <div className="absolute -left-1 top-0 bottom-0 w-26 bg-white transform skew-x-12 -translate-x-12 mix-blend-lighten hidden lg:block" />
            </div>
          </motion.div>
          
          {/* Content section */}
          <motion.div 
            className="w-full lg:w-1/2 relative bg-white py-12 lg:py-20 px-6 lg:px-12 xl:px-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900">
                Our <span className="text-primary">Vision</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed mt-6">
                To become the leading provider of smart customer engagement solutions in the region, recognized for innovation, reliability, and a people-first approach. We envision a future where every customer interaction becomes an opportunity to create lasting value.
              </motion.p>
             
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}