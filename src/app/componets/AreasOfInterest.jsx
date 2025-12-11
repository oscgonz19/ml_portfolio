'use client';

import { motion } from 'framer-motion';
import {
  FaCloud,
  FaRobot,
  FaMapMarkedAlt,
  FaDatabase,
  FaChartBar,
  FaLaptopCode,
} from 'react-icons/fa';

const focusAreas = [
  {
    title: 'Geospatial ML & GeoAI',
    subtitle: 'Remote sensing, terrain intelligence, spatial modeling',
    Icon: FaMapMarkedAlt,
  },
  {
    title: 'Risk & Critical Infrastructure',
    subtitle: 'Landslides, floods, corridor-level risk analytics',
    Icon: FaChartBar,
  },
  {
    title: 'Energy & Site Suitability',
    subtitle: 'Solar/wind optimization with geospatial features',
    Icon: FaRobot,
  },
  {
    title: 'MLOps & Data Pipelines',
    subtitle: 'Reproducible training, orchestration, monitoring',
    Icon: FaDatabase,
  },
  {
    title: 'Cloud for Geospatial Scale',
    subtitle: 'Distributed processing and deployable services',
    Icon: FaCloud,
  },
  {
    title: 'Applied Software Engineering',
    subtitle: 'APIs, tools, and product-ready AI systems',
    Icon: FaLaptopCode,
  },
];

export default function AreasOfInterest() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-bold font-serif mb-10 text-center text-white"
        >
          GeoAI Focus
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map(({ title, subtitle, Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl transition
                         hover:border-white/25 hover:bg-white/10"
            >
              <Icon className="mb-5 h-9 w-9 text-white/80 transition group-hover:text-white" />
              <h3 className="text-lg sm:text-xl font-semibold text-stone-100">
                {title}
              </h3>
              <p className="mt-2 text-sm text-stone-400">
                {subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}