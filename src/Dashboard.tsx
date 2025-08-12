import "./Dashboard.css";
import {useState} from "react";
import {guineaRegions,type RegionInfo} from "./guinearegions";

export default function DashboardInterface() {
    const defaultRegion = guineaRegions.default.name;
  const [selectedRegion, setSelectedRegion] = useState(defaultRegion);
  const [timeLength, setTimeLength] = useState("Last 24 Hours");
  const regionsArray = Object.values(guineaRegions);

    return(
        <div>
        <div>
            <h1 style={{color: "#535bf2", fontWeight: "bold"}} >
            Dashboard</h1>
            <p style={{color: "#000232"}}>Analyse Air Quality Data and take action</p>
        </div>
        <div className="Container" style={{marginTop: "1rem"}}>
            <p >Dashboard Content </p>
                    
            <p> Hourly report with Report Generator</p>
        </div>
            <div style ={{display: "flex", flexDirection: "row", gap: "1rem", marginTop: "1rem"}}>
                <div className="Dropdown">
                    <select
                    id="region"
                    name="selectRegion"
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    >
                    {regionsArray.map((region: RegionInfo) => (
                        <option key={region.name} value={region.name} style={{ color: "black" }}>
                        {region.name}
                        </option>
                    ))}
                    </select>
                </div>
                <div className="Dropdown">
                    <select
                    id="timeLength"
                    name="selectTimeLength"
                    value={timeLength}
                    onChange={(e) => setTimeLength(e.target.value)}
                    >
                    <option style={{ color: "black" }} value="Last 24 Hours">Last 24 Hours</option>
                    <option style={{ color: "black" }} value="Last Week">Last Week</option>s
                    <option style={{ color: "black" }} value="Last Month">Last Month</option>
                    </select>
                </div>
                <div style ={{display: "flex", alignItems: "flex-end",justifyContent: "flex-end", width: "100%"}}>
                    <button
                    style={{
                        cursor: "pointer",
                        width:"200px",
                        height: "40px",
                        backgroundColor: "#535bf2", 
                        color: "white",
                        border: "2px solid #535bf2",
                        padding: "1rem",
                        display:"flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4rem"
                    }}
                    onClick={() => {
                        alert(`Generating report for ${selectedRegion} over ${timeLength}`);
                    }}
                    >
                    Search Data
                    </button>
                </div>
            </div>

      <div style={{ marginTop: "1rem" }}>
        <p>
          <strong>{selectedRegion}</strong> ┃ <strong>{timeLength}</strong> 
        </p>
      </div> 
      <div style={{ marginTop: "1rem", display: "flex", flexDirection: "row", gap: "1rem" }}>
        <div className = "CardContainer">      
            <p><strong>Air Quality Index (AQI):</strong> 50 (Good)
            </p>
        </div>
        <div className = "CardContainer"> 
            <p>
            <strong>PM2.5 Level:</strong> 12 µg/m³ (Good)
            </p>
        </div>
        <div className = "CardContainer">
            <p>
            <strong>PM10 Level:</strong> 20 µg/m³ (Good)
            </p>
        </div>
      </div>
      <div>
        <div className ="GraphContainer" style={{ marginTop: "1rem" }}>
            <p>Graph Placeholder</p>
        </div>
      </div>
    </div>
    );
}