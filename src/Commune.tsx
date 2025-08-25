import "./Components.css";
import { useState } from "react";
import { guineaRegions, type VillageInfo } from "./GuineaGeoData";


export default function Commune() {

const [selectedVillage, setSelectedVillage] = useState("");
const [isVillageOpen, setVillageOpen] = useState(false);
const villagesArray: VillageInfo[] = Object.values(guineaRegions)
    .flatMap(region => region.villages);
return(
<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
    <div style={{ width: "100%", display: "flex", flexDirection: "column"}}>
                <h1 style={{ color: "#535bf2", fontWeight: "bold", margin: "0 1rem 0 1rem" }}>
                Villages
                </h1>
                <p style={{ color: "#000232", marginLeft: "1rem", marginTop: "0.25rem" }}>
                Add and Analyse Villages
                </p>    
        </div>
    <div className="AddCommuneContainer">
        <div>
         <div>
                <button className="ModalButton" onClick={() => setVillageOpen(true)}>
                    Add New Villages
                </button>
            </div>


            {isVillageOpen && (
                <div className="DarkOverlay">
                    <div className="ModalWindow">
                        <div className="ModalHeader">Enter Village</div>
                        <div style={{ padding: "2rem" }}>
                            <input type="text" placeholder="Enter ID" className="ModalInput" />
                            <div className="Dropdown">
                                <select
                                    id="village"
                                    name="selectVillage"
                                    value={selectedVillage}
                                    onChange={(e) => setSelectedVillage(e.target.value)}
                                >
                                    {villagesArray.map((village: VillageInfo) => (
                                        <option key={village.name} value={village.name} style={{ color: "black" }}>
                                            {village.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1rem" }}>
                                <button className="ModalCancelButton" onClick={() => setVillageOpen(false)}>
                                    Cancel
                                </button>
                                <button className="ModalSubmitButton" onClick={() => { alert("Details submitted!"); setVillageOpen(false); }}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        <div/>



    </div>

</div>
</div>
)
}