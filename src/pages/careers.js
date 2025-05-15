// pages/careers.js
import { getJobs } from '../utils/wordpress';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { useRouter } from 'next/router';

export default function Careers({ initialJobs }) {
  const [jobs, setJobs] = useState(initialJobs);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Handle route transitions
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <BeatLoader color="#e6ba38" size={15} />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Career Opportunities | Nexus Solutions</title>
        <meta name="description" content="Explore career opportunities and join our growing team" />
      </Head>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-6 text-center text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Join Our Team
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Explore exciting career opportunities and grow with us
            </motion.p>
          </div>
        </section>

        {/* Jobs Listing */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Open Positions
              </h2>
              
              {jobs.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">No open positions at this time.</p>
                  <p className="text-gray-500 mt-2">Please check back later or follow us for updates.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {jobs.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-8"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">{job.title.rendered}</h3>
                          <div className="flex flex-wrap gap-4 mb-4">
                            {job.acf?.location && (
                              <span className="flex items-center text-gray-600">
                                <FaMapMarkerAlt className="mr-2 text-primary" />
                                {job.acf.location}
                              </span>
                            )}
                            {job.acf?.salary && (
                              <span className="text-gray-600">Salary: {job.acf.salary}</span>
                            )}
                            {job.acf?.is_remote && (
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                Remote Available
                              </span>
                            )}
                          </div>
                          <div className="prose max-w-none text-gray-600 mb-6">
                            {job.acf?.summary}
                          </div>
                          <button className="flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
                            Apply Now <FaChevronRight className="ml-2" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Seeing Your Perfect Role?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                We're always looking for talented professionals. Send us your resume!
              </p>
              <button 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
                onClick={() => window.location.href = 'mailto:careers@yourcompany.com'}
              >
                Submit Your Resume
              </button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const jobs = await getJobs();
  return {
    props: { initialJobs: jobs },
    revalidate: 500 // Update every 2 minutes
  };
}