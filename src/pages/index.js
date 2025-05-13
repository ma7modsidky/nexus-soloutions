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
// Import other sections as needed

export default function Home() {
  return (
    <>
      <Head>
        <title>CompanyName | Digital Solutions</title>
        <meta name="description" content="We build digital experiences that drive results" />
      </Head>
      
      <Header />
      
      <main className='overflow-hidden
      '>
        <AnimatedSection delay={0.2}>
          <Hero />
          <MissionVisionSections />
          <Services />
          <BenefitsSection />
          <PartnersSection />
          <ContactSection />
        </AnimatedSection>
        
        {/* Add other sections here */}
      </main>
      
      <Footer />
    </>
  );
}