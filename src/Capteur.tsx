import "./Components.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Capteur() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [isMeasureOpen, setMeasureOpen] = useState(false)
    const [isCaptureOpen, setCaptureOpen] = useState(false);
    const [measurement, setMeasurement] = useState("CO2");
return(
<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
    <div style={{ width: "100%", display: "flex", flexDirection: "column"}}>
                <h1 style={{ color: "#535bf2", fontWeight: "bold", margin: "0 1rem 0 1rem" }}>
                Sensors
                </h1>
                <p style={{ color: "#000232", marginLeft: "1rem", marginTop: "0.25rem" }}>
                Add and Analyse Data from Sensors
                </p>    
        </div>
    <div className="AddSensorContainer">
        <div>
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
        <div>
            <div>
                <button className="ModalButton" onClick={() => setMeasureOpen(true)}>
                    Add New Measurement
                </button>
            </div>

            {isMeasureOpen && (
                <div className="DarkOverlay">
                    <div className="ModalWindow">
                        <div className= "ModalHeader">Enter Details</div>
                        <div style={{ padding: "2rem" }}>
                        <input type="text" placeholder="Enter Sensor ID" className="ModalInput"/>
                        <div className="Dropdown" style={{marginBottom:".5rem"}}>
                            <select
                            id="timeLength"
                            name="selectTimeLength"
                            value={measurement}
                            onChange={(e) => setMeasurement(e.target.value)}
                            >
                            <option style={{ color: "black" }} value="CO2">CO2</option>
                            <option style={{ color: "black" }} value="PM2">PM2</option>
                            <option style={{ color: "black" }} value="PM10">PM10</option>
                            <option style={{ color: "black" }} value="AQI">AQI</option>

                            </select>
                        </div>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText="Select a date"
                            className="ModalDataPicker"
                            calendarClassName="react-datepicker-custom"
                            popperPlacement="bottom"
                        />
                        <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                            <button className = "ModalCancelButton" onClick={() => setMeasureOpen(false)}>
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



    </div>

</div>
)
}