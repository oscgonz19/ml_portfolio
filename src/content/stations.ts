import type { Station } from '@/types'

/**
 * Field stations from the geological survey of the critical points (Anexo 1,
 * Levantamiento de campo). Coordinates are WGS84 [lon, lat].
 */
export const PUNTOS_CRITICOS_STATIONS: Station[] = [
  { code: 'SFCB-001', place: 'Los Sauces', municipality: 'Buenavista', coords: [-75.74469, 4.3414], elevation: 1586, unit: 'Rosario Complex', lithology: 'Green schist (colluvium)', weathering: 'high', slope: '12°', condition: 'stable', process: 'local debris flows, rockfall' },
  { code: 'SPCB-002', place: 'Los Juanes', municipality: 'Buenavista', coords: [-75.75152, 4.33889], elevation: 1264, unit: 'Rosario Complex', lithology: 'Garnet amphibolite', weathering: 'low', slope: 'N/A', condition: 'stable', process: 'sampling point in channel' },
  { code: 'SPCB-003', place: 'Point 1 main road', municipality: 'Buenavista', coords: [-75.75778, 4.36833], elevation: 1278, unit: 'Residual soil', lithology: 'Clayey residual soil', weathering: 'complete', slope: '60°', condition: 'unstable', process: 'shallow slide' },
  { code: 'SPCB-004', place: 'Point 2 main road', municipality: 'Buenavista', coords: [-75.75891, 4.37148], elevation: 1268, unit: 'Residual soil', lithology: 'Clayey residual soil', weathering: 'complete', slope: '50°', condition: 'marginal', process: 'cut slope' },
  { code: 'SPCB-005', place: 'Point 3 main road', municipality: 'Buenavista', coords: [-75.76083, 4.375], elevation: 1258, unit: 'Alluvial deposit', lithology: 'Alluvial gravel', weathering: 'high', slope: 'N/A', condition: 'stable', process: 'fluvial deposit' },
  { code: 'SPCB-006', place: 'Point 1 Las Gurrias', municipality: 'Buenavista', coords: [-75.73487, 4.37924], elevation: 1100, unit: 'Rosario Complex', lithology: 'Residual soil with amphibolite fragments', weathering: 'high', slope: '70-80°', condition: 'unstable', process: 'rockfall' },
  { code: 'SPCB-007', place: 'Point 1 La Mina', municipality: 'Buenavista', coords: [-75.72624, 4.36426], elevation: 1332, unit: 'Rosario Complex', lithology: 'Schist fragments in soil', weathering: 'high', slope: '45-50°', condition: 'marginal', process: 'debris flow' },
  { code: 'SPCB-008', place: 'Point 3 La Mina', municipality: 'Buenavista', coords: [-75.72273, 4.36517], elevation: 1332, unit: 'Rosario Complex', lithology: 'Schist fragments in soil', weathering: 'high', slope: '45-50°', condition: 'marginal', process: 'debris flow' },
  { code: 'SPCG-001', place: 'Cantera', municipality: 'Génova', coords: [-75.7777, 4.21984], elevation: 1494, unit: 'Rosario Complex', lithology: 'Green schist', weathering: 'moderate', slope: '85-90°', condition: 'stable', process: 'quarry face' },
  { code: 'SPCG-002', place: 'Points 2-3', municipality: 'Génova', coords: [-75.75152, 4.23057], elevation: 1494, unit: 'Rosario Complex', lithology: 'Green schist', weathering: 'moderate', slope: '90°', condition: 'stable', process: 'old block fall' },
  { code: 'SPCG-003', place: 'Point 6', municipality: 'Génova', coords: [-75.78732, 4.24396], elevation: 1410, unit: 'Rosario Complex', lithology: 'Schist (fallen block)', weathering: 'high', slope: 'N/A', condition: 'stable', process: 'block fall' },
  { code: 'SPCG-004', place: 'Point 11', municipality: 'Génova', coords: [-75.78828, 4.25124], elevation: 1410, unit: 'Rosario Complex', lithology: 'Schist', weathering: 'high', slope: '80°', condition: 'stable', process: 'block fall onto road' },
  { code: 'SPCG-005', place: 'Point 14', municipality: 'Génova', coords: [-75.78732, 4.30484], elevation: 1124, unit: 'Rosario Complex', lithology: 'Residual soil', weathering: 'complete', slope: '60°', condition: 'unstable', process: 'debris flow' },
  { code: 'SPCP-001', place: 'Point 3', municipality: 'Pijao', coords: [-75.72201, 4.38908], elevation: 1122, unit: 'Rosario Complex', lithology: 'Schist', weathering: 'high', slope: '45°', condition: 'stable', process: 'fallen clasts, cut slope' },
  { code: 'SPCP-002', place: 'Point 1', municipality: 'Pijao', coords: [-75.7064, 4.35341], elevation: 1212, unit: 'Rosario Complex', lithology: 'Saprolitic schist', weathering: 'high', slope: 'N/A', condition: 'stable', process: 'in-situ weathering' },
]
