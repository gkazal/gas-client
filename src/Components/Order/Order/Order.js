import React, { useState } from 'react';
import Navbar from '../../Home/Header/Navbar/Navbar';
import './Order.css'
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import fakeData from '../FakeData/FakeDate';
import { useHistory } from 'react-router';


const Order = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const history = useHistory();
    const onSubmit = res => {
        console.log(res)
        history.push(`/location`)
    };
    const [data, setData] = useState(fakeData)

    // get single gas coordinates from data
    const coordinates = data.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }))

    const [viewport, setViewport] = useState({
        latitude: 23.8319,
        longitude: 90.4178,
        zoom: 14,
        width: '100%',
        height: '700px',
        pitch: 0,

    });
    return (
        <div >
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
                            </Marker>
                        </div>
                    ))}

                </ReactMapGL>

                <div class="card" style={{ width: '20rem' }}>
                    <div className=" topForm">
                        <div className="topStyleForm">
                            <h2 className="text-white">Give Those Information we need to place your order</h2>
                        </div>
                    </div>
                    <div class="card-body">
                        <p className="card-title">Your Location</p>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="">
                                <div class="form-group mb-2 ">
                                    <div className="searchContainer form-inline">
                                        <FontAwesomeIcon className="searchIcon searchIconOrder" icon={faLocationArrow}></FontAwesomeIcon>
                                        <input class="searchBox" type="search" name="search" placeholder="" />
                                    </div>
                                </div>
                                <div className="mt-5 mb-5">
                                    <input className="orderSearchButton" type="submit" value="Search" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;