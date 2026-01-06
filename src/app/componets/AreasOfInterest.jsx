'use client';

import { motion } from 'framer-motion';
import {
  FaCloud,
  FaRobot,
  FaSatellite,
  FaDatabase,
  FaChartBar,
  FaLaptopCode,
  FaChartLine,
  FaChess,
  FaLeaf,
} from 'react-icons/fa';

const focusAreas = [
  {
    title: 'Earth Observation & Remote Sensing',
    subtitle: 'Sentinel-2, Landsat, drone imagery — from raw pixels to decision-ready features',
    Icon: FaSatellite,
  },
  {
    title: 'Geohazard Risk Intelligence',
    subtitle: 'Landslide susceptibility, flood risk, terrain instability — ranked and actionable',
    Icon: FaChartBar,
  },
  {
    title: 'Energy & Site Suitability',
    subtitle: 'Solar/wind site ranking with terrain, climate, and infrastructure constraints',
    Icon: FaRobot,
  },
  {
    title: 'Reproducible ML Pipelines',
    subtitle: 'MLflow, DVC, Docker — from notebooks to production-grade workflows',
    Icon: FaDatabase,
  },
  {
    title: 'Cloud & Scalable Processing',
    subtitle: 'AWS/GCP batch workflows, distributed raster processing, deployable APIs',
    Icon: FaCloud,
  },
  {
    title: 'Production Systems',
    subtitle: 'FastAPI endpoints, validation layers, CI/CD — systems built for handoff',
    Icon: FaLaptopCode,
  },
  {
    title: 'Statistics',
    subtitle: 'Inference, uncertainty quantification, probabilistic modeling, experimental design',
    Icon: FaChartLine,
  },
  {
    title: 'Decision Science',
    subtitle: 'Multi-criteria analysis, stakeholder trade-offs, explainable model outputs',
    Icon: FaChess,
  },
  {
    title: 'Climate & Environmental Risk',
    subtitle: 'Climate hazard modeling, environmental monitoring, sustainability analytics',
    Icon: FaLeaf,
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
          Focus
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map(({ title, subtitle, Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl transition
                         hover:border-white/25 hover:bg-white/10 text-center"
            >
              <Icon className="mb-5 h-9 w-9 mx-auto text-white/80 transition group-hover:text-white" />
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