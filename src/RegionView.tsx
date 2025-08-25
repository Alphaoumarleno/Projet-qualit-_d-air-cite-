import { useState } from 'react';
import GuineaMap from './GuineaMap.tsx';
import AnimatedList from './AnimatedList.tsx'
import { guineaRegions, type RegionInfo} from "./GuineaGeoData";

const regionNames = Object.keys(guineaRegions).filter(key => key !== 'default');

export default function RegionView() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  


const [isRegionOpen, setRegionOpen] = useState(false);
const defaultRegion = "Conakry";
const [selectedModalRegion, setSelectedModalRegion] = useState(defaultRegion);
const regionsArray = Object.values(guineaRegions);



  return (
    <div style={{ display: 'flex', width: '100%', gap: '1rem' }}>
      <div style={{display:"flex",flexDirection:"column"}}>
        <div
        style={{
          flexBasis:"25%",
          background: '#eee',
          padding: '1rem',
          height: "10%",
          borderRadius: 8,
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          marginBottom:"1rem"
        }}
      >
      <div>
        <input type="text" placeholder="Enter Region ID" className="ModalInput"/>
      </div>
    <div className="Dropdown">
            <select
                id="region"
                name="selectRegion"
                value={selectedModalRegion}
                onChange={(e) => setSelectedModalRegion(e.target.value)}
            >
                {regionsArray.map((region: RegionInfo) => (
                    <option key={region.name} value={region.name} style={{ color: "black" }}>
                        {region.name}
                    </option>
                ))}
            </select>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1rem" }}>
            <button className="ModalCancelButton" onClick={() => setRegionOpen(false)}>
                Cancel
            </button>
            <button className="ModalSubmitButton" onClick={() => { alert("Details submitted!"); setRegionOpen(false); }}>
                Submit
            </button>
        </div>

      </div>

      <div
        style={{
          flexBasis:"25%",
          background: '#eee',
          padding: '1rem',
          overflowY: 'auto',
          height: "auto",
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
      </div>
      <div style={{ flex: 1, height: '100%', padding: '.5rem' }}>
        <GuineaMap regionKey={selectedRegion ?? "default"} />
      </div>
    </div>
  );
}