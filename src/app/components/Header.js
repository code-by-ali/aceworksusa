"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./header-footer.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`w-full bg-transparent ${styles.header}`}>
        <nav className="max-w-7xl mx-auto px-4 p-0 flex justify-between items-center h-16 relative">
          {/* Logo/Brand */}
          <Link href="/" className="text-white logo font-semibold ">
            Aceworkusa
          </Link>

          {/* Desktop Navigation - hidden on small screens */}
          <div className={`hidden md:flex ${styles.navitems}`}>
            <Link href="/about" className="text-white hover:text-orange-400">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-orange-400">
              Services
            </Link>
            <Link href="/blog" className="text-white hover:text-orange-400">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-400">
              Contact
            </Link>
            <Link href="/all-pages" className="text-white hover:text-orange-400">
              All Pages
            </Link>
          </div>

          {/* Call to Action Button (desktop) */}
          <Link
            href="/start"
            className="hidden md:inline-block btn-orange z-50"
          >
            Start Your Growth
          </Link>

          {/* Hamburger Menu Icon (mobile only) */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-50 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Side Menu */}
        <div
  className={`fixed top-0 right-0 h-full w-72  bg-opacity-95 backdrop-blur-lg shadow-lg z-40 transform transition-transform duration-300 ease-in-out
              ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
>
           
            <nav className="flex flex-col mt-20 space-y-6 px-6">
              <Link
                href="/about"
                className="text-white hover:text-orange-400 text-lg"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-orange-400 text-lg"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="text-white hover:text-orange-400 text-lg"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-orange-400 text-lg"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                href="/all-pages"
                className="text-white hover:text-orange-400 text-lg"
                onClick={closeMenu}
              >
                All Pages
              </Link>

              <Link
                href="/start"
                className="btn-orange mt-8 text-center inline-block"
                onClick={closeMenu}
              >
                Start Your Growth
              </Link>
            </nav>
          </div>

          {/* Overlay background when menu is open */}
          {menuOpen && (
            <div
              onClick={closeMenu}
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
              aria-hidden="true"
            />
          )}
        </nav>
      </header>
    </>
  );
}
