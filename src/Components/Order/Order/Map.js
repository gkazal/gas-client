import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import mapPng from '../../../images/mappng-3.png'
const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 23.83,
        longitude: 90.417,
        zoom: 13,
        width: '1100px',
        height: '500px',
        pitch: 30,

    });

    return (
        <ReactMapGL
            mapboxApiAccessToken={"pk.eyJ1IjoiZ2stMDk3IiwiYSI6ImNrdGw2aXc2ajFzbWwyd2s0aTBlbmcwY2EifQ.73dBdowGv1oXe6D6ZEUQOQ"}
            {...viewport}
            mapStyle={'mapbox://styles/mapbox/basic-v9'}

            onViewportChange={(newView) => setViewport(newView)}
        >
            <Marker latitude={23.83} longitude={90.417} offsetLeft={-20} offsetTop={-10}>
                <img src={mapPng} style={{width:'50px'}} alt=""/>
            </Marker>
        </ReactMapGL>


    );
};

export default Map;