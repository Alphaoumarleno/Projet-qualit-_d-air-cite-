import GeoData from './assets/guineaGeoJSON.json';
import type { FeatureCollection } from 'geojson';

export const guineaGeoJSON = GeoData as FeatureCollection;


export interface VillageInfo {
  name: string;
  center?: [number, number]; // optional if you want coordinates
}

export interface RegionInfo {
  name: string;
  center: [number, number]; // [lat, lng]
  zoom: number;
  color: string;
  villages: VillageInfo[];
}

// Utility to calculate centroid from polygon coordinates
function getCentroid(coords: any[]): [number, number] {
  let latSum = 0;
  let lngSum = 0;
  let count = 0;

  coords.forEach((ring) => {
    ring.forEach(([lng, lat]: [number, number]) => {
      latSum += lat;
      lngSum += lng;
      count++;
    });
  });

  return [latSum / count, lngSum / count];
}

// Random color generator
function getRandomColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Main data container
export const guineaRegions: Record<string, RegionInfo> = {};

// 1️⃣ Add regions
guineaGeoJSON.features.forEach((feature) => {
  const name = feature.properties?.NAME_2 || feature.properties?.name || 'Unknown';
  let center: [number, number] = [9.9456, -9.6966];
  const zoom = 9;
  const color = getRandomColor();

  if (feature.geometry.type === 'Polygon') {
    center = getCentroid(feature.geometry.coordinates);
  } else if (feature.geometry.type === 'MultiPolygon') {
    center = getCentroid(feature.geometry.coordinates[0]);
  }

  guineaRegions[name] = { name, center, zoom, color, villages: [] };
});

// 2️⃣ Add villages into the correct region
guineaGeoJSON.features.forEach((feature) => {
  const villageName = feature.properties?.NAME_3 || feature.properties?.name || 'Unknown';
  const parentRegion = feature.properties?.NAME_2 || 'Unknown';

  let center: [number, number] = [9.9456, -9.6966];

  if (feature.geometry.type === 'Polygon') {
    center = getCentroid(feature.geometry.coordinates);
  } else if (feature.geometry.type === 'MultiPolygon') {
    center = getCentroid(feature.geometry.coordinates[0]);
  }

  // Ensure parent region exists
  if (!guineaRegions[parentRegion]) {
    guineaRegions[parentRegion] = {
      name: parentRegion,
      center: [9.9456, -9.6966],
      zoom: 9,
      color: getRandomColor(),
      villages: [],
    };
  }

  // Add village to array
  guineaRegions[parentRegion].villages.push({
    name: villageName,
    center,
  });
});

// 3️⃣ Default entry for whole country
guineaRegions['default'] = {
  name: 'Guinea',
  center: [9.9456, -9.6966],
  zoom: 7,
  color: '#cccccc',
  villages: [],
};

// 4️⃣ Helper to get all villages flat
export const allVillages: VillageInfo[] = Object.values(guineaRegions).flatMap(
  (region) => region.villages
);
