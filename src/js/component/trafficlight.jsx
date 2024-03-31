import React, { useState } from "react";

const TrafficLight = () => {
    const [shadowColorRed, setShadowColorRed] = useState("");
    const [shadowColorOrange, setShadowColorOrange] = useState("");
    const [shadowColorGreen, setShadowColorGreen] = useState("");
    
    // Resaltar luz roja y desactivar resaltado de las otras luces
    function changeShadowRed() {
        setShadowColorRed("0px 5px 50px 20px whitesmoke");
        setShadowColorOrange("");
        setShadowColorGreen("");
    }

    // Resaltar luz Naranja y desactivar resaltado de las otras luces
    function changeShadowOrange(){
        setShadowColorOrange("0px 5px 50px 20px whitesmoke");
        setShadowColorRed("");
        setShadowColorGreen("");
    }

    // Resaltar luz Verde y desactivar resaltado de las otras luces
    function changeShadowGreen(){
        setShadowColorGreen("0px 5px 50px 20px whitesmoke");
        setShadowColorRed("");
        setShadowColorOrange("");
    }

    return (
        <div className="container p-5 mx-auto">
            <div style={{backgroundColor:"black", height:"150px", width:"15px", marginLeft:"467px"}}></div>
            <div className="row py-2 rounded"  style={{width:"133px", marginLeft: "410px", backgroundColor:"black"}}>
                <div className="col-12">
                    <button onClick={changeShadowRed} style={{boxShadow:shadowColorRed, backgroundColor:"red", height:"110px", width:"110px"}} className="rounded-circle" ></button>
                </div>
                <div className="col-12">
                    <button onClick={changeShadowOrange} style={{boxShadow:shadowColorOrange, backgroundColor: 'orange', height:"110px", width:"110px"}} className="rounded-circle" ></button>
                </div>
                <div className="col-12">
                    <button onClick={changeShadowGreen} style={{boxShadow:shadowColorGreen, backgroundColor: 'green', height:"110px", width:"110px"}} className="rounded-circle" ></button>
                </div>
            </div>
        </div>
    );
}

export default TrafficLight;
