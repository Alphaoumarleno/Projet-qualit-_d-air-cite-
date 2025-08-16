import "./Components.css";
import { useState } from "react";
import { guineaRegions, type RegionInfo, type VillageInfo } from "./GuineaGeoData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Parameter() {
    const [isRegionOpen, setRegionOpen] = useState(false);
    const [isVillageOpen, setVillageOpen] = useState(false);
    const [isCaptureOpen, setCaptureOpen] = useState(false);

    const defaultRegion = "Conakry";
    const [selectedRegion, setSelectedRegion] = useState(defaultRegion);
    const [selectedVillage, setSelectedVillage] = useState("");
    const [startDate, setStartDate] = useState<Date | null>(null);
    const regionsArray = Object.values(guineaRegions);

    const villagesArray: VillageInfo[] = Object.values(guineaRegions)
        .flatMap(region => region.villages);

    return (
        <div>
            <div>
                <h1 style={{ color: "#535bf2", fontWeight: "bold", marginLeft: "1rem" }}>
                    Parameter
                </h1>
                <p style={{ color: "#000232", marginLeft: "1rem" }}>Add and Change Parameters</p>
            </div>


            <div>
                <button className="ModalButton" onClick={() => setRegionOpen(true)}>
                    Add New Region
                </button>
            </div>


            {isRegionOpen && (
                <div className="DarkOverlay">
                    <div className="ModalWindow">
                        <div className="ModalHeader">Enter Region</div>
                        <div style={{ padding: "2rem" }}>
                            <input type="text" placeholder="Enter ID" className="ModalInput" />
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
                            <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1rem" }}>
                                <button className="ModalCancelButton" onClick={() => setRegionOpen(false)}>
                                    Cancel
                                </button>
                                <button className="ModalSubmitButton" onClick={() => { alert("Details submitted!"); setRegionOpen(false); }}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            <div>
                <button className="ModalButton" onClick={() => setVillageOpen(true)}>
                    Add New Village
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

            <div>
                <button className="ModalButton" onClick={() => setCaptureOpen(true)}>
                    Add New Sensor
                </button>
            </div>

            {isCaptureOpen && (
                <div className="DarkOverlay">
                    <div className="ModalWindow">
                        <div className= "ModalHeader">Enter Details</div>
                        <div style={{ padding: "2rem" }}>
                        <input type="text" placeholder="Enter Sensor ID" className="ModalInput"/>
                        <input type="text" placeholder="Enter Sensor Code" className="ModalInput"/>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText="Select a date"
                            className="ModalDataPicker"
                            calendarClassName="react-datepicker-custom"
                            popperPlacement="bottom"
                        />
                        <input type="text" placeholder="Enter Type" className="ModalInput"/>
                        <input type="text" placeholder="Enter Village ID" className="ModalInput"/>
                        <input type="text" placeholder="Enter some info" className="ModalInput"/>
                        

                        <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                            <button className = "ModalCancelButton" onClick={() => setCaptureOpen(false)}>
                                Cancel
                            </button>
                            <button className ="ModalSubmitButton" onClick={() => { alert("Details submitted!"); setCaptureOpen(false); }}>
                                Submit
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
