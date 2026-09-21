import type { Project } from '@/types'

/**
 * Projects are ordered by weight: the first entries are the ones a visitor
 * should see first. `featured` projects get a full story page.
 *
 * Every project answers a question about a place. Technology is listed last
 * on purpose — it supports the story, it is not the story.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'pijao-mountain-road-hazard',
    title: 'Where will the mountain road fail next?',
    summary:
      'Geological, hydrogeological and geotechnical hazard assessment for a mountain road corridor in Pijao, Quindío — from outcrops and Factor of Safety to a hazard zonation map and an interactive dashboard.',
    year: '2025',
    threads: ['earth', 'field', 'data', 'cartography'],
    place: {
      name: 'Pijao, Quindío · Cordillera Central',
      coords: [-75.704, 4.335],
      label: '4°20′N 75°42′W',
      zoom: 10,
    },
    featured: true,
    cover: {
      src: '/work/quindio/geologia-regional.jpg',
      alt: 'Regional geological map of Quindío showing formations, complexes, intrusive bodies and faults',
      caption:
        'Regional geology of Quindío, redrawn from SGC Plancha 224: Cajamarca and Quebradagrande complexes, Armenia Formation, and the Silvia–Pijao and Cauca–Almaguer fault systems. 1:100 000.',
      ratio: 1.414,
      kind: 'map',
    },
    figures: [
      {
        src: '/work/quindio/pijao-dashboard.jpg',
        alt: 'Screenshot of the Pijao landslide hazard dashboard with INVÍAS classification legend',
        caption:
          'The hazard dashboard: Factor of Safety interpolated by IDW, zoned with Voronoi tessellation, classified with INVÍAS/SGC thresholds. Data anonymized.',
        ratio: 2.094,
        kind: 'screen',
      },
    ],
    story: {
      question:
        'A single rural road connects isolated mountain communities to markets and services. Slopes exceed 50 %, volcanic soils are deeply weathered, and rainfall passes 2 500 mm a year. Which stretches are most likely to fail, and where should limited stabilization money go first?',
      place:
        'A road corridor in the municipality of Pijao, on the western flank of the Cordillera Central. Metamorphic basement of the Cajamarca Complex, Cretaceous volcano-sedimentary sequences of Quebradagrande, and Plio-Pleistocene volcanic deposits — all of it cut by regional faults and dissected by steep drainages.',
      data: [
        'Field reconnaissance: outcrop logs, weathering profiles, GPS waypoints, photographic records of springs, seeps and existing failures',
        'Geotechnical parameters at critical points for limit-equilibrium stability analysis',
        '12.5 m DEM for slope, aspect and drainage; regional geological and hydrogeological cartography (SGC)',
        'Landsat 5/7/8 and Sentinel-2 archive, 1990–2024, for 24 monitoring points along the corridor',
      ],
      method: [
        'Characterize lithological and hydrogeological units; build a conceptual groundwater model (recharge, transit, discharge)',
        'Compute Factor of Safety at critical points with infinite-slope and limit-equilibrium methods',
        'Interpolate the continuous FS surface first (IDW), then reclassify into INVÍAS/SGC hazard classes — more defensible than interpolating categories',
        'Zone the corridor buffer with Voronoi tessellation, using phantom boundary points for complete coverage',
        'Track NDVI and NBR over three decades to detect vegetation loss that betrays slope instability',
        'Combine hazard with an inventory of exposed elements (drainage structures, retaining walls) into a risk prioritization',
      ],
      result:
        'A hazard zonation map and a ranked list of intervention points, delivered as technical reports plus an interactive dashboard that engineers and planners can use to explore scenarios. The pipeline behind it was generalized and published as an open-source tool for other corridors.',
    },
    technology: [
      'Field geology',
      'QGIS',
      'Python',
      'GeoPandas',
      'Rasterio',
      'Google Earth Engine',
      'Streamlit',
    ],
    links: [
      {
        label: 'Interactive dashboard (source)',
        href: 'https://github.com/oscgonz19/mountain-road-hazard-dashboard',
      },
      {
        label: 'Hazard pipeline (IDW + Voronoi)',
        href: 'https://github.com/oscgonz19/landslide-hazard-pipeline',
      },
    ],
  },
  {
    slug: 'vias-verdes-corridor-geology',
    title: 'Reading the ground under an old railway',
    summary:
      'Geology and geotechnics for the Armenia–Montenegro segment of Vías Verdes 2026, a cycling and pedestrian corridor built on an old railway line: field mapping, seven SPT boreholes, a stratigraphic profile and the cartography to hold it all together.',
    year: '2026',
    threads: ['field', 'earth', 'cartography'],
    place: {
      name: 'Armenia – Montenegro, Quindío',
      coords: [-75.72, 4.53],
      label: '4°32′N 75°43′W',
      zoom: 11,
    },
    featured: true,
    cover: {
      src: '/work/field/stc6-annotated.jpg',
      alt: 'Annotated field photograph of a residual soil outcrop of the Armenia Formation next to a viaduct',
      caption:
        'Station 6 — residual soil of the Armenia Formation exposed in the embankment beside a viaduct. View N–S, 4°31′42″N 75°43′19″W.',
      ratio: 1.418,
      kind: 'photo',
    },
    figures: [
      {
        src: '/work/quindio/geomorfologia.jpg',
        alt: 'Geomorphological units map of the Armenia–Montenegro corridor with 5 m contour lines',
        caption:
          'Geomorphological units and 5 m contours along the corridor segments. MAGNA-SIRGAS Origen Nacional (EPSG:9377), 1:50 000.',
        ratio: 1.414,
        kind: 'map',
      },
      {
        src: '/work/quindio/pendientes.jpg',
        alt: 'Slope map of the corridor with classes from below 7.2 to above 27.9 degrees',
        caption:
          'Slope classes from the 12.5 m DEM. Above ~28° the residual soils of the Armenia Formation stop holding a cut.',
        ratio: 1.414,
        kind: 'map',
      },
      {
        src: '/work/quindio/perfil-estratigrafico.jpg',
        alt: 'Stratigraphic profile of seven boreholes along the corridor showing clayey sand over high-plasticity silt',
        caption:
          'Stratigraphic profile from boreholes S1–S7: a thin clayey sand (SC) cap over high-plasticity silt (MH), with anthropic fill at S3 and S6. No water table to 6 m.',
        ratio: 1.781,
        kind: 'plot',
      },
      {
        src: '/work/field/stc1-annotated.jpg',
        alt: 'Annotated photograph inside a masonry culvert showing debris flow and anthropic fill',
        caption:
          'Station 1 — surface debris flow and anthropic fill inside a masonry culvert of the old railway. The tape is 1 m.',
        ratio: 1.152,
        kind: 'photo',
      },
      {
        src: '/work/field/stc4.jpg',
        alt: 'Fresh landslide scar in orange residual soil on a forested slope',
        caption:
          'Station 4 — a fresh scar in the residual soil. The hammer for scale is in the middle of the frame.',
        ratio: 1.333,
        kind: 'photo',
      },
      {
        src: '/work/quindio/abscisas.jpg',
        alt: 'Map of the Armenia–Montenegro corridor with K+000 chainage markers over an OpenStreetMap base',
        caption:
          'Corridor alignment with automated K+000 chainage markers, generated from the survey KMZ. The same code became the open-source corridor toolkit.',
        ratio: 1.493,
        kind: 'map',
      },
    ],
    story: {
      question:
        'An abandoned railway between Armenia and Montenegro is being turned into a green corridor for bikes and pedestrians. Before anyone pours concrete: what is the ground made of, where is it unstable, and which culverts, cuts and embankments need attention?',
      place:
        'The Armenia Formation — volcaniclastic deposits from the Ruiz–Tolima massif that blanket the Quindío plateau — deeply weathered into residual soils, cut by dozens of small drainages, and crossed by century-old masonry culverts and viaducts.',
      data: [
        'Field stations along the whole segment: outcrop descriptions, structures, drainage condition, photographs with coordinates',
        'Seven manual SPT boreholes to 6 m, with grain-size and plasticity tests (SUCS classification)',
        'Drone-derived DEM and survey alignment (KMZ from Civil 3D), reprojected to MAGNA-SIRGAS Origen Nacional',
        'Landsat and Sentinel-2 composites, 2010–2025, for vegetation change along the alignment',
      ],
      method: [
        'Walk the corridor. Log every station, sketch the structures, photograph the failures with a scale',
        'Zone the boreholes by sector and draw a stratigraphic profile with SUCS units and blow counts',
        'Build the corridor cartography in QGIS: geology, geomorphology, slope classes, 5 m contours',
        'Automate chainage (K+format) and station projection onto the axis with GeoPandas, exporting DXF for the engineers and 300 dpi layouts for the report',
        'Compute NDVI change 2010→2025 to see where vegetation was gained or lost along the alignment',
      ],
      result:
        'A geology report for the Tramo 4 design team, with a hazard-oriented reading of each critical station, a stratigraphic model for foundations, and a reproducible map set. The chainage and export code was generalized into an open corridor toolkit.',
    },
    technology: ['Field geology', 'SPT / SUCS', 'QGIS', 'Python', 'GeoPandas', 'Google Earth Engine', 'DXF/CAD'],
    links: [
      {
        label: 'Corridor toolkit (chainage, DXF, maps)',
        href: 'https://github.com/oscgonz19/corridor-toolkit-vias-verdes',
      },
    ],
  },
  {
    slug: 'vegetation-change-quindio',
    title: 'Fifteen years of green along one corridor',
    summary:
      'Multi-decadal vegetation change from Landsat and Sentinel-2 on Google Earth Engine — first for the Pijao corridor, then generalized into Verdant, an open platform for any area of interest.',
    year: '2025–2026',
    threads: ['earth', 'data', 'cartography'],
    place: {
      name: 'Armenia – Montenegro, Quindío',
      coords: [-75.72, 4.53],
      label: '4°32′N 75°43′W',
      zoom: 11,
    },
    featured: true,
    cover: {
      src: '/work/quindio/ndvi-cambio.jpg',
      alt: 'Map of NDVI change 2010 to 2025 along the corridor, red for loss and green for gain',
      caption:
        'ΔNDVI 2010→2025 along the Armenia–Montenegro alignment. Gain +32 %, stable 63 %, loss 5 %, threshold ±0.10. Annual median cloud-free composites, Landsat C2 L2.',
      ratio: 1.714,
      kind: 'map',
    },
    figures: [
      {
        src: '/work/quindio/ndvi-2010-2025.jpg',
        alt: 'Four NDVI panels for 2010, 2015, 2020 and 2025 along the corridor',
        caption:
          'NDVI in 2010, 2015, 2020 and 2025. Median NDVI along the alignment climbs from 0.61 to 0.67.',
        ratio: 1.276,
        kind: 'plot',
      },
      {
        src: '/work/quindio/sentinel2-2025.jpg',
        alt: 'Sentinel-2 true-colour preview of the corridor area in 2025 with cloud cover',
        caption:
          'Sentinel-2 true colour, 2025. Cloud is the permanent enemy in the Andes; cloud masking and median compositing are most of the work.',
        ratio: 1,
        kind: 'photo',
      },
    ],
    story: {
      question:
        'Slopes rarely fail without warning: vegetation thins, scars open, recovery stalls. Can three decades of free satellite archive tell us where the landscape around a corridor is losing or gaining cover — before someone has to walk there?',
      place:
        'Two corridors in Quindío: the Pijao mountain road (24 monitoring points, 1990–2024) and the Armenia–Montenegro railway alignment (2010–2025). Both sit under near-permanent cloud, so any answer has to survive aggressive masking.',
      data: [
        'Landsat 5/7/8 Collection 2 Level 2 surface reflectance, harmonized across sensors',
        'Sentinel-2 MSI for the recent period',
        'Corridor alignments and monitoring points from the field and survey work',
      ],
      method: [
        'Mask clouds and shadows per scene; build annual or dry-season median composites',
        'Compute NDVI, NBR, NDWI and EVI; difference periods (dNDVI, dNBR) and classify gain / stable / loss with a ±0.10 threshold',
        'Extract time series at monitoring points; look for sustained decline rather than single-year noise',
        'Wrap it in a Streamlit interface so an area of interest can be drawn and analysed without touching code',
      ],
      result:
        'Along the Armenia–Montenegro alignment the story is mostly recovery — a third of the buffer gained cover while 5 % lost it, and the losses cluster where the field stations found erosion. The workflow became Verdant, an open GEE-based platform for vegetation change over decades.',
    },
    technology: ['Google Earth Engine', 'Python', 'Landsat', 'Sentinel-2', 'GeoPandas', 'Streamlit'],
    links: [
      { label: 'Verdant on GitHub', href: 'https://github.com/oscgonz19/Verdant' },
    ],
  },
  {
    slug: 'elevtoposter',
    title: 'Mountains as data, drawn as posters',
    summary:
      'ElevToposter turns SRTM elevation into minimalist terrain posters — hillshade, contours and hypsometric bands under custom themes. Part cartography, part experiment in representing landscapes as data-driven art.',
    year: '2026',
    threads: ['cartography', 'data'],
    place: {
      name: 'Paramillo · Cordillera Central',
      coords: [-75.65, 4.29],
      label: '4°17′N 75°39′W',
      zoom: 9,
    },
    featured: false,
    cover: {
      src: '/work/posters/paramillo.jpg',
      alt: 'Dark elevation poster of the Paramillo massif rendered with a plasma palette',
      caption: 'Paramillo del Quindío, SRTM 30 m, hypsometric tint with hillshade.',
      ratio: 1.667,
      kind: 'render',
    },
    figures: [
      {
        src: '/work/posters/nevado-del-huila.jpg',
        alt: 'Elevation poster of Nevado del Huila',
        caption: 'Nevado del Huila, the highest volcano in Colombia, in the same pipeline.',
        ratio: 0.75,
        kind: 'render',
      },
    ],
    technology: ['Python', 'SRTM', 'Rasterio', 'NumPy', 'Matplotlib'],
    links: [{ label: 'ElevToposter on GitHub', href: 'https://github.com/oscgonz19/elevtoposter' }],
  },
  {
    slug: 'expedition-mapper',
    title: 'From a GPS track to an expedition map',
    summary:
      'A cartographic toolkit that turns KMZ/GPX tracks into terrain-aware maps: elevation profiles, hillshade, contours, slope statistics and waypoints. Built with the Nevado del Tolima as the first example.',
    year: '2026',
    threads: ['field', 'cartography', 'data'],
    place: {
      name: 'Nevado del Tolima',
      coords: [-75.33, 4.66],
      label: '4°40′N 75°20′W',
      zoom: 10,
    },
    featured: false,
    cover: {
      src: '/terrain/terrain-light.jpg',
      alt: 'Light hillshade with contour lines of the Quindío mountains',
      caption: 'Hillshade and 100 m contours from a 12.5 m DEM of the Cordillera Central, the base every expedition map starts from.',
      ratio: 1.778,
      kind: 'render',
    },
    figures: [],
    technology: ['Python', 'GeoPandas', 'Rasterio', 'GPX/KMZ', 'Streamlit'],
    links: [
      { label: 'Expedition Mapper on GitHub', href: 'https://github.com/oscgonz19/montania-expedition-mapper' },
    ],
  },
  {
    slug: 'corridor-toolkit',
    title: 'Chainage, offsets and CAD, without the spreadsheet',
    summary:
      'An engineering-grade toolkit for linear infrastructure: automated K+000 chainage, projection of features onto the corridor axis, and exports engineers actually open — DXF layers, 300 dpi map layouts, CSV summaries. Generalized from the Vías Verdes work.',
    year: '2026',
    threads: ['cartography', 'data', 'earth'],
    place: {
      name: 'Armenia – Montenegro, Quindío',
      coords: [-75.72, 4.53],
      label: '4°32′N 75°43′W',
      zoom: 11,
    },
    featured: false,
    cover: {
      src: '/work/quindio/abscisas.jpg',
      alt: 'Map of the Armenia–Montenegro corridor with K+000 chainage markers over an OpenStreetMap base',
      caption: 'Corridor alignment with automated chainage markers, generated straight from the survey KMZ.',
      ratio: 1.493,
      kind: 'map',
    },
    figures: [],
    technology: ['Python', 'GeoPandas', 'Shapely', 'ezdxf', 'Matplotlib'],
    links: [
      { label: 'Corridor toolkit on GitHub', href: 'https://github.com/oscgonz19/corridor-toolkit-vias-verdes' },
    ],
  },
  {
    slug: 'bayesian-anomaly-detection',
    title: 'What does "normal" look like, per host?',
    summary:
      'Hierarchical Bayesian models for rare-event anomaly detection in network traffic: model what is normal for each kind of activity, then flag what is statistically improbable — useful for low-and-slow threats that classifiers miss.',
    year: '2026',
    threads: ['data'],
    place: { name: 'Remote', coords: [-70.65, -33.45], label: '—' },
    featured: false,
    cover: { src: '', alt: '', caption: '', ratio: 1.5, kind: 'plot' },
    figures: [],
    technology: ['Python', 'PyMC', 'Bayesian statistics'],
    links: [
      { label: 'Anomaly detection', href: 'https://github.com/oscgonz19/bayesian-anomaly-detection' },
      { label: 'Survival analysis for SOC triage', href: 'https://github.com/oscgonz19/survival-analysis-security' },
    ],
  },
  {
    slug: 'spark-text-similarity',
    title: 'Finding near-duplicates without comparing everything',
    summary:
      'Shingling, MinHash and locality-sensitive hashing on Spark DataFrames, so a large corpus can be deduplicated without O(n²) comparisons — with the precision/recall cost of candidate generation measured, not assumed.',
    year: '2026',
    threads: ['data'],
    place: { name: 'Remote', coords: [-70.65, -33.45], label: '—' },
    featured: false,
    cover: { src: '', alt: '', caption: '', ratio: 1.5, kind: 'plot' },
    figures: [],
    technology: ['PySpark', 'MinHash', 'LSH'],
    links: [{ label: 'Spark text similarity', href: 'https://github.com/oscgonz19/spark-text-similarity' }],
  },
  {
    slug: 'credit-bias-audit',
    title: 'Is this credit model fair, and can we prove it?',
    summary:
      'A reproducible fairness audit for credit-risk models: demographic parity, equalized odds and calibration across protected groups, mitigation at pre-, in- and post-processing, and a model card to document it.',
    year: '2026',
    threads: ['data'],
    place: { name: 'Remote', coords: [-70.65, -33.45], label: '—' },
    featured: false,
    cover: { src: '', alt: '', caption: '', ratio: 1.5, kind: 'plot' },
    figures: [],
    technology: ['Python', 'Scikit-learn', 'Fairlearn'],
    links: [{ label: 'Credit bias audit', href: 'https://github.com/oscgonz19/credit-bias-audit' }],
  },
  {
    slug: 'football-probabilities',
    title: 'How confident should a probability be?',
    summary:
      'Match-outcome probabilities from a Poisson / Dixon–Coles baseline with an ML fallback, tuned with proper scoring rules — then a risk-aware layer that turns calibrated probabilities into decisions with exposure controls.',
    year: '2026',
    threads: ['data'],
    place: { name: 'Remote', coords: [-70.65, -33.45], label: '—' },
    featured: false,
    cover: { src: '', alt: '', caption: '', ratio: 1.5, kind: 'plot' },
    figures: [],
    technology: ['Python', 'Optuna', 'Calibration'],
    links: [
      { label: 'Poisson football prediction', href: 'https://github.com/oscgonz19/poisson-football-prediction' },
      { label: 'Risk-aware decision system', href: 'https://github.com/oscgonz19/risk-aware-sports-decision-system' },
    ],
  },
  {
    slug: 'gru4rec-audit',
    title: 'Does the published recommender actually work?',
    summary:
      'A reproduction and audit of GRU4Rec for session-based recommendation: clean splits, full-ranking metrics (MRR, Recall@K, NDCG) against honest baselines, and the plots to show where the claims hold.',
    year: '2026',
    threads: ['data'],
    place: { name: 'Remote', coords: [-70.65, -33.45], label: '—' },
    featured: false,
    cover: { src: '', alt: '', caption: '', ratio: 1.5, kind: 'plot' },
    figures: [],
    technology: ['PyTorch', 'RecSys evaluation'],
    links: [{ label: 'GRU4Rec reproduction & audit', href: 'https://github.com/oscgonz19/gru4rec-reproduction-and-audit' }],
  },
]

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}

export function getFeatured(): Project[] {
  return PROJECTS.filter((p) => p.featured)
}

/** Projects with a cover image but no full story page */
export function getSecondary(): Project[] {
  return PROJECTS.filter((p) => !p.featured && p.cover.src)
}

/** Compact list: work that is best represented by its repository */
export function getCompact(): Project[] {
  return PROJECTS.filter((p) => !p.featured && !p.cover.src)
}
