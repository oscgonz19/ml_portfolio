'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const CV_URL =
  'https://www.canva.com/design/DAGN2J0fx8I/G4VsXVOJivhV5m9JaULFbA/view';

const ARTICLES_URL =
  'https://www.linkedin.com/in/oscgonz19/recent-activity/articles/';

const navItems = [
  { label: 'GeoAI Work', href: '/projects/geoai', external: false },
  { label: 'All Projects', href: '/projects', external: false },
  { label: 'Articles', href: ARTICLES_URL, external: true },
  { label: 'CV', href: CV_URL, external: true },
  { label: 'Other Sites', href: '/other-sites', external: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 font-serif tracking-tight"
          onClick={closeMenu}
        >
          <span className="text-lg sm:text-xl font-bold">ozz.dev</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-widest text-white/50">
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/oscgonz19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="opacity-80 hover:opacity-100 transition"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/oscgonz19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="opacity-80 hover:opacity-100 transition"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white/90 hover:text-white transition focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-white/10 bg-black/95"
        >
          <div className="container mx-auto px-6 py-5">
            <ul className="flex flex-col gap-4 text-base">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="block text-white/80 hover:text-white transition"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block text-white/80 hover:text-white transition"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://github.com/oscgonz19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="opacity-80 hover:opacity-100 transition"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/oscgonz19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="opacity-80 hover:opacity-100 transition"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}