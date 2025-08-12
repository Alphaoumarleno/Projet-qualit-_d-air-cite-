import { useState } from 'react';
import GuineaMap from './GuineaMap.jsx';
import AnimatedList from './AnimatedList'
const regionNames = [
  "Beyla",
  "Boffa",
  "Boké",
  "Conakry",
  "Coyah",
  "Dabola",
  "Dalaba",
  "Dinguiraye",
  "Dubréka",
  "Faranah",
  "Forécariah",
  "Fria",
  "Gaoual",
  "Guéckédou",
  "Kankan",
  "Kérouané",
  "Kindia",
  "Kissidougou",
  "Koubia",
  "Koundara",
  "Kouroussa",
  "Labé",
  "Lélouma",
  "Lola",
  "Macenta",
  "Mandiana",
  "Mali",
  "Mamou",
  "Nzérékoré",
  "Pita",
  "Siguiri",
  "Télimélé",
  "Timbo",
  "Tougué",
  "Yomou",
];



export default function CommuneView() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);


  return (
    <div style={{ display: 'flex', width: '100%', gap: '1rem' }}>
      <div
        style={{
          flexBasis:"25%",
          background: '#eee',
          padding: '1rem',
          overflowY: 'auto',
          height: "95%",
          borderRadius: 8,
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}
      >
        <AnimatedList
        items={regionNames}
        onItemSelect={(item) => setSelectedRegion(item)}
        showGradients={true}
        enableArrowNavigation={true}
        displayScrollbar={true}
        />
      </div>

      <div style={{ flex: 1, height: '100%' }}>
        <GuineaMap regionKey={selectedRegion ?? "default"} />
      </div>
    </div>
  );
}