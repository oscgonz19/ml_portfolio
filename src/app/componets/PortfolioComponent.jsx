'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  // =========================
  // GEOAI (FLAGSHIP)
  // =========================
  {
    title: 'Road Corridor Landslide Hazard Engine',
    description:
      'End-to-end geohazard pipeline for a mountain road corridor: Factor of Safety points → IDW/Voronoi interpolation → INVÍAS-compliant hazard maps and an interactive Streamlit dashboard.',
    imageUrl: '/mockups/geoai-landslide.jpg',
    link: 'https://github.com/oscgonz19/road-corridor-landslide-hazard-engine',
    highlights: [
      'Implements IDW and Voronoi-based spatial interpolation with robust IO and CRS validation.',
      'Encodes Hazard × Vulnerability × Exposure concepts aligned with Colombian road standards.',
      'Ships with a CLI and dashboard for engineers and planners to explore risk scenarios.',
    ],
    tags: ['GeoAI', 'Landslides', 'Risk', 'Python', 'Streamlit'],
    category: 'GeoAI',
    featured: true,
  },
  {
    title: 'Vegetation Change Intelligence Platform',
    description:
      'Remote sensing platform for 30+ years of vegetation change analysis using Landsat and Sentinel-2 on Google Earth Engine.',
    imageUrl: '/mockups/geoai-flood.jpg',
    link: 'https://github.com/oscgonz19/vegetation-change-intelligence-platform',
    highlights: [
      'Builds cloud-masked, sensor-harmonized composites from Landsat 5/7/8 and Sentinel-2.',
      'Computes NDVI/NBR and change metrics (dNDVI, dNBR) to map disturbance and recovery.',
      'Exposes an interactive Streamlit UI to explore AOIs, time series and change classes.',
    ],
    tags: ['Remote Sensing', 'GEE', 'Change Detection', 'Environment'],
    category: 'GeoAI',
    featured: true,
  },
  {
    title: 'Vías Verdes: Corridor Cartography Engine',
    description:
      'Engineering-grade geospatial engine for linear infrastructure corridors. Automates chainage (K+format) along the axis, projects features to the corridor, and produces CAD-ready DXF, 300dpi cartographic maps and summary tables using MAGNA-SIRGAS standards.',
    imageUrl: '/mockups/geoai-corridor.jpg',
    link: 'https://github.com/oscgonz19/vias-verdes-corridor-cartography-engine',
    highlights: [
      'Chainage automation with K+format markers and perpendicular offsets for sources, disposal sites and geotechnical points.',
      'Multi-format exports: DXF layers for CAD workflows, 300dpi PNG map layouts, and CSV summaries.',
      'Designed from real corridor work and generalized into a reproducible engine for linear infrastructure.',
    ],
    tags: ['GeoAI', 'Geospatial', 'GeoPandas', 'CAD', 'Civil Engineering'],
    category: 'GeoAI',
    featured: true,
  },

  // =========================
  // MLOPS & DATA ENGINEERING
  // =========================
  {
    title: 'Football Match Probabilities ML Pipeline',
    description:
      'End-to-end ML pipeline for football match outcome probabilities using Poisson and Dixon-Coles models with Optuna-based hyperparameter tuning.',
    imageUrl: 'https://raw.githubusercontent.com/oscgonz19/football-expected-goals-ml-pipeline/main/plots/03_team_strength.png',
    link: 'https://github.com/oscgonz19/football-expected-goals-ml-pipeline',
    highlights: [
      'Cleans, validates and engineers temporal decay features from real match data.',
      'Optimizes Dixon-Coles models with Optuna and evaluates with proper scoring rules.',
      'Production-style architecture with clear entrypoints and demo runs.',
    ],
    tags: ['MLOps', 'Sports Analytics', 'Optuna', 'Python'],
    category: 'MLOps & Data Engineering',
    featured: true,
  },
  {
    title: 'Large-Scale Text Similarity with Spark',
    description:
      'Scalable near-duplicate detection pipeline using shingling, MinHash and LSH on Spark DataFrames.',
    imageUrl: '/MinHas.png',
    link: 'https://github.com/oscgonz19/spark-text-similarity',
    highlights: [
      'Implements locality-sensitive hashing to avoid O(n²) comparisons.',
      'Designed as a reusable pattern for high-volume text streams.',
    ],
    tags: ['Spark', 'LSH', 'Scalability'],
    category: 'MLOps & Data Engineering',
  },
  {
    title: 'GRU4Rec Reproduction & Evaluation Harness',
    description:
      'Reproducible evaluation framework for session-based recommender systems using GRU4Rec.',
    imageUrl: '/GRU4Rec.png',
    link: 'https://github.com/oscgonz19/gru4rec-reproduction-and-audit',
    highlights: [
      'Implements clean train/validation/test splits for sequential recommendation.',
      'Focuses on reproducibility, proper baselines and robust metrics (MRR, Recall@K, NDCG).',
    ],
    tags: ['Recommender Systems', 'Deep Learning', 'Evaluation'],
    category: 'MLOps & Data Engineering',
  },
  {
    title: 'ML Metrics That Matter',
    description:
      'A practical guide to choosing the right evaluation metrics in machine learning, connecting technical decisions with real-world performance and business impact.',
    imageUrl: '/mlmetrics.png',
    link: 'https://github.com/oscgonz19/ml-metrics-that-matter',
    highlights: [
      'Explores when accuracy, F1, ROC-AUC, PR curves and calibration actually make sense.',
      'Frames metrics around decision-making: cost, risk, uncertainty and stakeholder needs.',
      'Designed as a reference for practitioners building trustworthy ML systems.',
    ],
    tags: ['Evaluation', 'Metrics', 'ML Engineering'],
    category: 'MLOps & Data Engineering',
  },

  // =========================
  // APPLIED AI (LLMs / Responsible AI)
  // =========================
  {
    title: 'Survival Analysis & Time-to-Event Modeling',
    description:
      'Hands-on survival analysis study using R to model time-to-event processes, interpret hazard functions, and understand risk dynamics over time.',
    imageUrl: '/mockups/survival-analysis.jpg',
    link: 'https://github.com/oscgonz19/biostatistics-survival-r-study',
    highlights: [
      'Implements core survival techniques: Kaplan-Meier, Cox proportional hazards and hazard estimation.',
      'Focuses on interpreting uncertainty, risk evolution and event likelihood through time.',
      'Demonstrates statistical rigor that translates to risk, health, infrastructure and climate contexts.',
    ],
    tags: ['Statistics', 'Survival Analysis', 'R'],
    category: 'Applied AI',
  },
  {
    title: 'Bias & Fairness Analysis with AIF360 (COMPAS)',
    description:
      'Responsible ML case study exploring bias and fairness trade-offs on the COMPAS dataset with AIF360.',
    imageUrl: '/CreditAudit.png',
    link: 'https://github.com/oscgonz19/fair_scoring_AIF360',
    highlights: [
      'Applies preprocessing and postprocessing debiasing techniques.',
      'Visualizes fairness metrics and model performance side by side.',
    ],
    tags: ['Fairness', 'AIF360', 'Responsible AI'],
    category: 'Applied AI',
  },
  {
    title: 'PsyCannaFinance – News & Signal Pipeline',
    description:
      'LLM-assisted news intelligence and market signal tracking for cannabis and psychedelics sectors.',
    imageUrl: '/mockups/news-pipeline.jpg',
    link: 'https://github.com/oscgonz19/PsyCannaFinance',
    highlights: [
      'Combines scraping, NLP and lightweight signal extraction.',
      'Built to support editorial and research workflows.',
    ],
    tags: ['NLP', 'LLM', 'Pipelines'],
    category: 'Applied AI',
  },
  {
    title: 'Automated Financial Analysis with LLM + RAG',
    description:
      'Prototype RAG pipeline for automating analysis of 10-K and 10-Q filings with structured, queryable summaries.',
    imageUrl: '/financialAnalisis.jpg',
    link: 'https://github.com/oscgonz19/Automated-Financial-Analysis-LLM-RAG',
    highlights: [
      'Scrapes and preprocesses SEC filings for downstream LLM analysis.',
      'Uses retrieval-augmented generation to surface key financial signals.',
    ],
    tags: ['LLM', 'RAG', 'Finance'],
    category: 'Applied AI',
  },

  // =========================
  // PRODUCT & WEB
  // =========================
  {
    title: 'ML Portfolio – Next.js + Tailwind',
    description:
      'This portfolio: a clean, filterable interface to present ML and GeoAI case studies.',
    imageUrl: '/wallpaperwebMLgithub.jpg',
    link: 'https://github.com/oscgonz19/ML_portfolio',
    highlights: [
      'Next.js + Tailwind + Framer Motion.',
      'Designed for storytelling around end-to-end ML projects.',
    ],
    tags: ['Next.js', 'Tailwind', 'Frontend'],
    category: 'Product & Web',
  },
];

const CATEGORIES = [
  'GeoAI',
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
    'GeoAI'
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