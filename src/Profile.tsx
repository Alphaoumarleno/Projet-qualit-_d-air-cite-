import "./Components.css";
import { useState } from "react";

export default function Profile() {
return(
    <div style={{ width: "100%", display: "flex", flexDirection: "column"}}>
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
                    <h1 style={{ color: "#535bf2", fontWeight: "bold", margin: "0 1rem 0 1rem" }}>
                    Profile
                    </h1>
                    <p style={{ color: "#000232", marginLeft: "1rem", marginTop: "0.25rem" }}>
                    Create Profile
                    </p>    
            </div>
        <div className="SignInContainer">
            <div style={{ display: "flex", flexDirection: "column"}}>
                <input type="text" placeholder="Enter Username" className="ModalInput"/>
                <input type="text" placeholder="Enter Email" className="ModalInput"/>
                <input type="text" placeholder="Enter Password" className="ModalInput"/>
            </div>
            <div>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1rem" }}>
                    <button className="ModalCancelButton" onClick={() => {alert("SignUp Cancelled")}}>
                        Cancel
                    </button>
                    <button className="ModalSubmitButton" onClick={() => { alert("Sign up completed")}}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
)
}