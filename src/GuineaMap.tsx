import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import { guineaRegions, type RegionInfo } from './guinearegions';
import { guineaJSON } from './guinearegions';

interface GuineaMapProps {
  regionKey: string; // e.g. "Conakry", "Kindia"
}

function GuineaMap({ regionKey }: GuineaMapProps) {
  if (!regionKey) {
    regionKey = 'default';
  }

  const region = guineaRegions[regionKey] ?? guineaRegions['default'];

  // Style each feature with its specific color
  const style = (feature: any) => {
    const name = feature.properties.NAME_1 || feature.properties.name;
    const regionInfo = guineaRegions[name];
    return {
      fillColor: regionInfo?.color || '#3388ff',
      weight: 2,
      opacity: 1,
      color: '#fff',
      dashArray: '3',
      fillOpacity: 0.7,
    };
  };

  // Add labels to each region
  const onEachFeature = (feature: any, layer: any) => {
    const name = feature.properties.NAME_1 || feature.properties.name;
    if (name) {
      layer.bindTooltip(name, {
        permanent: true,
        direction: 'center',
        className: 'region-label',
        opacity: 0.9,
      }).openTooltip();
    }
  };

  function ChangeView({ center, zoom }: { center: [number, number]; zoom: number }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <MapContainer
      center={region.center as [number, number]}
      zoom={region.zoom as number}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <ChangeView center={region.center} zoom={region.zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={guineaJSON} style={style} onEachFeature={onEachFeature} />
    </MapContainer>
  );
}

export default GuineaMap;
