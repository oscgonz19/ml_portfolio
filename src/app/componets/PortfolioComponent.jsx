'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  // =========================
  // GEOAI & RISK INTELLIGENCE (FLAGSHIPS)
  // =========================
  {
    title: 'Landslide Susceptibility Engine (DEM + Rain + LULC)',
    description:
      'End-to-end GeoAI pipeline to predict landslide susceptibility using terrain derivatives, rainfall signals and land cover. Designed for corridor-level decision-making.',
    imageUrl: '/mockups/geoai-landslide.jpg',
    link: 'https://github.com/oscgonz19',
    highlights: [
      'Feature engineering from DEM (slope, curvature, TWI, roughness).',
      'Train/validate with interpretable ML baselines + optional deep models.',
      'Deployable outputs: risk tiles + interactive map + FastAPI endpoint.',
    ],
    tags: ['GeoAI', 'DEM', 'Risk', 'Python'],
    category: 'GeoAI & Risk Intelligence',
    featured: true,
  },
  {
    title: 'Flood Risk & Rapid Assessment Toolkit',
    description:
      'Lightweight flood susceptibility + rapid post-event analysis combining terrain, hydromet proxies and exposure layers for prioritizing interventions.',
    imageUrl: '/mockups/geoai-flood.jpg',
    link: 'https://github.com/oscgonz19',
    highlights: [
      'Watershed-aware preprocessing and scalable raster workflows.',
      'Produces ranked risk hotspots and exposure summaries.',
      'Designed to be adapted to different regions with open data.',
    ],
    tags: ['GeoAI', 'Hydrology', 'Raster', 'Xarray'],
    category: 'GeoAI & Risk Intelligence',
    featured: true,
  },
  {
    title: 'Terrain Change Detection (LiDAR / DEM)',
    description:
      'Detects terrain changes and potential instability zones using multi-temporal DEM/LiDAR data with automated QC and uncertainty-aware outputs.',
    imageUrl: '/mockups/geoai-lidar.jpg',
    link: 'https://github.com/oscgonz19',
    highlights: [
      'Multi-temporal differencing + denoising + anomaly detection.',
      'Generates engineering-friendly reports and map layers.',
      'Strong fit for critical infrastructure monitoring.',
    ],
    tags: ['LiDAR', 'DEM', 'Change Detection', 'Infra'],
    category: 'GeoAI & Risk Intelligence',
    featured: true,
  },

  // =========================
  // ENERGY & SITE INTELLIGENCE (FLAGSHIP)
  // =========================
  {
    title: 'Renewable Site Suitability Optimizer',
    description:
      'Geospatial ML framework to rank solar/wind sites using terrain, climate proxies, grid/access constraints and environmental exclusions.',
    imageUrl: '/mockups/geoai-energy.jpg',
    link: 'https://github.com/oscgonz19',
    highlights: [
      'Multi-criteria + ML hybrid scoring.',
      'Produces explainable suitability maps and ranked candidates.',
      'Designed for rapid feasibility screening.',
    ],
    tags: ['Energy', 'Site Selection', 'GeoML', 'Infra'],
    category: 'Energy & Site Intelligence',
    featured: true,
  },

  // =========================
  // MLOPS & DATA ENGINEERING
  // =========================
  {
    title: 'GeoAI MLOps Template (Rasters → Model → API)',
    description:
      'Production-ready starter kit for geospatial ML: dataset versioning, training pipelines, experiment tracking and deployable services.',
    imageUrl: '/mockups/geoai-mlops.jpg',
    link: 'https://github.com/oscgonz19',
    highlights: [
      'Dockerized training + inference.',
      'MLflow tracking and reproducible experiments.',
      'Ready to plug into cloud batch workflows.',
    ],
    tags: ['MLOps', 'MLflow', 'Docker', 'FastAPI'],
    category: 'MLOps & Data Engineering',
    featured: true,
  },
  {
    title: 'Real-time Data Processing with Kafka and Spark',
    description:
      'Demonstrates real-time processing patterns and streaming analytics, adaptable to sensor or infra telemetry use cases.',
    imageUrl: '/kafka.jpg',
    link: 'https://github.com/oscgonz19',
    highlights: [
      'Streaming architecture patterns.',
      'Scalable ML-friendly pipelines.',
    ],
    tags: ['Kafka', 'Spark', 'Streaming'],
    category: 'MLOps & Data Engineering',
  },

  // =========================
  // APPLIED AI (LLMs / Responsible AI)
  // =========================
  {
    title: 'Automated Financial Analysis using LLM and RAG',
    description:
      'LLM + RAG system to streamline analysis of 10-K and 10-Q filings with structured summaries and queryable knowledge.',
    imageUrl: '/financialAnalisis.jpg',
    link: 'https://github.com/oscgonz19/Automated-Financial-Analysis-LLM-RAG',
    highlights: [
      'Retrieval pipelines for long-form documents.',
      'Structured, auditable summaries.',
    ],
    tags: ['LLM', 'RAG', 'Finance'],
    category: 'Applied AI',
  },
  {
    title: 'COMPAS: Exploring Bias in Criminal Profiling Management',
    description:
      'Bias analysis and responsible ML exploration with clear visualization of fairness trade-offs.',
    imageUrl: '/compas.jpg',
    link: 'https://github.com/oscgonz19/fair_scoring_AIF360/blob/main/compass_bias_%26_fairness.ipynb',
    highlights: [
      'Fairness diagnostics.',
      'Transparent preprocessing choices.',
    ],
    tags: ['Fairness', 'AIF360', 'Responsible AI'],
    category: 'Applied AI',
  },

  // =========================
  // PRODUCT & WEB
  // =========================
  {
    title: 'ML Portfolio built with Next.js and Tailwind CSS',
    description:
      'Portfolio framework to present ML and GeoAI case studies with a clean, filterable UX.',
    imageUrl: '/wallpaperwebMLgithub.jpg',
    link: 'https://github.com/oscgonz19/ML_portfolio',
    highlights: [
      'Fast, clean project navigation.',
      'Built for case-study storytelling.',
    ],
    tags: ['Next.js', 'Tailwind', 'Frontend'],
    category: 'Product & Web',
  },
];

