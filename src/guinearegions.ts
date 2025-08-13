import geoData from './assets/guineaJSON.json';
import type { FeatureCollection, Geometry } from 'geojson';

export const guineaJSON = geoData as FeatureCollection;

export interface RegionInfo {
  name: string;
  center: [number, number]; // latitude, longitude
  zoom: number;
  color: string;
}

// Helper to compute centroid of a polygon
function getCentroid(coords: any[]): [number, number] {
  let latSum = 0;
  let lngSum = 0;
  let count = 0;

  coords.forEach((ring) => {
    ring.forEach(([lng, lat]:[number,number]) => {
      latSum += lat;
      lngSum += lng;
      count++;
    });
  });

  return [latSum / count, lngSum / count];
}

// Generate a random color
function getRandomColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Build the regions dynamically
export const guineaRegions: Record<string, RegionInfo> = {};

guineaJSON.features.forEach((feature) => {
  const name = feature.properties?.NAME_2 || feature.properties?.name || 'Unknown';
  let center: [number, number] = [9.9456, -9.6966]; // default
  const zoom = 9; // default zoom level
  const color = getRandomColor();

  if (feature.geometry.type === 'Polygon') {
    center = getCentroid(feature.geometry.coordinates);
  } else if (feature.geometry.type === 'MultiPolygon') {
    // Take the first polygon for simplicity
    center = getCentroid(feature.geometry.coordinates[0]);
  }

  guineaRegions[name] = { name, center, zoom, color };
});

guineaRegions['default'] = { name: 'Guinea', center: [9.9456, -9.6966], zoom: 7, color: '#cccccc' };
