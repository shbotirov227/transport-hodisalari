import React, { useState, useEffect } from "react";
import Header from "../../containers/Header/Header";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "../../utils/api";

import "./Map.scss";

const containerStyle = {
    width: "100%",
    height: "60%",
};

const Map = () => {
    const [places, setPlaces] = useState({ lat: 40.0114, lng: 67.6014 });

    return (
        <div className="Map">
            <LoadScript googleMapsApiKey="AIzaSyBLLkCb1FPXWHHHgdlrv5VEPRnVOfrhz3o">
                <Header title="Map" />
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={places}
                    places={places}
                    zoom={10}
                ></GoogleMap>

                <Marker
                    center={places}
                    key="marker_1"
                    position={places}
                    onClick={() => console.log("You clicked me!")}
                />
            </LoadScript>
        </div>
    );
};
export default Map;

// 22a61631-109c-4315-988a-adcdc39d14fb =====> api-key-yandex-map

// AIzaSyCliwg3 - Nq1Q_L9GFgg131MKkse_A4Lvyg =====> api-key-google-maps-api

// AIzaSyCliwg3 - Nq1Q_L9GFgg131MKkse_A4Lvyg
