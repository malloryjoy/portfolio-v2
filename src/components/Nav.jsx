import React, { useState } from "react";
import "/src/index.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#welcome", label: "Home" },
    { href: "#aboutme", label: "About" },
    { href: "#expertise", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
    { href: "/ux-portfolio.html", label: "UX Portfolio" },
  ];

  return (
    <nav className="pt-6 fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex justify-center items-center">
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-center flex-nowrap space-x-6 sm:space-x-1 overflow-x-auto">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="navItem whitespace-nowrap"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button (centered) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col items-center space-y-1.5 w-14 h-12 focus:outline-none"
        >
          <span
            className={`h-1 w-10 bg-black rounded transition-transform duration-300 origin-center ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-1 w-10 bg-black rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-1 w-10 bg-black rounded transition-transform duration-300 origin-center ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden bg-baby-pink px-4 pb-4 space-y-2 text-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="navItem whitespace-nowrap"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