const CATEGORIES = [
  'GeoAI & Risk Intelligence',
  'Energy & Site Intelligence',
  'MLOps & Data Engineering',
  'Applied AI',
  'Product & Web',
];

function ProjectCard({ project }) {
  const isExternal = project.link.startsWith('http');

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl transition hover:border-white/25 hover:bg-white/10 flex flex-col h-full">
      <div className="relative w-full h-44 mb-4 overflow-hidden rounded-xl">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
        {project.featured && (
          <div className="absolute top-3 left-3 rounded-full bg-white/90 text-black text-[10px] px-2 py-1 font-semibold tracking-wide">
            FLAGSHIP
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-stone-300 mb-4">
          {project.description}
        </p>

        <ul className="list-disc list-inside mb-4 text-stone-300 text-sm space-y-1">
          {project.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-white/10 text-stone-200 px-2 py-1 rounded-full text-[10px] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {isExternal ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 font-semibold hover:underline text-sm"
            >
              Learn more →
            </a>
          ) : (
            <Link
              href={project.link}
              className="text-orange-400 font-semibold hover:underline text-sm"
            >
              Learn more →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioComponent() {
  const [selectedCategory, setSelectedCategory] = useState(
    'GeoAI & Risk Intelligence'
  );

  const filteredProjects = useMemo(
    () => projects.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <section className="bg-black text-gray-200 py-14">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif mb-8 text-center text-white">
          Projects
        </h1>

        <div className="flex justify-center items-center mb-10 flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition border ${
                selectedCategory === category
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-white/80 border-white/20 hover:border-white/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}