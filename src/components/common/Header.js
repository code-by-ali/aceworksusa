"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const isHomePage = pathname === "/";
  const textColor = isHomePage ? "text-white" : "text-[#2b6396]";
  const hoverColor = isHomePage
    ? "hover:text-orange-400"
    : "hover:text-orange-500";

  const navItems = ["about", "services", "blog", "contact", "all-pages"];

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh"; // prevent tiny scroll
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [menuOpen]);

  return (
    <header className="w-full bg-transparent font-bold p-4 relative z-[999]">
      <nav className="mx-auto px-4 flex justify-between items-center h-16 relative">
        {/* Logo */}
        <Link
          href="/"
          className={`${textColor} font-semibold text-lg md:text-xl lg:text-2xl no-underline`}
        >
          Aceworkusa
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={`ml-12 ${textColor} ${hoverColor} no-underline transition-colors`}
            >
              {item.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/start"
          className="hidden md:inline-block bg-secondary text-white rounded-full px-6 py-3 z-50"
        >
          Start Your Growth
        </Link>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-[100] focus:outline-none relative"
          aria-label="Toggle menu"
        >
          <svg
            className={`w-8 h-8 ${menuOpen ? "text-white" : textColor}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 z-[90] bg-[#2b6396] bg-opacity-95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6 overflow-hidden">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="text-white text-2xl font-semibold hover:text-orange-400 transition-colors"
              onClick={closeMenu}
            >
              {item.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </Link>
          ))}

          <Link
            href="/start"
            className="bg-secondary text-white rounded-full px-6 py-3 mt-6 text-center inline-block"
            onClick={closeMenu}
          >
            Start Your Growth
          </Link>
        </nav>
      </div>
    </header>
  );
}
