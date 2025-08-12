
import { MapContainer, TileLayer, Marker, Popup ,useMap } from 'react-leaflet';
import { guineaRegions, type RegionInfo} from './guinearegions';

interface GuineaMapProps {
  regionKey: string; // e.g. "Conakry", "Kindia"
}
function GuineaMap({regionKey}:GuineaMapProps) {
  if (!regionKey) {
    regionKey = 'default';
  }

function ChangeView({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null; 
}
  const region = (guineaRegions as Record<string, RegionInfo>)[regionKey] ?? null;;

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
      <Marker position={region.center as [number, number]}>
        <Popup>
          {region.name}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
export default GuineaMap; 