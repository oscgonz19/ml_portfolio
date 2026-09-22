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
    slug: 'puntos-criticos-quindio',
    title: 'Forty-eight places where the mountain roads fail',
    summary:
      'Geology, hydrogeology and hazard–vulnerability–risk analysis for 48 critical points on the rural roads of Génova, Pijao and Buenavista, in the Cordillera Central of Quindío — the technical basis for designing the stabilization works.',
    year: '2025',
    threads: ['earth', 'field', 'data', 'cartography'],
    place: {
      name: 'Génova · Pijao · Buenavista, Quindío',
      coords: [-75.72, 4.30],
      label: '4°18′N 75°43′W',
      zoom: 10,
    },
    places: [
      { name: 'Génova', label: '13 points · 11.9 km', coords: [-75.79, 4.21] },
      { name: 'Pijao', label: '24 points · 12.1 km', coords: [-75.704, 4.335] },
      { name: 'Buenavista', label: '11 points · 5 sectors', coords: [-75.74, 4.36] },
    ],
    featured: true,
    cover: {
      src: '/work/pijao/drone-landslide-houses.jpg',
      alt: 'Drone photograph of a landslide scar running down a hillside between a farmhouse and a rural road, Buenavista, Quindío',
      caption:
        'Buenavista, July 2025. A slide between a farmhouse and the road — hazard and exposure in one frame. DJI flight, ~120 m AGL.',
      ratio: 1.333,
      kind: 'photo',
    },
    figures: [
      {
        src: '/work/pijao/drone-landslide-road.jpg',
        alt: 'Drone photograph of a landslide crossing a forested rural road',
        caption: 'A critical point from above: the scar crosses the road and continues into the drainage below. Génova–Pijao, June 2025.',
        ratio: 1.333,
        kind: 'photo',
      },
      {
        src: '/work/pijao/geologia-pijao.jpg',
        alt: 'Geological map of the Pijao corridor with 24 critical points, the Silvia–Pijao and Río Verde faults, and Rosario and Córdoba complexes',
        caption:
          'Geology of the Pijao corridor with the 24 critical points. Rosario and Córdoba complexes between the Silvia–Pijao and Río Verde faults; Armenia Formation to the west. SGC 243–262, 1:50 000.',
        ratio: 1.463,
        kind: 'map',
      },
      {
        src: '/work/pijao/serpentinite-annotated.jpg',
        alt: 'Close-up of blue-green serpentinite with a pen for scale, labelled Sxp-Cr',
        caption:
          'Serpentinite of the Rosario Complex in a road cut north of Pijao. Where the foliation dips with the slope, the cut fails along it.',
        ratio: 1.472,
        kind: 'photo',
      },
      {
        src: '/work/pijao/buenavista-spurs-annotated.jpg',
        alt: 'Annotated drone view of Buenavista showing a structural spur',
        caption: 'Buenavista from the drone, with the structural spur (Sefc) that controls the local drainage annotated for the report.',
        ratio: 1.333,
        kind: 'photo',
      },
      {
        src: '/work/pijao/hidrogeologia-genova.jpg',
        alt: 'Hydrogeological units map of the Génova corridor',
        caption:
          'Hydrogeological units of the Génova corridor: colluvium and perched aquifers, transition zones, fractured basement. The drainage design starts here. 1:25 000.',
        ratio: 1.513,
        kind: 'map',
      },
      {
        src: '/work/pijao/pendientes-pijao.jpg',
        alt: 'Slope map of the Pijao corridor with critical points',
        caption: 'Slope classes along the Pijao corridor. Most critical points sit on slopes above 36°.',
        ratio: 1.407,
        kind: 'map',
      },
      {
        src: '/work/pijao/drone-pijao-town.jpg',
        alt: 'Drone photograph of the town of Pijao in its valley with the Cordillera Central behind',
        caption: 'Pijao in its valley. The 12 km access road is the only way in and out.',
        ratio: 1.333,
        kind: 'photo',
      },
      {
        src: '/work/quindio/pijao-dashboard.jpg',
        alt: 'Screenshot of the Pijao landslide hazard dashboard with INVÍAS classification legend',
        caption:
          'The method, generalized: Factor of Safety interpolated by IDW, zoned with Voronoi, classified with INVÍAS/SGC thresholds — published as an open dashboard with anonymized data.',
        ratio: 2.094,
        kind: 'screen',
      },
    ],
    story: {
      question:
        'Three mountain municipalities depend on rural roads that fail every rainy season. The regional program to rehabilitate them needed to know, point by point: what is failing, why, how likely it is to fail again, what is exposed, and which works to design. Forty-eight critical points, three corridors, one field season.',
      place:
        'The western flank of the Cordillera Central, inside the Romeral fault corridor between the Cauca–Almaguer and Silvia–Pijao faults. Serpentinites and schists of the Rosario Complex, volcano-sedimentary rocks of Quebradagrande and Córdoba, the volcaniclastic Armenia Formation on the plateau — all weathered into residual soils and colluvium under more than 2 500 mm of rain a year. Slopes above 45 % at most of the critical points.',
      data: [
        'Field geology at every point: lithology, structure, weathering profile, active processes (cracks, incipient slides, persistent seepage), photographs with coordinates',
        'Hydrogeological survey: springs, seeps, saturation zones, drainage condition of cuts and culverts',
        'Drone flights over the three corridors for orthophotos and oblique views of the scars',
        'Undisturbed samples and laboratory shear parameters (c′, φ′, γ) at each critical point',
        'Regional hazard cartography (POMCA), SGC geological sheets, 12.5 m DEM, multitemporal Google Earth imagery 2014–2024',
      ],
      method: [
        'Map geology, geomorphology and slope for each corridor in QGIS; define engineering-geology units for rocks, residual soils, colluvium and fill',
        'Build a conceptual hydrogeological model per corridor — recharge, transit, discharge — and tie every seepage seen in the field to a unit',
        'Compute Factor of Safety at each critical point by limit equilibrium with the lab parameters; classify hazard with INVÍAS/SGC thresholds',
        'Spatialize hazard with Voronoi polygons around the points; combine with POMCA regional hazard and field observations into low / medium / high classes',
        'Inventory exposed elements (pavement, culverts, walls, houses, farms), score physical vulnerability, and convolve hazard × vulnerability into risk per point',
        'Prioritize and hand over: which points need drainage, which need walls, which need a redesign of the cut',
      ],
      result:
        'Three sets of geology, hydrogeology and risk reports — 24 points along 12.1 km for Pijao, 13 along 11.9 km for Génova, 11 in five sectors for Buenavista — with hazard zonation maps, ranked interventions and drainage recommendations that fed directly into the engineering designs. The Pijao workflow was later generalized into an open-source hazard pipeline and dashboard.',
    },
    technology: [
      'Field geology',
      'Hydrogeology',
      'Limit-equilibrium stability',
      'QGIS',
      'DJI drone',
      'Python',
      'GeoPandas',
      'Google Earth Engine',
      'Streamlit',
    ],
    links: [
      {
        label: 'Interactive hazard dashboard (source, anonymized data)',
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
    slug: 'santa-rosa-landslide',
    title: 'The hillside that took the road with it',
    summary:
      'A large slope failure on a secondary road in Santa Rosa de Cabal, Risaralda: geological and geotechnical study with drone survey, boreholes, laboratory tests and seismic refraction to understand why it moved and how to rebuild.',
    year: '2024',
    threads: ['earth', 'field'],
    place: {
      name: 'Santa Rosa de Cabal, Risaralda',
      coords: [-75.62, 4.87],
      label: '4°52′N 75°37′W',
      zoom: 11,
    },
    featured: false,
    cover: {
      src: '/work/santa-rosa/drone-landslide.jpg',
      alt: 'Drone photograph of a large landslide scar above a river, with the road trace cut across it',
      caption: 'The failure from the drone: a bare scar several hundred metres across, the river at its toe, the road trace across the middle.',
      ratio: 1.333,
      kind: 'photo',
    },
    figures: [
      {
        src: '/work/santa-rosa/drone-landslide-2.jpg',
        alt: 'Second drone view of the Santa Rosa landslide showing the full scar and the valley',
        caption: 'The same slope from upstream. Colluvium and residual soil over a fractured basement, undercut by the river.',
        ratio: 1.333,
        kind: 'photo',
      },
    ],
    technology: ['Field geology', 'Boreholes & SPT', 'Laboratory tests', 'Seismic refraction', 'DJI drone', 'QGIS'],
    links: [],
  },
  {
    slug: 'field-log-2021-2025',
    title: 'Field log, 2021–2025',
    summary:
      'Five years of applied geology in the Colombian Andes: slopes, road cuts, foundations, bridges and corridors across Quindío, Valle del Cauca, Risaralda and Caldas. Roughly twenty studies — each one a place, a problem and a report.',
    year: '2021–2025',
    threads: ['field', 'earth'],
    place: {
      name: 'Quindío · Valle del Cauca · Risaralda · Caldas',
      coords: [-75.75, 4.4],
      label: '4°N 75°W',
      zoom: 8,
    },
    places: [
      { name: 'Anserma', label: 'soils, 2021', coords: [-75.78, 5.24] },
      { name: 'Quimbaya', label: 'bridge study, 2021', coords: [-75.77, 4.62] },
      { name: 'Alcalá–Cartago', label: 'PR12+950 stabilization, 2022', coords: [-75.85, 4.70] },
      { name: 'Palmira', label: 'La Esperanza–Tablones slope, 2023', coords: [-76.15, 3.55] },
      { name: 'Pereira', label: '2023', coords: [-75.69, 4.81] },
      { name: 'Buga', label: 'vereda, 2024', coords: [-76.30, 3.90] },
      { name: 'Dosquebradas', label: '2024', coords: [-75.68, 4.83] },
      { name: 'Río Azul, Pijao', label: 'road collapse, 2024', coords: [-75.70, 4.33] },
      { name: 'Santa Rosa de Cabal', label: 'landslide, 2024', coords: [-75.62, 4.87] },
      { name: 'Calarcá', label: '2024', coords: [-75.64, 4.52] },
      { name: 'Génova', label: 'critical points, 2025', coords: [-75.79, 4.21] },
      { name: 'Buenavista', label: 'critical points, 2025', coords: [-75.74, 4.36] },
      { name: 'Córdoba · Alcalá', label: 'fuel-station soils, 2025', coords: [-75.69, 4.39] },
      { name: 'Armenia–Montenegro', label: 'Vías Verdes, 2026', coords: [-75.72, 4.53] },
    ],
    featured: false,
    cover: {
      src: '/work/drone/buenavista-clouds.jpg',
      alt: 'Drone photograph of a cloud bank sitting on a ridge above coffee farms in Buenavista, Quindío',
      caption: 'Cloud on the ridge above Buenavista, July 2025. Most of the field days look like this.',
      ratio: 1.333,
      kind: 'photo',
    },
    figures: [
      {
        src: '/work/pijao/schist-outcrop.jpg',
        alt: 'Blue-grey foliated schist outcrop in a road cut',
        caption: 'Foliated schist of the Rosario Complex in a road cut, Génova corridor.',
        ratio: 1.5,
        kind: 'photo',
      },
      {
        src: '/work/pijao/field-drainage.jpg',
        alt: 'Field team standing on a rural road beside a stream crossing',
        caption: 'Checking a stream crossing on the Pijao road. Where the water goes decides where the road fails.',
        ratio: 1.5,
        kind: 'photo',
      },
      {
        src: '/work/pijao/drone-scar-coffee.jpg',
        alt: 'Drone photograph of a small landslide scar inside a coffee plantation',
        caption: 'A fresh scar inside a coffee plantation. Coffee holds the soil until it does not.',
        ratio: 1.333,
        kind: 'photo',
      },
    ],
    story: {
      question:
        'Most applied geology is not a flagship project. It is a call about a slope that moved, a road bank that is sinking, a lot where someone wants to build. The question is always the same: what is the ground doing, and what can be done about it safely?',
      place:
        'The coffee region and the Cauca valley: residual soils on volcaniclastic deposits, colluvium over fractured basement, basalts of the Amaime Formation, alluvial terraces. Rain, roots, road cuts and rivers do the rest.',
      data: [
        'Field mapping and outcrop description at every site; engineering-geology units (rock, residual, transported, anthropic)',
        'Boreholes, SPT, undisturbed samples and laboratory tests where the design required them',
        'Drone flights for orthophotos and oblique views of failures',
        'Topographic surveys, DEMs (ALOS PALSAR, drone), SGC sheets and regional hazard cartography',
      ],
      method: [
        'Read the site first: geology, structure, water, history of movement from imagery',
        'Characterize units and parameters; run stability analysis where a slope is involved',
        'Write for the engineer who will design the works: what is there, how it behaves, what to avoid',
        'Draw the maps and sections that make the report defensible',
      ],
      result:
        'Geology and geotechnical reports for road stabilization, slope rehabilitation, foundations and corridor design across four departments — and the habit of turning each recurring task into a reusable tool.',
    },
    technology: ['Field geology', 'Engineering geology', 'SPT / laboratory', 'Slide / limit equilibrium', 'QGIS', 'DJI drone'],
    links: [],
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
    slug: 'ml-metrics-that-matter',
    title: 'When 97 % accuracy costs more than 94 %',
    summary:
      'A case study in choosing the metric that matches the decision: in medical diagnosis, the "more accurate" model can be three times more expensive once the cost of each kind of error is counted.',
    year: '2026',
    threads: ['data'],
    place: { name: 'Remote', coords: [-70.65, -33.45], label: '—' },
    featured: false,
    cover: { src: '', alt: '', caption: '', ratio: 1.5, kind: 'plot' },
    figures: [],
    technology: ['Python', 'Scikit-learn', 'Decision analysis'],
    links: [{ label: 'ML metrics that matter', href: 'https://github.com/oscgonz19/ml-metrics-that-matter' }],
  },
  {
    slug: 'survival-kidney-transplant',
    title: 'How long does a transplant last, and for whom?',
    summary:
      'Time-to-event analysis for kidney transplant graft failure: Kaplan–Meier curves and Cox proportional hazards to identify and quantify the risk factors, in R.',
    year: '2026',
    threads: ['data'],
    place: { name: 'Remote', coords: [-70.65, -33.45], label: '—' },
    featured: false,
    cover: { src: '', alt: '', caption: '', ratio: 1.5, kind: 'plot' },
    figures: [],
    technology: ['R', 'Survival analysis', 'Cox PH'],
    links: [{ label: 'Survival risk modeling in R', href: 'https://github.com/oscgonz19/biostatistics-survival-r-study' }],
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
