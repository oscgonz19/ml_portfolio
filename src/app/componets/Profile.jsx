'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

/**
 * ProfileSection – narrative "About Me" for Oscar
 */
export default function ProfileSection() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center bg-black text-gray-900 font-serif">
      {/* Left column: avatar */}
      <div className="w-full lg:w-1/2 flex justify-center p-6 lg:p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative group w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-gray-300 shadow-lg"
        >
          <Image
            src="/Profile13.png"
            alt="Oscar Antonio Gonzalez portrait"
            fill
            className="object-cover blur-sm transition duration-500 group-hover:blur-0"
          />
          {/* scanline overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_1px,transparent_1px,transparent_3px)] animate-scan" />
        </motion.div>
      </div>

    
      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 space-y-6 max-w-xl">
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-1">Oscar Antonio González</h1>
          <h2 className="text-2xl font-medium text-stone-400">Data Scientist specialized in automation, statistical modeling, and applied science.</h2>
        </div>
        <div>
          <h3 className="uppercase text-sm font-semibold tracking-wide text-stone-300 mb-2">Core Stack</h3>
          <ul className="grid grid-cols-2 gap-3 text-sm text-stone-300">
            <li>Python</li>
            <li>FastAPI</li>
            <li>LangChain</li>
            <li>PyMC</li>
            <li>Docker</li>
            <li>Airflow</li>
            <li>Snowflake</li>
            <li>React / Next.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
}