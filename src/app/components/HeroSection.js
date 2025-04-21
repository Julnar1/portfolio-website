import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { assets } from '../assets/assets';

const HeroSection = ({ isDarkMode}) => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center min-vh-100" style={{ paddingTop: '70px' }}>
      <Image src={assets.profile_img} alt="Julnar Nabeel" width={150} height={150} className="bg-secondary-subtle rounded-circle mb-3" />
      <h5 className="fw-bold text-center mb-2">Hi! I'm Julnar Nabeel 👋</h5>
      <h2 className="display-6 md:display-4 text-center mb-4 mb-3 mb-md-4" >
     Front-End Developer specializing in<br className="d-none d-md-block" /> crafting dynamic e-commerce platforms and <br className="d-none d-md-block" />user-friendly and efficient admin panels.
      </h2>
      <p className="text-center mb-4" style={{ maxWidth: '600px' }}>
      I am a UI Developer with core expertise in building responsive and user-friendly interfaces using modern front-end technologies.
      </p>
      <div className="text-center mb-4">
      <strong>Tech Stack:</strong>
    <span className="badge bg-light text-dark rounded me-2 mb-2">React.js</span>
    <span className="badge bg-light text-dark rounded me-2 mb-2">Next.js</span>
    <span className="badge bg-light text-dark rounded me-2 mb-2">TypeScript</span>
    <span className="badge bg-light text-dark rounded me-2 mb-2">HTML</span>
    <span className="badge bg-light text-dark rounded me-2 mb-2" >CSS</span>
    <span className="badge bg-light text-dark rounded me-2 mb-2">Javascript</span>
    <span className="badge bg-light text-dark rounded me-2 mb-2">Bootstrap</span>
    <span className="badge bg-light text-dark rounded me-2 mb-2">Material UI</span>
    <span className="badge bg-light text-dark rounded me-2 mb-2">Redux</span>
    <span className="badge bg-light text-dark rounded me-2 mb-2">Context API</span>
    <span className="badge bg-light text-dark rounded me-2 mb-2">Strapi</span>
    <span className="badge bg-light text-dark rounded me-2 mb-2">Formik</span>
    <span className="badge bg-light text-dark rounded me-2 mb-2">Yup</span>
      </div>
      <div className="d-flex gap-3">
        <Link href="#projects" className="btn btn-dark rounded-pill px-4 py-2">
        Explore My Projects <Image src={isDarkMode ? assets.right_arrow : assets.right_arrow_white} alt="Right Arrow Icon" width={20} height={20} className="ms-2 align-middle" />
        </Link>
        <Link href="/JulnarNabeel-FrontendDeveloper-Resume.pdf" className={`btn rounded-pill px-4 py-2 ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'}`} download>
          my resume <Image src={isDarkMode ? assets.download_icon_white : assets.download_icon}alt="Download Icon" width={20} height={20} className="ms-2 align-middle" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;