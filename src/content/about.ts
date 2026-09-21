/**
 * About page content. Keep this a narrative, not a CV.
 * The stratigraphy is ordered youngest → oldest, like a real column. The `age`
 * field is a map-unit code in the style of a geological legend, not a date.
 */
export const ABOUT = {
  intro: [
    'I am a geologist and data scientist interested in understanding the Earth through field observation, data and technology.',
    'I trained as a geologist in the Colombian Andes and learned early that the most important data comes from standing on the ground: an outcrop, a scar on a slope, a spring that should not be there. I then spent a master’s degree in data science learning how to turn that kind of observation into models, pipelines and software that other people can use.',
    'Today the two halves are one practice. I map, sample and describe in the field; I process satellite archives and terrain models; I build the tools that hold the analysis together; and I draw the maps and figures that let engineers, planners and communities see what the landscape is doing. Increasingly, the last step — explaining the Earth to people standing in front of it — is the one I care most about, which is why I am moving toward expedition and polar science communication.',
  ],
  /** One layer per stage of the practice, youngest on top */
  stratigraphy: [
    {
      unit: 'Science communication & expeditions',
      age: 'Qsc',
      description:
        'Interpreting mountain and polar environments for the people who visit them. Preparing for expedition staff work in Antarctica and the Arctic.',
      pattern: 'ice',
    },
    {
      unit: 'Visualization & cartography',
      age: 'Qvc',
      description:
        'Scientific figures, cartographic design, elevation posters, interactive maps. The map is the argument.',
      pattern: 'moss',
    },
    {
      unit: 'Software & geospatial technology',
      age: 'Nsg',
      description:
        'Reproducible pipelines, Earth Engine workflows, corridor toolkits, dashboards. Tools that survive the project that created them.',
      pattern: 'ink',
    },
    {
      unit: 'Data science',
      age: 'Nds',
      description:
        'MSc in Data Science. Statistics, Bayesian modeling, machine learning — and the discipline to say how uncertain an answer is.',
      pattern: 'ochre',
    },
    {
      unit: 'Fieldwork',
      age: 'Pfw',
      description:
        'Geological and environmental fieldwork in the Colombian Andes: road corridors, slopes, drainages, residual soils, boreholes.',
      pattern: 'sand',
    },
    {
      unit: 'Geology',
      age: 'Kg',
      description:
        'BSc in Geology. The habit of reading landscapes as processes in time — the layer everything else sits on.',
      pattern: 'rock',
    },
  ],
  education: [
    {
      degree: 'MSc in Data Science',
      institution: 'Pontificia Universidad Católica de Chile',
      place: 'Santiago, Chile',
    },
    {
      degree: 'BSc in Geology',
      institution: 'Universidad de Caldas',
      place: 'Manizales, Colombia',
    },
  ],
  experience: [
    {
      role: 'Geologist — corridor geology & geotechnics',
      org: 'Vías Verdes 2026, Quindío',
      period: '2026',
      note:
        'Geology and geotechnical reports, field mapping, SPT campaign and corridor cartography for the Armenia–Montenegro and Montenegro–Quimbaya segments.',
    },
    {
      role: 'Geologist — mountain road hazard assessment',
      org: 'Pijao, Quindío',
      period: '2025',
      note:
        'Geological and hydrogeological evaluation, Factor of Safety hazard zonation and multitemporal satellite analysis for a rural road corridor.',
    },
    {
      role: 'Independent — geospatial data products',
      org: 'Open source',
      period: '2025 →',
      note:
        'Verdant (vegetation change on GEE), ElevToposter, Expedition Mapper, corridor toolkit, landslide hazard pipeline.',
    },
  ],
  places: [
    { name: 'Quindío & Caldas, Colombia', label: 'Home base · fieldwork · BSc', coords: [-75.68, 4.53] as [number, number] },
    { name: 'Santiago, Chile', label: 'MSc Data Science', coords: [-70.65, -33.45] as [number, number] },
    { name: 'Antarctic Peninsula', label: 'Next', coords: [-62.0, -64.5] as [number, number], dashed: true },
  ],
}
