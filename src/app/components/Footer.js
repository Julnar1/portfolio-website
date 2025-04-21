"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '../assets/assets'; 

const Footer = ({ isDarkMode }) => {
  const phoneNumber = "+971-555-713917"; 
  const linkedinUrl = "https://www.linkedin.com/in/julnar-nabeel/"; 
  const githubUrl = "https://github.com/Julnar1"; 

  return (
    <footer className={`py-5 ${isDarkMode ? 'bg-dark-theme text-light' : 'bg-light'}`}>
      <div className="container-fluid text-center">
        <Link href="#top" className="d-inline-block mb-3">
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              alt="Logo"
              width={112}
              height={30}
            />
          </Link>
        <p className="mb-2">
          <Image src={assets.mail_icon} alt="Email" width={20} height={20} className="me-2 align-middle" />
          <Link href="mailto:your-email@gmail.com" className={`text-decoration-none ${isDarkMode ? 'text-light' : 'text-dark'}`}>
            julna.nabeel@gmail.com
          </Link>
        </p>
        <p className="mb-4">
          <Image src={isDarkMode ? assets.phone_dark : assets.phone} alt="Phone" width={20} height={20} className="me-2 align-middle" /> {/* Use your phone icon asset if available */}
          <Link href={`tel:${phoneNumber}`} className={`text-decoration-none ${isDarkMode ? 'text-light' : 'text-dark'}`}>
            {phoneNumber}
          </Link>
        </p>
        <hr className={`border-top ${isDarkMode ? 'border-secondary' : 'border-dark'}`} />
        <div className="d-flex justify-content-between align-items-center mt-3">
          <p className={`small ${isDarkMode ? 'text-light' : 'text-dark'}`}>&copy; {new Date().getFullYear()} Julnar Nabeel. All rights reserved.</p>
          <div>
            <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={`me-3 text-decoration-none ${isDarkMode ? 'text-light' : 'text-dark'}`}>
              LinkedIn
            </Link>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className={`text-decoration-none ${isDarkMode ? 'text-light' : 'text-dark'}`}>
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;