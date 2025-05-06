'use client';

import { 
  FaCloud, FaLanguage, FaRobot, FaMapMarkedAlt, FaRocket, FaChartBar, 
  FaGlobe, FaLaptopCode, FaCode, FaChess, FaCodepen, FaDatabase, FaBalanceScale 
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const areasOfInterest = [
  {
    title: 'Cloud Compute',
    description: 'Managing cloud servers for database storage, model training, and deploying models in production environments on Azure and AWS.',
    icon: <FaCloud className="mx-auto mb-4 h-12 w-12 text-indigo-600" />,
  },
  {
    title: 'AI',
    description: 'Collaborating with researchers to apply AI techniques in the financial sector to understand and model human interactions and decision-making processes.',
    icon: <FaLanguage className="mx-auto mb-4 h-12 w-12 text-green-600" />,
  },
  {
    title: 'Machine Learning Operations',
    description: 'MLOps involves more than just an API call to scikit-learn; it encompasses the mathematics, theory, and practical implementation involved in the process.',
    icon: <FaRobot className="mx-auto mb-4 h-12 w-12 text-red-600" />,
  },
  {
    title: 'Deep Learning',
    description: 'Developing and training deep learning models, leveraging advanced frameworks and distributed computing resources.',
    icon: <FaCodepen className="mx-auto mb-4 h-12 w-12 text-purple-600" />,
  },
  {
    title: 'Data Pipeline Automation',
    description: 'Designing and implementing ETL pipelines to process and transform data efficiently for analytics and machine learning models.',
    icon: <FaDatabase className="mx-auto mb-4 h-12 w-12 text-yellow-600" />,
  },
  {
    title: 'Market Intelligence',
    description: 'Analyzing financial data and developing predictive models to support decision-making in the financial sector, enhancing efficiency and mitigating risks.',
    icon: <FaChartBar className="mx-auto mb-4 h-12 w-12 text-blue-600" />,
  },
  {
    title: 'Game Theory',
    description: 'Applying game theory to model and analyze strategic interactions in system optimization and decision-making.',
    icon: <FaChess className="mx-auto mb-4 h-12 w-12 text-orange-600" />,
  },
  {
    title: 'Data Science',
    description: 'Extracting valuable insights from complex data sets through advanced statistical analysis and modeling techniques.',
    icon: <FaLaptopCode className="mx-auto mb-4 h-12 w-12 text-pink-600" />,
  },
  {
    title: 'Software Development',
    description: 'Developing and maintaining software applications, ensuring functionality, performance, and scalability.',
    icon: <FaCode className="mx-auto mb-4 h-12 w-12 text-teal-600" />,
  },
  {
    title: 'Geospatial Analysis',
    description: 'Applying data science and machine learning techniques to analyze and interpret geospatial data for geological studies.',
    icon: <FaMapMarkedAlt className="mx-auto mb-4 h-12 w-12 text-emerald-600" />,
  },
  {
    title: 'LLM Applications',
    description: 'Utilizing large language models (LLMs) to process and analyze reports, enhancing decision-making.',
    icon: <FaGlobe className="mx-auto mb-4 h-12 w-12 text-gray-600" />,
  },
  {
    title: 'Data Ethics and Governance',
    description: 'Ensuring responsible use of data through ethical practices and robust governance frameworks to protect privacy and integrity.',
    icon: <FaBalanceScale className="mx-auto mb-4 h-12 w-12 text-violet-600" />,
  },
];

export default function AreasOfInterest() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Focus Areas
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {areasOfInterest.map((area, index) => (
            <motion.div 
              key={index} 
              className="text-center p-10 border border-gray-200 rounded-lg shadow-2xl bg-white transform transition hover:scale-105"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {area.icon}
              <h3 className="text-gray-800 text-2xl font-bold mb-3">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}