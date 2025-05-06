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
    <section className="min-h-screen flex  text-black font-serif">
      {/* Left column: avatar */}
      <div className="relative w-1/2 flex flex-col items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative group"
        >
          <div className="overflow-hidden rounded-2xl border border-gray-700">
            <Image
              src="/Profile12.png"
              alt="Oscar Antonio Gonzalez portrait"
              width={380}
              height={380}
              className="rounded-2xl object-cover transition duration-500 blur-sm group-hover:blur-0"
            />
            {/* scanline overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.12),rgba(255,255,255,0.12)_1px,transparent_1px,transparent_3px)] animate-scan" />
          </div>
        </motion.div>
      </div>

      {/* Right column: narrative about me */}
      <div className="w-1/2 flex items-center justify-center px-12 lg:px-20">
        <div className="max-w-xl space-y-6 text-base leading-relaxed">
          <p className="text-lg font-medium font-serif">
            ⛏️ From the rocks to the code
          </p>

          <p className="opacity-90">
            Help teams turn complex, unstructured data into scalable AI systems that support real-time decision-making 
          </p>
          <p className="opacity-90">
           I used to mapping mountains and ancient strata across the Colombian Andes. That same curiosity led me to data, machine learning, and modeling complex systems.
          </p>

          <p className="opacity-90">
            My recent work include sports betting
            analytics, editorial intelligence agents, and geospatial risk models 
          </p>


          <div>
            <h3 className="uppercase text-md tracking-wide text-purple-500 mb-2">Core stack</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm opacity-80 list-disc list-inside">
              <li>Python · FastAPI · PyMC · LangChain</li>
              <li>Azure · AWS · Docker · CI/CD</li>
              <li>Postgres · Redis · Airflow · Spark</li>
              <li>Next.js · React · Ruby on Rails</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
