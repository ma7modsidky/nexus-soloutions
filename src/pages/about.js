// pages/about.js
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Nexus Soloutions</title>
        <meta name="description" content="Human-Centric Outsourcing, Powered by Innovation" />
      </Head>
      <Header />
      
      <main className="bg-white overflow-hidden py-22">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-6 text-center text-white">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Human-Centric Outsourcing, <br />Powered by Innovation
            </motion.h1>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ 
                once: true,
                margin: "0px 0px -100px 0px", // Adjust bottom margin
                amount: 0.1 // Require only 10% visibility
              }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                "To redefine outsourcing with ethical practices, technology, and measurable results."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Company Overview</h2>
                
                <div className="prose-lg text-gray-600 space-y-6">
                  <p>
                    <strong>Our Story</strong><br />
                    Nexus Soloutions Founded in 2022, Currently serving 10 industries globally.
                  </p>
                  <p>
                    At Nexus Soloutions, we don't just connect businesses with customers — we empower every conversation. 
                    As a leading provider of call center and customer service agents, we specialize in delivering tailored, 
                    high-quality support solutions across a wide range of industries.
                  </p>
                  <p>
                    Whether you're a startup or a multinational corporation, our agents become a seamless extension of your brand. 
                    The name "Solo-utions" is a unique blend of two core values:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Solo</strong> – representing our commitment to personalized, one-on-one service for each client.</li>
                    <li><strong>Solutions</strong> – reflecting our ability to deliver scalable, effective strategies for customer engagement.</li>
                  </ul>
                  <p>
                    Together, they form Solo-utions — a name that stands for personalized performance.
                    With Nexus symbolizing connection and synergy, Nexus Solo-utions is where unique service meets smart strategy.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">Key Stats</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">500+ Agents</h4>
                      <p className="text-gray-600">Dedicated professionals ready to serve</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">98% Client Retention</h4>
                      <p className="text-gray-600">Our clients stay with us year after year</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">24/7 Operations</h4>
                      <p className="text-gray-600">Always available when you need us</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Leadership */}
<section className="py-20">
  <div className="container mx-auto px-6 max-w-5xl">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Leadership</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Meet the visionaries driving our success
      </p>
    </motion.div>

    <div className="flex flex-wrap justify-center gap-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] min-w-[300px] max-w-[400px] bg-white p-8 rounded-xl shadow-md text-center"
      >
        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary">
          <Image 
            src="/images/team/kareem-maghraby.jpg" 
            alt="Kareem El Maghraby"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-2xl font-bold mb-2">Kareem Maghraby</h3>
        <p className="text-primary font-medium mb-4">Founder & Chief Executive Officer (CEO)</p>
        <p className="text-gray-600">
          Kareem El Maghraby is an Egyptian-American entrepreneur with over 20 years of diverse experience in IT, 
          customer service, and corporate management. He has successfully led teams of more than 1,200 employees 
          and achieved remarkable success stories. Kareem's vision is to reach every client with exceptional service 
          and to maintain customer satisfaction under all circumstances.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] min-w-[300px] max-w-[400px] bg-white p-8 rounded-xl shadow-md text-center"
      >
        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary">
          <Image 
            src="/images/team/omar-quora.jpg" 
            alt="Omar Quora"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-2xl font-bold mb-2">Omar Quora</h3>
        <p className="text-primary font-medium mb-4">Founder & Chief Marketing Officer (CMO)</p>
        <p className="text-gray-600">
          Omar Quora is an Egyptian entrepreneur with over 15 years of experience across multiple industries, 
          including real estate, customer service, tourism, and corporate management. He has led teams of more 
          than 500 employees and achieved outstanding sales exceeding EGP 2 billion over the past four years. 
          Omar's vision focuses on positioning the company among top industry players by delivering exceptional service.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] min-w-[300px] max-w-[400px] bg-white p-8 rounded-xl shadow-md text-center"
      >
        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary">
          <Image 
            src="/images/team/waleed-el-banna.jpg" 
            alt="Waleed El Banna"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-2xl font-bold mb-2">Waleed El Banna</h3>
        <p className="text-primary font-medium mb-4">Founder & Chief Financial Officer (CFO)</p>
        <p className="text-gray-600">
          Waleed El Banna is one of the founding partners and the financial backbone of the company. 
          He is an Egyptian entrepreneur with over 25 years of financial expertise in various sectors, 
          including food services, customer service, and tourism. Waleed has successfully led multiple 
          organizations with consistent financial growth and stability. His vision centers on driving 
          Nexus Solo-utions to compete among leading names through exceptional service and strategic planning.
        </p>
      </motion.div>
    </div>
  </div>
</section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To empower businesses through personalized and scalable customer service solutions. At Nexus Solutions, 
                  our mission is to be the voice behind every great brand, delivering exceptional support experiences 
                  that drive loyalty, growth, and trust.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                  To become the leading provider of smart customer engagement solutions globally, recognized for innovation, 
                  reliability, and a people-first approach. We envision a future where every customer interaction becomes 
                  an opportunity to create lasting value.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Customer Service?</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Partner with confidence and experience the Nexus Solutions difference.
              </p>
              <Button 
                
                variant='primary'
                onClick={() => window.location.href = '/contact#form'}
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}