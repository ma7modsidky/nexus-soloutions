'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTimes, FaBars } from 'react-icons/fa';
import { 
  FaXTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaGithub,
  FaFacebook,
  FaYoutube
} from 'react-icons/fa6';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu when clicking on a link
  const closeMenu = () => setIsOpen(false);

  // Handle scroll for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const socialLinks = [
    { icon: <FaXTwitter size={20} />, url: "https://twitter.com" },
    { icon: <FaLinkedin size={20} />, url: "https://linkedin.com" },
    { icon: <FaInstagram size={20} />, url: "https://instagram.com" },
    // { icon: <FaGithub size={20} />, url: "https://github.com" },
    { icon: <FaFacebook size={20} />, url: "https://facebook.com" },
    { icon: <FaYoutube size={20} />, url: "https://youtube.com" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    // { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className={`bg-secondary fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center"
              onClick={closeMenu}
            >
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={180}
                height={50}
                className="h-14 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary! transition-colors duration-200 font-medium text-lg relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary focus:outline-none transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
      {/* <aside className={`fixed top-0 left-0 z-50 h-full w-80 bg-white shadow-xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}> */}
        <div className="flex flex-col h-full p-6">
          {/* Header with Close Button */}
          <div className="flex justify-between items-center mb-8">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={160}
                height={40}
                className="h-8 w-auto"
                priority
                
              />
            </Link>
            <button
              onClick={closeMenu}
              className="p-2 text-gray-700 hover:text-primary"
              aria-label="Close menu"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors duration-200 text-lg font-medium"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="pt-6 mt-auto border-t border-gray-200">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors duration-200 p-2"
                  aria-label={`${social.url.split('//')[1].split('.')[0]} link`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}