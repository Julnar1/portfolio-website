"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Import non-dynamic components
import Navbar from "./components/Navbar";

// Dynamically import components that use client-side features
const HeroSection = dynamic(() => import("./components/HeroSection"));
const AboutSection = dynamic(() => import("./components/AboutSection"));
const ProjectsSection = dynamic(() => import("./components/ProjectsSection"));
const ContactSection = dynamic(() => import("./components/ContactSection"));
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('bg-dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('bg-dark-theme');
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  // Prevent hydration issues by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <main className={`${isDarkMode ? 'bg-dark-theme' : 'bg-light-theme'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <HeroSection isDarkMode={isDarkMode} />
      <AboutSection isDarkMode={isDarkMode} />
      <ProjectsSection isDarkMode={isDarkMode} />
      <ContactSection isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      {/* <section id="hero" className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>UI Developer with a Passion for Creating Engaging User Experiences</h2>
          <p>I specialize in building responsive and user-friendly interfaces using modern front-end technologies. My experience includes developing e-commerce applications, admin dashboards, and replicating complex UIs.</p>
          <Link href="#projects" className={styles.btn}>View My Work</Link>
        </div>
        <div className={styles.heroImageContainer}> {/* Add this container */}
          {/* <Image */}
            {/* src="/images/your-image.jpg" // Replace with your image path
            alt="Your Image"
            width={400} // Adjust as needed
            height={400} // Adjust as needed
            className={styles.heroImage}
          />
        </div>
      </section> */}

      {/* <section id="projects" className={styles.projects}>
        <h2>My Projects</h2>
        <div className={styles.projectGrid}>
          <Link href="#project1" className={styles.projectCard}>
            <Image src="/images/project1.jpg" alt="E-commerce Website Screenshot" width={500} height={300} layout="responsive" />
            <h3>E-commerce Website (React.js/Next.js)</h3>
            <p>Developed a full-stack e-commerce site (frontend focus) with product listings, cart, and order processing.</p>
          </Link>

          <Link href="#project2" className={styles.projectCard}>
            <Image src="/images/project2.jpg" alt="Admin Dashboard Screenshot" width={500} height={300} layout="responsive" />
            <h3>E-commerce Admin App (Next.js, TypeScript)</h3>
            <p>Built an admin dashboard with role-based access for managing products and categories.</p>
          </Link>

          <Link href="#project3" className={styles.projectCard}>
            <Image src="/images/project3.jpg" alt="UI Replication Screenshot" width={500} height={300} layout="responsive" />
            <h3>UI Replication (HTML, CSS, Bootstrap)</h3>
            <p>Replicated static UIs of Amazon/Flipkart and the Kerala Cowin portal.</p>
          </Link>
        </div>
      </section> */}
      {/* <section id="about" className={styles.about}>
        <h2>About Me</h2>
        <p>I am a UI developer with a strong foundation in HTML, CSS, JavaScript, and modern front-end frameworks like React.js and Next.js. I have experience building e-commerce applications, admin dashboards, and replicating complex UIs. I am passionate about creating clean, efficient, and user-friendly interfaces that enhance the user experience. I am proficient in using tools like Redux for state management, Formik/Yup for validation, and react-toastify for user feedback.</p>
        <p>I am always eager to learn new technologies and improve my skills. I am a team player with excellent communication and problem-solving abilities.</p>
        <a href="your-resume.pdf" className="btn">Download Resume</a>
      </section> */}
{/* 
      <section id="contact" className={styles.contact}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me for collaborations or job opportunities.</p>
        <form action="submit-form.php" method="post">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required ></textarea>
            <button type="submit" className="btn">Send Message</button>
        </form>
        <div className="social-links">
            <Link href="https://m.media-amazon.com/images/I/61S6-iMMK5L._AC_SL1500_.jpg" target="_blank">LinkedIn</Link>
            <Link href="https://m.media-amazon.com/images/I/61S6-iMMK5L._AC_SL1500_.jpg" target="_blank">GitHub</Link>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Julnar Nabeel. All rights reserved.</p>
      </footer> */}
    </main>
  );
}

