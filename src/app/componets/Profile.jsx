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
    <section className="min-h-screen flex flex-col lg:flex-row items-center bg-white text-gray-900 font-serif">
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

      {/* Right column: narrative */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:p-12 space-y-8">
        <div>
          <p className="text-3xl font-semibold text-stone-800 mb-2">
            ⛏️ From the rocks to the code.
          </p>
          <div className="space-y-4 text-lg leading-relaxed text-stone-700">
            <p>
              Turn complex data into scalable AI systems that support real-time decision-making.
            </p>
            <p>
              Years through the Colombian Andes, mapping rock formations and reading the landscape. Today, Its the
              same mindset to explore data and build systems.
            </p>
            <p>
              My recent work includes sports betting analytics, editorial intelligence agents, and geospatial models.
            </p>
          </div>
        </div>

        <div>
          <h3 className="uppercase text-sm tracking-widest text-stone-600 mb-3">
            Core Stack
          </h3>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-stone-600">
            <li>Python · FastAPI · PyMC · LangChain</li>
            <li>Azure · AWS · Docker · CI/CD</li>
            <li>Postgres · Redis · Airflow · Spark</li>
            <li>Next.js · React.js · Ruby on Rails</li>
          </ul>
        </div>

        <div>
        </div>
      </div>
    </section>
  );
}