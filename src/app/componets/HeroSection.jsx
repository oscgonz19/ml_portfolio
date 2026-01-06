'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-black text-white antialiased">
      <Image
        src="/fondo2.jpg"
        alt="Background inspired by terrain, contours, and data"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover brightness-105 contrast-110 saturate-105"
        quality={90}
      />

      {/* Overlay for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

      {/* Subtle texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_45%)]" />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 sm:px-10 lg:px-12">
        <motion.div {...fadeUp} className="max-w-3xl space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
            <span className="font-geoai text-[10px] sm:text-xs font-medium uppercase tracking-[0.28em] text-white/80">
              Earth Observation • Geohazards • Climate Risk • Infrastructure
            </span>
          </div>

          {/* Name: DM Serif Display for authority */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.05] tracking-tight">
            <span className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent drop-shadow-sm">
              Óscar Antonio González
            </span>
          </h1>

          {/* Tagline: Space Grotesk for tech/infra vibe */}
          <p className="font-geoai text-base sm:text-xl lg:text-2xl leading-relaxed text-white/85">
            Geospatial ML Engineer — I build terrain risk models, satellite-derived
            analytics, and environmental ML systems designed for real-world decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Link
              href="/projects/geoai"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-stone-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore GeoAI work
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/0 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:border-white/50 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              About my approach
            </Link>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <a
              href="https://github.com/oscgonz19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="opacity-90 transition hover:opacity-100"
            >
              <FaGithub className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>

            <a
              href="https://linkedin.com/in/oscgonz19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="opacity-90 transition hover:opacity-100"
            >
              <FaLinkedin className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}