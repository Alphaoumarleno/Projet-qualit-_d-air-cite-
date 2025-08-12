
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { guineaRegions, type RegionInfo} from './guinearegions';

interface GuineaMapProps {
  regionKey: string; // e.g. "Conakry", "Kindia"
}
function GuineaMap({regionKey}:GuineaMapProps) {
  // Default to 'default' region if no key is provided
  if (!regionKey) {
    regionKey = 'default';
  }
  const region = (guineaRegions as Record<string, RegionInfo>)[regionKey] ?? null;;

  return (
    <MapContainer
      center={region.center as [number, number]}
      zoom={region.zoom as number}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={region.center as [number, number]}>
        <Popup>
          {region.name}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
export default GuineaMap; 