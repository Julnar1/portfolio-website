"use client";
import React from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData } from '../assets/assets'; // Import data and assets

const AboutSection = ({ isDarkMode }) => {
  return (
    <section id="about" className={`min-vh-100 py-5 ${isDarkMode ? 'bg-dark-theme text-light' : 'bg-light'}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="rounded-4 overflow-hidden shadow">
              <Image
                src={assets.user_image}
                alt="My Profile"
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                className={`bg-secondary-subtle ${isDarkMode ? 'border-white' : 'border-secondary'}`}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-4">
              <h5 className={`text-uppercase mb-1 ${isDarkMode ? 'text-light' : 'text-muted'}`}>Introduction</h5>
              <h2 className={`display-6 md:display-4 ${isDarkMode ? 'text-light' : 'text-dark'}`}>About me</h2>
            </div>
            <p className={`lead ${isDarkMode ? 'text-light' : 'text-dark'}`}>
            I approach Front-End development with a user-first mindset, creating interfaces that are not only functional but also enjoyable and easy to navigate.
            </p>
            <div className="d-md-flex gap-md-3">
              {infoList.map((item, index) => (
                <div key={index} className={`rounded-3 p-3 mb-3 mb-md-0 shadow-sm text-center ${isDarkMode ? 'bg-secondary' : 'bg-light'}`}>
                  <div className="mb-2">
                    <Image
                      src={isDarkMode ? item.iconDark : item.icon}
                      alt={item.title}
                      width={36}
                      height={36}
                    />
                  </div>
                  <h6 className={`fw-bold mb-1 ${isDarkMode ? 'text-light' : 'text-dark'}`}>{item.title}</h6>
                  <p className="text-muted small">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <h6 className={`text-uppercase mb-2 ${isDarkMode ? 'text-light' : 'text-dark'}`}>Tools I use</h6>
              <div className="d-flex gap-3">
                {toolsData.map((tool, index) => (
                  <div key={index} className="d-flex flex-column align-items-center">
                    <Image src={tool} alt={`Tool ${index + 1}`} width={32} height={32} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;