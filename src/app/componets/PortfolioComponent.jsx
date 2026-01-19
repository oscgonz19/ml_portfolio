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
      'End-to-end geohazard pipeline for mountain road corridors: Factor of Safety → IDW/Voronoi interpolation → INVÍAS/SGC hazard classes + GeoTIFF outputs and interactive Streamlit dashboard.',
    imageUrl: '/mockups/geoai-landslide.jpg',
    link: 'https://github.com/oscgonz19/road-corridor-landslide-hazard-engine',
    highlights: [
      'IDW and Voronoi-based spatial interpolation with robust IO and CRS validation.',
      'Encodes Hazard × Vulnerability × Exposure aligned with Colombian road standards.',
      'CLI + dashboard for engineers and planners to explore risk scenarios.',
    ],
    tags: ['GeoRisk', 'Landslides', 'Python', 'Streamlit'],
    category: 'GeoAI',
    featured: true,
  },
  {
    title: 'Vegetation Change Platform (Verdant)',
    description:
      'Multi-decadal vegetation change analysis using Landsat and Sentinel-2 on Google Earth Engine. Maps disturbance, recovery, and land cover transitions at scale.',
    imageUrl: '/mockups/geoai-flood.jpg',
    link: 'https://github.com/oscgonz19/vegetation-change-intelligence-platform',
    highlights: [
      'Cloud-masked, sensor-harmonized composites from Landsat 5/7/8 and Sentinel-2.',
      'Computes NDVI/NBR and change metrics (dNDVI, dNBR) for disturbance mapping.',
      'Interactive Streamlit UI to explore AOIs, time series and change classes.',
    ],
    tags: ['Remote Sensing', 'GEE', 'Change Detection'],
    category: 'GeoAI',
    featured: true,
  },
  {
    title: 'Vías Verdes: Corridor Cartography Engine',
    description:
      'Engineering-grade geospatial toolkit for linear infrastructure corridors. Automates chainage (K+format), projects features to corridor axis, and produces CAD-ready DXF, 300dpi cartographic maps.',
    imageUrl: '/mockups/geoai-corridor.jpg',
    link: 'https://github.com/oscgonz19/vias-verdes-corridor-cartography-engine',
    highlights: [
      'Chainage automation with K+format markers and perpendicular offsets.',
      'Multi-format exports: DXF layers for CAD, 300dpi PNG layouts, CSV summaries.',
      'Built from real corridor work, generalized into reproducible engine.',
    ],
    tags: ['Geospatial', 'GeoPandas', 'CAD', 'Civil Eng'],
    category: 'GeoAI',
    featured: true,
  },

  // =========================
  // SECURITY DATA SCIENCE
  // =========================
  {
    title: 'BSAD: Bayesian Security Anomaly Detection',
    description:
      'Portfolio-grade case study applying hierarchical Bayesian methods to rare-event anomaly detection in SOC environments. Includes problem framing, when to use/not use, and reproducible results.',
    imageUrl: '/dataviz.png',
    link: 'https://github.com/oscgonz19/bayesian-anomaly-detection',
    highlights: [
      'Hierarchical Bayes for rare-event anomalies with uncertainty quantification.',
      'SOC triage framing: prioritization, false positive reduction, alert fatigue.',
      'Complete notebooks with problem context, results, and operational guidance.',
    ],
    tags: ['Bayesian', 'Security', 'Anomaly Detection'],
    category: 'Security DS',
    featured: true,
  },
  {
    title: 'Bayesian Survival Analysis for SOC',
    description:
      'Time-to-incident risk modeling for security operations. Predicts incident likelihood over time horizons with calibrated uncertainty and budget allocation curves.',
    imageUrl: '/nube.jpg',
    link: 'https://github.com/oscgonz19/survival-analysis-security',
    highlights: [
      'Survival curves for time-to-incident with Bayesian credible intervals.',
      'Budget curves: resource allocation based on predicted risk windows.',
      'Operational framing: analyst workload, triage prioritization.',
    ],
    tags: ['Survival Analysis', 'Security', 'Bayesian'],
    category: 'Security DS',
    featured: true,
  },

  // =========================
  // ML ENGINEERING
  // =========================
  {
    title: 'Spark Text Similarity at Scale',
    description:
      'Scalable near-duplicate detection using shingling, MinHash and LSH on Spark DataFrames. Quantified precision/recall vs candidate generation cost.',
    imageUrl: '/MinHas.png',
    link: 'https://github.com/oscgonz19/spark-text-similarity',
    highlights: [
      'MinHash + LSH to avoid O(n²) comparisons at scale.',
      'Precision/recall trade-offs quantified against candidate cost.',
      'Docs in EN/ES, designed as reusable pattern for text streams.',
    ],
    tags: ['Spark', 'NLP', 'LSH', 'Scale'],
    category: 'ML Engineering',
    featured: true,
  },
  {
    title: 'Credit Bias Audit',
    description:
      'Responsible ML case study: fairness metrics, bias mitigation, and reproducible audit reports with model card and datasheet documentation.',
    imageUrl: '/CreditAudit.png',
    link: 'https://github.com/oscgonz19/credit-bias-audit',
    highlights: [
      'Fairness metrics: demographic parity, equalized odds, calibration.',
      'Mitigation techniques: preprocessing, in-processing, postprocessing.',
      'Model card + datasheet for transparent, reproducible reporting.',
    ],
    tags: ['Fairness', 'Responsible ML', 'Audit'],
    category: 'ML Engineering',
  },
  {
    title: 'Football Probabilities ML System',
    description:
      'Hybrid ML pipeline for match outcome probabilities. Poisson baseline with Dixon-Coles correction, ML fallback, and invariant validation.',
    imageUrl: 'https://raw.githubusercontent.com/oscgonz19/football-expected-goals-ml-pipeline/main/plots/03_team_strength.png',
    link: 'https://github.com/oscgonz19/football-expected-goals-ml-pipeline',
    highlights: [
      'Hybrid architecture: statistical baseline + ML enhancement.',
      'Optuna hyperparameter tuning with proper scoring rules.',
      'Executive summary + technical appendix documentation.',
    ],
    tags: ['ML Systems', 'Sports', 'Optuna'],
    category: 'ML Engineering',
  },
  {
    title: 'GRU4Rec Reproduction & Audit',
    description:
      'Research engineering: reproducible evaluation harness for session-based recommender systems. Proper baselines, full-ranking metrics, and storytelling visualizations.',
    imageUrl: '/GRU4Rec.png',
    link: 'https://github.com/oscgonz19/gru4rec-reproduction-and-audit',
    highlights: [
      'Clean train/validation/test splits for sequential recommendation.',
      'Full-ranking evaluation: MRR, Recall@K, NDCG with proper baselines.',
      'Reproducibility focus with visualization and analysis notebooks.',
    ],
    tags: ['RecSys', 'Deep Learning', 'Evaluation'],
    category: 'ML Engineering',
  },
];

const CATEGORIES = [
  'GeoAI',
  'Security DS',
  'ML Engineering',
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
