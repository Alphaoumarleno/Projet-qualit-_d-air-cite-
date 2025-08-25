import "./Components.css";
import {useState} from "react";
import {guineaRegions,type RegionInfo} from "./GuineaGeoData";
import notificationbell from "./assets/notificationbell.svg";
import user_icon from "./assets/user_icon.png";
export default function DashboardInterface() {
  const defaultRegion = "Conakry";
  const [selectedRegion, setSelectedRegion] = useState(defaultRegion);
  const [timeLength, setTimeLength] = useState("Last 24 Hours");
  const regionsArray = Object.values(guineaRegions);
    return(
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
        <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
            <div>
                <h1 style={{ color: "#535bf2", fontWeight: "bold", margin: "0 1rem 0 1rem" }}>
                Dashboard
                </h1>
                <p style={{ color: "#000232", marginLeft: "1rem", marginTop: "0.25rem" }}>
                Analyse Air Quality Data and take action
                </p>    
            </div>
            <button className="UserButton"
                onClick={() => alert("Log in")}
            >
                <img src={user_icon} alt="Logo" style={{ height: "30px", width: "30px" }} />
            </button>
        </div>

        <div className="AlertContainer">
            <button className="Bell_Button"
            onClick={() => alert("These are your notifications")}
                >    
                <img src={notificationbell} alt="Bell" style={{height: "30px", width: "30px"}}
                    className="Bell_icon" />
            </button>        
            <p> Hourly report with Report Generator</p>
        </div>
            <div style ={{display: "flex", flexDirection: "row", gap: "1rem", marginTop: "1rem"}}>
                <div className="Dropdown" style={{ marginLeft: "1rem"  }}>
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
                <div className="Dropdown" >
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
                    <button className= "SearchButton"
                    onClick={() => {
                        alert(`Generating report for ${selectedRegion} over ${timeLength}.`);
                    }}
                    >
                    Search Data
                    </button>
                </div>
            </div>

      <div style={{display: "flex", 
                flexDirection: "row", 
                marginTop: "1rem", 
                marginLeft: "1rem", 
                marginRight: "1rem",
                justifyContent: "space-between", 
                alignItems: "center"}}>
        <p>
          <strong>{selectedRegion}</strong> ┃ <strong>{timeLength}</strong> 
        </p>
        
      </div> 
      <div style={{ marginTop: "1rem", display: "flex", flexDirection: "row", gap: "1rem" }}>
        <div className = "CardContainer" style={{ marginLeft: "1rem" }}>      
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
        <div className ="GraphContainer">
            <p>Graph Placeholder</p>
        </div>
      </div>
    </div>
    );
}