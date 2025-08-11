
import { MapContainer, TileLayer,useMap, Marker, Popup } from 'react-leaflet';

function GuineaMap() {
  return(
  <MapContainer center={[9.9456, -9.6966]} zoom={6} scrollWheelZoom={false} style= {{ height: '100%', width: '100%' }}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[9.9456, -13.7122]}>
    <Popup>
      Sensor 1 <br /> Location: Conakry, Guinea <br />
    </Popup>
  </Marker>
</MapContainer>
  )
}
export default GuineaMap; 