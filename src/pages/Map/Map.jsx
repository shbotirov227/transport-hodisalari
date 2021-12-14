import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "../../utils/api";
import Header from "../../containers/Header/Header";
import "./Map.scss";

const containerStyle = {
    width: "100%",
    height: "60%",
};

const Map = () => {
    const [places, setPlaces] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        axios.get('/open_data/')
        .then(res => {
            res.data.results.map((item) => {
                let location = item.location.split(',');
                setPlaces({ lat: +location[0], lng: +location[1] });
                return +location;
            })
        }).catch(err => err)
    }, []);
    
    console.log(places);

    return (
        <div className="Map">
            <LoadScript googleMapsApiKey="AIzaSyBLLkCb1FPXWHHHgdlrv5VEPRnVOfrhz3o">
                <Header title="Xarita" />
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={places}
                    zoom={8}
                >
                <Marker
                    center={places.lng}
                    position={places}
                    onClick={() => console.log("You clicked me!")}
                />
                </GoogleMap>

            </LoadScript>
        </div>
    );
};
export default Map;

// 22a61631-109c-4315-988a-adcdc39d14fb =====> api-key-yandex-map

// AIzaSyCliwg3-Nq1Q_L9GFgg131MKkse_A4Lvyg =====> api-key-google-maps-api

// AIzaSyCliwg3-Nq1Q_L9GFgg131MKkse_A4Lvyg
