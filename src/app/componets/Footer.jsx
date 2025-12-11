import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaEnvelope,
} from "react-icons/fa";

const CV_URL =
  "https://www.canva.com/design/DAGN2J0fx8I/G4VsXVOJivhV5m9JaULFbA/view";

const ARTICLES_URL =
  "https://www.linkedin.com/in/oscgonz19/recent-activity/articles/";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand + tagline */}
          <div className="text-center md:text-left">
            <div className="font-serif text-xl font-bold tracking-tight">
              ozz.dev
            </div>
            <p className="mt-1 text-xs uppercase tracking-widest text-white/50">
              GeoAI • Risk • Energy • Critical Infrastructure
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/projects/geoai"
              className="text-white/70 hover:text-white transition"
            >
              GeoAI Work
            </Link>
            <Link
              href="/projects"
              className="text-white/70 hover:text-white transition"
            >
              Projects
            </Link>
            <a
              href={ARTICLES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition"
            >
              Articles
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition"
            >
              CV
            </a>
            <Link
              href="/contact"
              className="text-white/70 hover:text-white transition"
            >
              Contact
            </Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/oscgonz19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/60 hover:text-white transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/oscgonz19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/60 hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={ARTICLES_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium or Articles"
              className="text-white/60 hover:text-white transition"
            >
              <FaMedium size={20} />
            </a>
            <a
              href="mailto:oscgonz19@gmail.com"
              aria-label="Email"
              className="text-white/60 hover:text-white transition"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>
            © {year} Óscar Antonio González. All rights reserved.
          </p>
          <p className="text-center">
            Built for global GeoAI roles and applied risk & energy systems.
          </p>
        </div>
      </div>
    </footer>
  );
}