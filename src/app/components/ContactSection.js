"use client";
import React from 'react';
import Image from 'next/image';
import { assets } from '../assets/assets'; // Import assets

const ContactSection = ({ isDarkMode }) => {
  return (
    <section id="contact" className={`min-vh-100 py-5 d-flex align-items-center ${isDarkMode ? 'bg-dark-theme text-light' : 'bg-light'}`} style={{ paddingTop: '70px' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="mb-4">
              <h5 className={`text-uppercase mb-1 ${isDarkMode ? 'text-light' : 'text-muted'}`}>Connect with me</h5>
              <h2 className={`display-6 md:display-4 ${isDarkMode ? 'text-light' : 'text-dark'}`}>Get in touch</h2>
              <p className={`lead ${isDarkMode ? 'text-light' : 'text-muted'}`}>I'd love to hear from you. If you have any questions, comments, or feedback, please use the form below:</p>
            </div>
            <form action="https://formspree.io/f/mwplaalz" method="POST" className="row g-3">
              <div className="col-md-6">
                <input type="text" className={`form-control rounded-pill py-3 ${isDarkMode ? 'bg-secondary border-secondary text-light' : 'bg-light border-secondary text-dark'}`} id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div className="col-md-6">
                <input type="email" className={`form-control rounded-pill py-3 ${isDarkMode ? 'bg-secondary border-secondary text-light' : 'bg-light border-secondary text-dark'}`} id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="col-12">
                <textarea className={`form-control rounded-3 py-3 ${isDarkMode ? 'bg-secondary border-secondary text-light' : 'bg-light border-secondary text-dark'}`} id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
              </div>
              <div className="col-12 mt-4">
                <button type="submit" className={`btn btn-outline-secondary rounded-pill px-4 py-2 ${isDarkMode ? 'text-light border-light' : 'text-dark border-dark'}`}>
                  Submit now <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} alt="Right Arrow" width={20} height={20} className="ms-2 align-middle" />
                </button>
              </div>
            </form>
            {/* Optional: Add social links below the form */}
            {/* <div className="mt-4">
              <Link href="#" className="me-3"><Image src={assets.linkedin_icon} alt="LinkedIn" width={30} height={30} /></Link>
              <Link href="#" className="me-3"><Image src={assets.github_icon} alt="GitHub" width={30} height={30} /></Link>
              {/* Add more social links */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;