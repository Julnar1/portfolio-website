"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {assets, workData } from '../assets/assets'; // Assuming workData is in your assets file

const ProjectsSection = ({ isDarkMode }) => {
  return (
    <section id="projects" className={`min-vh-100 py-5 ${isDarkMode ? 'bg-dark-theme text-light' : 'bg-light'}`}>
      <div className="container text-center">
        <div className="mb-5">
          <h5 className={`text-uppercase mb-1 ${isDarkMode ? 'text-light' : 'text-muted'}`}>My portfolio</h5>
          <h2 className={`display-6 md:display-4 ${isDarkMode ? 'text-light' : 'text-dark'}`}>My latest work</h2>
          <p className={`lead mb-4 ${isDarkMode ? 'text-light' : 'text-dark'}`}>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {workData.map((project, index) => (
            <div key={index} className="col">
              <Link 
                href={project.projectLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className={`card h-100 overflow-hidden shadow-sm rounded-4 ${isDarkMode ? 'bg-secondary border-secondary' : 'bg-white border-light'}`}>
                  <div className="position-relative">
                    <Image
                      src={project.bgImage}
                      alt={project.title}
                      layout="responsive"
                      width={500}
                      height={350}
                      objectFit="cover"
                      className="transition-transform hover-scale"
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0 hover-visible">
                      <span className="text-white">View Project</span>
                    </div>
                  </div>
                  <div className="card-body position-relative">
                    <h5 className={`card-title ${isDarkMode ? 'text-light' : 'text-dark'}`}>{project.title}</h5>
                    <p className="card-text text-muted small">{project.description}</p>
                  </div>
                  <div className="position-absolute bottom-0 end-0 p-2">
                    <div className="bg-warning rounded-pill p-1">
                      <Image src={assets.send_icon} alt="Visit Project" width={20} height={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link 
            href="https://github.com/Julnar1" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`btn btn-outline-secondary rounded-pill px-4 ${isDarkMode ? 'text-light border-light' : 'text-dark border-dark'}`}
          >
            Show more <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} alt="Right Arrow" width={20} height={20} className="ms-2 align-middle" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;