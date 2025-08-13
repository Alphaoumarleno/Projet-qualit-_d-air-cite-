import "./Parameter.css";
import {useState} from "react";
import {guineaRegions,type RegionInfo} from "./GuineaGeoData";


export default function Parameter() {
    const [isRegionOpen, setRegionOpen] = useState(false);
    const [isVillageOpen, setVillageOpen] = useState(false);
    const [isCaptureOpen, setCaptureOpen] = useState(false);

    return(
        <div>   
            <div>
                <h1 style={{color: "#535bf2", fontWeight: "bold", marginLeft: "1rem" }} >
                Parameter</h1>
                <p style={{color: "#000232",marginLeft: "1rem" }}>Add and Change Parameters</p>
            </div>
            <div>
            <button className="ModalButton"
                onClick={() => setRegionOpen(true)}
            >
                Add New Region
            </button>
            </div>

            {isRegionOpen && (
            <div
                style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                
                }}
            >
                <div
                style={{
                    backgroundColor: "white",
                    padding: "2rem",
                    width: "400px",
                    border: "2px solid #535bf2",
                    borderRadius: "10px",
                }}
                >
                <h2 style= {{marginBottom: "1rem",color: "#535bf2", fontWeight: "bold"}}>Enter Details</h2>
                <input type="text" placeholder="Enter some info" style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }} />
                <input type="number" placeholder="Enter number" style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }} />
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                    <button
                    style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
                    onClick={() => setRegionOpen(false)}
                    >
                    Cancel
                    </button>
                    <button
                    style={{ padding: "0.5rem 1rem", cursor: "pointer", backgroundColor: "#535bf2", color: "white" }}
                    onClick={() => {
                        alert("Details submitted!");
                        setRegionOpen(false);
                    }}
                    >
                    Submit
                    </button>
                </div>
                </div>
            </div>
            )}
            <div>
            <button className="ModalButton"
                onClick={() => setVillageOpen(true)}
            >
                Add New Region
            </button>
        </div>

            {isVillageOpen && (
            <div
                style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                
                }}
            >
                <div
                style={{
                    backgroundColor: "white",
                    padding: "2rem",
                    width: "400px",
                    border: "2px solid #535bf2",
                    borderRadius: "10px",
                }}
                >
                <h2 style= {{marginBottom: "1rem",color: "#535bf2", fontWeight: "bold"}}>Enter Details</h2>
                <input type="text" placeholder="Enter some info" style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }} />
                <input type="number" placeholder="Enter number" style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }} />
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                    <button
                    style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
                    onClick={() => setVillageOpen(false)}
                    >
                    Cancel
                    </button>
                    <button
                    style={{ padding: "0.5rem 1rem", cursor: "pointer", backgroundColor: "#535bf2", color: "white" }}
                    onClick={() => {
                        alert("Details submitted!");
                        setVillageOpen(false);
                    }}
                    >
                    Submit
                    </button>
                </div>
                </div>
            </div>
            )}
            <div>
            <button className="ModalButton"
                onClick={() => setCaptureOpen(true)}
            >
                Add New Sensor
            </button>
        </div>

            {isCaptureOpen && (
            <div
                style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                
                }}
            >
                <div
                style={{
                    backgroundColor: "white",
                    padding: "2rem",
                    width: "400px",
                    border: "2px solid #535bf2",
                    borderRadius: "10px",
                }}
                >
                <h2 style= {{marginBottom: "1rem",color: "#535bf2", fontWeight: "bold"}}>Enter Details</h2>
                <input type="text" placeholder="Enter some info" style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }} />
                <input type="number" placeholder="Enter number" style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }} />
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                    <button
                    style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
                    onClick={() => setCaptureOpen(false)}
                    >
                    Cancel
                    </button>
                    <button
                    style={{ padding: "0.5rem 1rem", cursor: "pointer", backgroundColor: "#535bf2", color: "white" }}
                    onClick={() => {
                        alert("Details submitted!");
                        setCaptureOpen(false);
                    }}
                    >
                    Submit
                    </button>
                </div>
                </div>
            </div>
            )}

        </div>






    )
}