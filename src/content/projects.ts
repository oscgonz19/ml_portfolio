import type { Project } from '@/types'

export const PROJECTS: Project[] = [
  {
    slug: 'landslide-hazard-engine',
    title: 'Landslide Hazard Engine',
    description:
      'End-to-end pipeline predicting landslide susceptibility from terrain derivatives, rainfall signals, and land cover.',
    stack: ['Python', 'XGBoost', 'Rasterio', 'FastAPI', 'Streamlit'],
    github:
      'https://github.com/oscgonz19/road-corridor-landslide-hazard-engine',
    featured: true,
    caseStudy: {
      context:
        'Road infrastructure in mountainous terrain faces persistent landslide risk. Traditional hazard mapping relies on expert-drawn polygons — expensive, inconsistent, and not reproducible across regions or time.',
      problem:
        "No systematic, data-driven method to assess landslide susceptibility along road corridors at scale. Manual approaches couldn't be updated as terrain conditions, land cover, or rainfall patterns changed.",
      approach: [
        'Engineered 14 terrain features from 30m DEM: slope, curvature, TWI, roughness, TPI, aspect derivatives',
        'Integrated rainfall proxies, land cover classification, and geological unit boundaries',
        'Built spatial cross-validation to prevent geographic data leakage between train and test sets',
        'Trained XGBoost classifier on labeled landslide inventory with probability calibration',
        'Deployed risk tile API via FastAPI with interactive Streamlit dashboard',
      ],
      decisions: [
        'XGBoost over deep learning — interpretability matters when infrastructure teams need to justify spending decisions',
        'Spatial CV over random CV — standard k-fold leaks geographic autocorrelation and inflates metrics',
        'Tile-based output over pixel-based — aligns with how road maintenance teams actually plan interventions',
        'FastAPI serving layer — risk tiles accessible via API, not locked in a notebook',
      ],
      tradeoffs: [
        '30m DEM limits spatial resolution — acceptable for corridor-scale assessment, insufficient for site-specific geotechnical engineering',
        'Binary classification with probability output vs. multi-class severity — chose calibrated probabilities with flexible thresholds over rigid categories',
        'Excluded dynamic triggers (real-time rainfall) to keep the system static and reproducible for long-term planning use',
      ],
      outcome:
        'Ranked risk tiles for municipal infrastructure prioritization. Repeatable pipeline — new data in, updated risk map out. Designed for adoption, not a one-off analysis.',
    },
  },
  {
    slug: 'credit-bias-audit',
    title: 'Credit Bias Audit',
    description:
      'Fairness evaluation framework assessing demographic bias in credit scoring models across protected attributes.',
    stack: ['Python', 'Scikit-learn', 'Fairlearn', 'Pandas'],
    github: 'https://github.com/oscgonz19/credit-bias-audit',
    featured: true,
  },
  {
    slug: 'spark-text-similarity',
    title: 'Spark Text Similarity',
    description:
      'Distributed text similarity search using MinHash locality-sensitive hashing on Apache Spark.',
    stack: ['PySpark', 'MinHash', 'LSH', 'NLP'],
    github: 'https://github.com/oscgonz19/spark-text-similarity',
    featured: true,
  },
  {
    slug: 'vegetation-change-platform',
    title: 'Vegetation Change Platform',
    description:
      'Satellite-derived vegetation change detection using Google Earth Engine and multispectral time-series.',
    stack: ['Python', 'GEE', 'Remote Sensing', 'Xarray'],
    github:
      'https://github.com/oscgonz19/vegetation-change-intelligence-platform',
    featured: false,
  },
  {
    slug: 'bayesian-anomaly-detection',
    title: 'Bayesian Anomaly Detection',
    description:
      'Probabilistic anomaly detection for security operations using Bayesian inference and survival analysis.',
    stack: ['Python', 'PyMC', 'Bayesian Stats', 'Security'],
    github: 'https://github.com/oscgonz19/bayesian-anomaly-detection',
    featured: false,
  },
]

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured)
}
