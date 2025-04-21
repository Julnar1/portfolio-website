"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "../assets/assets";

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sideMenuRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    // Close mobile menu when theme changes
    setIsMobileMenuOpen(false);
  }, [isDarkMode]);

  const openMenu = () => {
    setIsMobileMenuOpen(true);
    if (sideMenuRef.current) {
      sideMenuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    if (sideMenuRef.current) {
      sideMenuRef.current.style.right = "-16rem";
    }
  };

  // Prevent hydration issues by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <header className={`fixed-top py-3 ${isDarkMode ? "bg-dark-theme" : "bg-light-theme"}`}>
      <div className="container-fluid">
        <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`}>
          <Link className="navbar-brand d-flex align-items-center icon-hover" href="#top">
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              alt="Logo"
              width={112}
              height={30}
              className="me-4"
              priority
            />
          </Link>
          <button
            className="navbar-toggler icon-hover"
            type="button"
            onClick={openMenu}
            aria-controls="navbarNav"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              width={30}
              height={30}
              priority
            />
          </button>
          <div className="collapse navbar-collapse justify-content-end align-items-center">
            <ul className="navbar-nav mx-auto">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item} className="nav-item">
                  <Link
                    className={`nav-link font-ovo px-5 ${isDarkMode ? "text-light hover-dark" : "text-dark hover-light"}`}
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="d-flex align-items-center justify-content-between me-4">
              <button
                className={`btn icon-hover me-2 ${isDarkMode ? "btn-light" : "btn-dark"}`}
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                <Image
                  src={isDarkMode ? assets.moon_icon : assets.sun_icon}
                  alt="Theme Switch"
                  width={20}
                  height={20}
                  priority
                />
              </button>
              <Link
                href="#contact"
                className={`hidden md:d-flex align-items-center text-decoration-none text-reset ps-4 px-3 py-2 rounded-pill border icon-hover ${
                  isDarkMode ? "border-light hover-dark" : "border-dark hover-light"
                }`}
              >
                Connect
                <Image
                  src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                  className="ms-3"
                  style={{ width: "0.75rem", height: "0.75rem" }}
                  alt="Arrow"
                  priority
                />
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* Mobile Side Navigation Menu */}
      <div
        ref={sideMenuRef}
        className={`side-menu d-lg-none ${isDarkMode ? "bg-dark-theme" : "bg-light-theme"}`}
        style={{
          position: "fixed",
          top: 0,
          right: "-16rem",
          width: "16rem",
          height: "100vh",
          paddingTop: "4rem",
          zIndex: 100,
        }}
      >
        <div className="d-flex justify-content-end p-3">
          <button
            onClick={closeMenu}
            className={`btn btn-close icon-hover ${isDarkMode ? "btn-close-white" : ""}`}
            aria-label="Close menu"
          />
        </div>
        <ul className="navbar-nav d-flex flex-column align-items-start p-3">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item} className="nav-item mb-2">
              <Link
                className={`nav-link font-ovo px-3 ${isDarkMode ? "text-light hover-dark" : "text-dark hover-light"}`}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
