import geoData from './assets/guineaJSON.json';
import type { FeatureCollection } from 'geojson';
export const guineaJSON = geoData as FeatureCollection;


export interface RegionInfo {
  name: string;
  center: [number, number]; // latitude, longitude
  zoom: number;
  color: string;
}

export const guineaRegions: Record<string, RegionInfo> = {
  default: { name: 'Guinea', center: [9.9456, -9.6966], zoom: 7, color: '#cccccc' },
  Beyla: { name: 'Beyla', center: [8.9833, -8.2833], zoom: 8, color: '#e6194b' },
  Boffa: { name: 'Boffa', center: [10.1700, -14.3000], zoom: 8, color: '#3cb44b' },
  Boké: { name: 'Boké', center: [10.9333, -14.3000], zoom: 8, color: '#ffe119' },
  Conakry: { name: 'Conakry', center: [9.6412, -13.5784], zoom: 10, color: '#4363d8' },
  Coyah: { name: 'Coyah', center: [9.8333, -13.6333], zoom: 10, color: '#f58231' },
  Dabola: { name: 'Dabola', center: [10.7333, -11.7833], zoom: 10, color: '#911eb4' },
  Dalaba: { name: 'Dalaba', center: [11.1833, -12.3833], zoom: 10, color: '#46f0f0' },
  Dinguiraye: { name: 'Dinguiraye', center: [11.3667, -10.3667], zoom: 10, color: '#f032e6' },
  Dubréka: { name: 'Dubréka', center: [9.8000, -13.6333], zoom: 10, color: '#bcf60c' },
  Faranah: { name: 'Faranah', center: [10.7500, -10.7500], zoom: 10, color: '#fabebe' },
  Forécariah: { name: 'Forécariah', center: [9.6167, -14.2000], zoom: 10, color: '#008080' },
  Fria: { name: 'Fria', center: [10.3500, -13.5833], zoom: 10, color: '#e6beff' },
  Gaoual: { name: 'Gaoual', center: [11.4833, -13.3833], zoom: 10, color: '#9a6324' },
  Guéckédou: { name: 'Guéckédou', center: [8.5670, -10.1833], zoom: 10, color: '#fffac8' },
  Kankan: { name: 'Kankan', center: [10.3833, -9.3000], zoom: 10, color: '#800000' },
  Kérouané: { name: 'Kérouané', center: [9.8333, -9.7000], zoom: 10, color: '#aaffc3' },
  Kindia: { name: 'Kindia', center: [10.0500, -12.8667], zoom: 10, color: '#808000' },
  Kissidougou: { name: 'Kissidougou', center: [9.1833, -10.1000], zoom: 10, color: '#ffd8b1' },
  Koubia: { name: 'Koubia', center: [11.2500, -11.4167], zoom: 10, color: '#000075' },
  Koundara: { name: 'Koundara', center: [12.4833, -13.1667], zoom: 10, color: '#808080' },
  Kouroussa: { name: 'Kouroussa', center: [10.6833, -9.5167], zoom: 10, color: '#ffffff' },
  Labé: { name: 'Labé', center: [11.3170, -12.2833], zoom: 10, color: '#ffd700' },
  Lélouma: { name: 'Lélouma', center: [11.4000, -12.3500], zoom: 10, color: '#d2691e' },
  Lola: { name: 'Lola', center: [7.7667, -9.6333], zoom: 10, color: '#ff7f50' },
  Macenta: { name: 'Macenta', center: [8.5500, -9.4167], zoom: 10, color: '#6495ed' },
  Mandiana: { name: 'Mandiana', center: [11.5333, -9.0000], zoom: 10, color: '#dc143c' },
  Mali: { name: 'Mali', center: [11.3333, -10.3333], zoom: 10, color: '#00ffff' },
  Mamou: { name: 'Mamou', center: [10.3700, -12.1000], zoom: 10, color: '#0000ff' },
  Nzérékoré: { name: 'Nzérékoré', center: [7.7500, -8.8333], zoom: 10, color: '#ff00ff' },
  Pita: { name: 'Pita', center: [11.0000, -12.3833], zoom: 10, color: '#800080' },
  Siguiri: { name: 'Siguiri', center: [11.4167, -9.1667], zoom: 10, color: '#00ff00' },
  Télimélé: { name: 'Télimélé', center: [10.9333, -13.1667], zoom: 10, color: '#ffa500' },
  Timbo: { name: 'Timbo', center: [11.1833, -12.3833], zoom: 10, color: '#a52a2a' },
  Tougué: { name: 'Tougué', center: [11.2833, -12.4333], zoom: 10, color: '#7fff00' },
  Yomou: { name: 'Yomou', center: [7.4000, -9.0000], zoom: 10, color: '#6495ed' },
};
