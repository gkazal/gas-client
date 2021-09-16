import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../Home/Header/Navbar/Navbar';
import './Location.css'

import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import fakeData from '../FakeData/FakeDate';
import { useHistory } from 'react-router';


const Location = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    const [data, setData] = useState(fakeData)
    console.log(data)

    // get single gas coordinates from data
    const coordinates = data.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }))
    console.log(coordinates)

    const [viewport, setViewport] = useState({
        latitude: 23.8319,
        longitude: 90.4178,
        zoom: 14,
        width: '100%',
        height: '700px',
        pitch: 0,

    });

    // const [selectedLocation, setSelectedLocation] = useState({})
    // console.log(selectedLocation.title)
     const history = useHistory()
    const handleSelectedLocation = (result) => {
        // const {name} = result.title

        history.push(`/chooseLocation/${result.title}`)

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="position-relative">
                <ReactMapGL
                    mapboxApiAccessToken={"pk.eyJ1IjoiZ2stMDk3IiwiYSI6ImNrdGw2aXc2ajFzbWwyd2s0aTBlbmcwY2EifQ.73dBdowGv1oXe6D6ZEUQOQ"}
                    {...viewport}
                    mapStyle={'mapbox://styles/mapbox/basic-v9'}

                    onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
                >

                    {data.map(result => (
                        <div>
                            <Marker
                                longitude={result.long}
                                latitude={result.lat}
                                offsetLeft={-20}
                                offsetTop={-10}
                            >

                                <p onClick={() => handleSelectedLocation(result)} className="cursor-pointer text-2xl animate-bounce"
                                >📍{result.title}</p>
                            </Marker>
                            
                            {/* { selectedLocation.long === result.long ? (
                                <Popup onClose={() => setSelectedLocation({})}
                                    closeOnClick={true}

                                    latitude={result.lat}
                                    longitude={result.long}
                                >
                                    {result.title} <br />
                                    Price: {result.price} <br />
                                    Latitude: {result.lat} <br />
                                    Longitude: {result.long}
                                </Popup>

                            ) : (
                                false
                            )
                            
                            } */}

                        </div>
                    ))}

                </ReactMapGL>

                <div>
                    <div class="card card-location" style={{ width: '20rem' }}>
                        <div className="topForm">
                            <h2 className="text-white">Give Those Information we need to place your order</h2>
                        </div>
                        <div class="card-body">
                            <p class="card-title">Your Location</p>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="">
                                    <div class="form-group mb-2 ">
                                        <div className="searchContainer form-inline">
                                            <FontAwesomeIcon className="searchIcon searchIconOrder" icon={faLocationArrow}></FontAwesomeIcon>
                                            <input class="searchBox" type="search" name="search" placeholder={data[0].area} />
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Location;