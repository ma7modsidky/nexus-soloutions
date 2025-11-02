import Head from 'next/head';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { MissionVisionSections } from '@/components/sections/MissionVision';
import BenefitsSection from '@/components/sections/Benefits';
import ContactSection from '@/components/sections/Contact';
import PartnersSection from '@/components/sections/Partners';
import WhyPartnerSection from '@/components/sections/WhyPartner';
import Differentiators from '@/components/sections/Differentiators';
import { nexaHeavy, nexaExtralight } from '../utils/fonts'
// Import other sections as needed

export default function Home() {
  return (
    <>
      <Head>
        <title>Nexus Soloutions | Outsourcing Solutions</title>
        <meta name="description" content="End-to-End Business Process Outsourcing" />
      </Head>
      
      <Header />
      
      <main className={`overflow-hidden pt-22 ${nexaHeavy.variable} ${nexaExtralight.variable}`}
      >
        <AnimatedSection delay={0.2}>
          <Hero />
          {/* <MissionVisionSections /> */}
          <WhyPartnerSection />
          <Services />
          <Differentiators />
          {/* <BenefitsSection /> */}
          {/* <PartnersSection /> */}
          {/* <ContactSection /> */}
        </AnimatedSection>
        
        {/* Add other sections here */}
      </main>
      
      <Footer />
    </>
  );
}