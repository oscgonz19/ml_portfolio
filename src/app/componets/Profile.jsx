'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const focusAreas = [
  'Terrain & LiDAR/DEM Intelligence',
  'Landslide / Flood Susceptibility',
  'Energy Site Suitability',
  'Geospatial MLOps',
];

const coreStack = [
  'Python',
  'GeoPandas',
  'Rasterio / Xarray',
  'PyTorch',
  'PostGIS',
  'FastAPI',
  'Docker',
  'Airflow / MLflow',
  'AWS / GCP',
  'QGIS',
  'React / Next.js',
  'LangChain',
];

export default function ProfileSection() {
  return (
    <section className="min-h-screen bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 lg:flex-row lg:px-10">
        {/* Left: avatar */}
        <div className="flex w-full justify-center lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="group relative h-72 w-72 overflow-hidden rounded-2xl border border-white/20 shadow-xl lg:h-80 lg:w-80"
          >
            <Image
              src="/Profile13.png"
              alt="Oscar Antonio González portrait"
              fill
              priority
              className="object-cover blur-[2px] transition duration-500 group-hover:blur-0"
            />
            {/* scanline overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08)_1px,transparent_1px,transparent_3px)] animate-scan" />
            {/* vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
          </motion.div>
        </div>

        {/* Right: text */}
        <div className="flex w-full max-w-xl flex-col gap-8 lg:w-1/2">
          <header className="space-y-2">
            <h1 className="font-display text-4xl tracking-tight lg:text-5xl">
              Oscar Antonio González
            </h1>
            <h2 className="font-geoai text-xl font-medium text-stone-300 lg:text-2xl">
              GeoAI / Geospatial ML Engineer
            </h2>
            <p className="text-sm text-stone-400 lg:text-base">
              I build machine learning systems for{' '}
              <span className="text-stone-100">risk intelligence</span>,{' '}
              <span className="text-stone-100">critical infrastructure</span> and{' '}
              <span className="text-stone-100">energy site optimization</span>,
              combining earth science expertise with production-grade AI.
            </p>
          </header>

          <section>
            <h3 className="font-geoai mb-3 text-xs font-medium uppercase tracking-[0.22em] text-stone-300">
              Focus areas
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-sm text-stone-300 sm:grid-cols-2">
              {focusAreas.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-geoai mb-3 text-xs font-medium uppercase tracking-[0.22em] text-stone-300">
              Core stack
            </h3>
            <ul className="font-mono grid grid-cols-2 gap-3 text-xs text-stone-300 sm:text-sm">
              {coreStack.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects/geoai"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-stone-200"
            >
              View GeoAI case studies <FaArrowRight />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:text-white"
            >
              Work with me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}