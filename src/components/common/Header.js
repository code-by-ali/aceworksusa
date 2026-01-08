"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const isHomePage = pathname === "/";
  const textColor = isHomePage ? "text-white" : "text-[#2b6396]";
  const hoverColor = isHomePage
    ? "hover:text-orange-400"
    : "hover:text-secondary";

  const navItems = [
    "about",
    "services",
    "blogs",
    "detailed-service",
    "contact",
  ];

  const serviceSubItems = [
    {
      label: "Social Media Marketing",
      href: "/social-media-marketing",
    },
    { label: "Search Engine Optimization", href: "/seo" },
    { label: "Pay-per-Click Ads", href: "/pay-per-click-ads" },
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
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
    <header
      className={`w-full font-bold p-4 relative z-[999] transition-colors duration-300 ${
        isHomePage ? "bg-transparent" : "bg-white"
      } !dark:bg-white`}
    >
      {/* ================= DESKTOP ================= */}
      <nav className="hidden lg:flex mx-auto px-4 justify-between items-center h-16 relative">
        {/* Logo */}
        <Link
          href="/"
          className={`${textColor} font-semibold text-lg md:text-xl lg:text-2xl no-underline`}
        >
          Aceworkusa
        </Link>

        {/* Nav Items */}
        <div className="flex items-center">
          {navItems.map((item) => {
            if (item === "detailed-service") {
              return (
                <div key={item} className="relative group ml-12">
                  <span
                    className={`${textColor} ${hoverColor} cursor-pointer no-underline transition-colors`}
                  >
                    Services Detailed
                  </span>

                  {/* Dropdown */}
                  <div className="absolute left-0 top-full mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-lg rounded-lg overflow-hidden">
                    {serviceSubItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-3 text-[#2b6396] hover:bg-gray-100 no-underline"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item}
                href={`/${item}`}
                className={`ml-12 ${
                  pathname === `/${item}` ? "text-orange-500" : textColor
                } ${hoverColor} no-underline transition-colors`}
              >
                {item
                  .replace("-", " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="bg-secondary text-white rounded-full px-6 py-3 z-50"
        >
          Start Your Growth
        </Link>
      </nav>

      {/* ================= TABLET ================= */}
      <div className="hidden md:block lg:hidden mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className={`${textColor} font-semibold text-lg md:text-xl no-underline`}
          >
            Aceworkusa
          </Link>
          <Link
            href="/contact"
            className="bg-secondary text-white rounded-full px-6 py-3"
          >
            Start Your Growth
          </Link>
        </div>

        <div className="flex justify-center items-center gap-8 py-4">
          {navItems.map((item) => {
            if (item === "detailed-service") {
              return (
                <div key={item} className="relative group">
                  <span
                    className={`${textColor} ${hoverColor} cursor-pointer text-sm`}
                  >
                    Services Detailed
                  </span>

                  <div className="absolute left-0 top-full mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-lg rounded-lg overflow-hidden">
                    {serviceSubItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-3 text-[#2b6396] hover:bg-gray-100 no-underline"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item}
                href={`/${item}`}
                className={`${
                  pathname === `/${item}` ? "text-secondary" : textColor
                } ${hoverColor} no-underline transition-colors text-sm`}
              >
                {item
                  .replace("-", " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <nav className="md:hidden mx-auto px-4 flex justify-between items-center h-16 relative">
        <Link
          href="/"
          className={`${textColor} font-semibold text-lg no-underline`}
        >
          Aceworkusa
        </Link>

        <button
          onClick={toggleMenu}
          className="z-[100] focus:outline-none relative"
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[90] bg-[#2b6396] bg-opacity-95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6 overflow-hidden">
          {navItems.map((item) => {
            if (item === "detailed-service") {
              return (
                <div key={item} className="text-center">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="text-white text-2xl font-semibold hover:text-secondary transition-colors"
                  >
                    Services Detailed
                  </button>

                  {servicesOpen && (
                    <div className="mt-4 space-y-4">
                      {serviceSubItems.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={closeMenu}
                          className="block text-lg text-white hover:text-secondary transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item}
                href={`/${item}`}
                className="text-white text-2xl font-semibold hover:text-secondary transition-colors"
                onClick={closeMenu}
              >
                {item
                  .replace("-", " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </Link>
            );
          })}

          <Link
            href="/contact"
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
