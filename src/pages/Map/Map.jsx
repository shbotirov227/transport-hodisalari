import React, { useState } from "react";
// import GoogleMapReact from "google-map-react";
import Header from "../../containers/Header/Header";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import {} from "@react-google-maps/api";

import "./Map.scss";

const containerStyle = {
    width: "100%",
    height: "100%",
};

// const center = {
//     lat: 42.0860671854,
//     lng: 55.9654683946,
// };

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
    const [center, ] = useState({ lat: 41.311081, lng: 69.240562 });
    // const [zoom, setZoom] = useState(11);

    let lat = 53.339688;
    let lng = -6.236688;

    return (
        <div className="Map">
            <LoadScript googleMapsApiKey="AIzaSyBLLkCb1FPXWHHHgdlrv5VEPRnVOfrhz3o">
                <Header title="Map" />
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={14}
                ></GoogleMap>

                <Marker
                    // key={index}
                    // id={index}
                    position={{
                        lat: lat,
                        lng: lng,
                    }}
                    onClick={() => console.log("You clicked me!")}
                />
            </LoadScript>
            {/* <MapGoogle /> */}

            {/* <MapChart />     */}

            {/* <div style={{ height: "100px", width: "100px" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "add your api key" }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                    <AnyReactComponent
                        lat={11.0168}
                        lng={76.9558}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div> */}
        </div>
    );
};

export default Map;

// 22a61631-109c-4315-988a-adcdc39d14fb =====> api-key-yandex-map

// AIzaSyCliwg3 - Nq1Q_L9GFgg131MKkse_A4Lvyg =====> api-key-google-maps-api
