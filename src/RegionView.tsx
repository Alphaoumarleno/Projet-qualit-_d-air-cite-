import { useState } from 'react';
import GuineaMap from './GuineaMap.js';
import AnimatedList from './AnimatedList.js'
import { guineaRegions } from './guinearegions.js'; 


const regionNames = Object.keys(guineaRegions).filter(key => key !== 'default');

export default function RegionView() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);


  return (
    <div style={{ display: 'flex', width: '100%', gap: '1rem' }}>
      <div
        style={{
          flexBasis:"25%",
          background: '#eee',
          padding: '1rem',
          overflowY: 'auto',
          height: "100%",
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

      <div style={{ flex: 1, height: '100%', padding: '.5rem' }}>
        <GuineaMap regionKey={selectedRegion ?? "default"} />
      </div>
    </div>
  );
}