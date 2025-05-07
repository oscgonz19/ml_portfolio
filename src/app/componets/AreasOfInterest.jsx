'use client';

import {
  FaCloud, FaLanguage, FaRobot, FaMapMarkedAlt, FaRocket, FaChartBar,
  FaLink, FaLaptopCode, FaCode, FaChess, FaCodepen, FaDatabase, FaBalanceScale
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const areasOfInterest = [
  { title: 'Cloud Compute', icon: <FaCloud className="mx-auto mb-4 h-12 w-12 text-indigo-600" /> },
  { title: 'AI', icon: <FaLanguage className="mx-auto mb-4 h-12 w-12 text-green-600" /> },
  { title: 'Machine Learning Ops', icon: <FaRobot className="mx-auto mb-4 h-12 w-12 text-red-600" /> },
  { title: 'Deep Learning', icon: <FaCodepen className="mx-auto mb-4 h-12 w-12 text-purple-600" /> },
  { title: 'Data Pipelines', icon: <FaDatabase className="mx-auto mb-4 h-12 w-12 text-yellow-600" /> },
  { title: 'Statistics', icon: <FaChartBar className="mx-auto mb-4 h-12 w-12 text-blue-600" /> },
  { title: 'Game Theory', icon: <FaChess className="mx-auto mb-4 h-12 w-12 text-orange-600" /> },
  { title: 'Data Science', icon: <FaLaptopCode className="mx-auto mb-4 h-12 w-12 text-pink-600" /> },
  { title: 'Software Dev', icon: <FaCode className="mx-auto mb-4 h-12 w-12 text-teal-600" /> },
  { title: 'Geospatial Analysis', icon: <FaMapMarkedAlt className="mx-auto mb-4 h-12 w-12 text-emerald-600" /> },
  { title: 'LangChain', icon: <FaLink className="mx-auto mb-4 h-12 w-12 text-gray-600" /> },
  { title: 'Data Ethics', icon: <FaBalanceScale className="mx-auto mb-4 h-12 w-12 text-violet-600" /> },
];

export default function AreasOfInterest() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-serif mb-8 text-center text-gray-900"
        >
          Focus Areas
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {areasOfInterest.map((area, index) => (
            <motion.div
              key={index}
              className="text-center p-10 border border-gray-200 rounded-lg shadow-2xl bg-white transform transition hover:scale-105 font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {area.icon}
              <h3 className="text-gray-800 text-2xl font-semibold">{area.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
