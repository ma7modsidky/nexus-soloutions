// components/layout/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Certifications</h3>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-3 rounded-md">
                <Image 
                  src="/images/certifications/HIPAA COMPLIANT.svg" 
                  alt="HIPAA Certified"
                  width={80}
                  height={80}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-3 rounded-md">
                <Image 
                  src="/images/certifications/pci-dss.svg" 
                  alt="PCI DSS Certified"
                  width={80}
                  height={80}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-3 rounded-md">
                <Image 
                  src="/images/certifications/iso.svg" 
                  alt="ISO Certified"
                  width={80}
                  height={80}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Connect With Us</h3>
            <div className="mb-6">
              {/* <p className="mb-4">2900 Knights RD, <br />Philadelphia, PA 19020 United States of America</p> */}
              <p>Email: info@nexussolutions.com</p>
              <p>Phone: +1 (445) 448-6171 </p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/nexus-solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://instagram.com/nexus-solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://facebook.com/nexus-solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors text-2xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Nexus Soloutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}