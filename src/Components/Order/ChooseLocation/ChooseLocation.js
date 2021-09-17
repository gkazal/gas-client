import React, { useState } from 'react';
import Navbar from '../../Home/Header/Navbar/Navbar';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import './ChooseLocation.css'
import { Link, useParams } from 'react-router-dom';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import fakeData from '../FakeData/FakeDate';
import Modal from 'react-modal';


const ChooseLocation = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    const [data, setData] = useState(fakeData)

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

    const [selectedLocation, setSelectedLocation] = useState({})
    console.log(selectedLocation)


    const { title } = useParams();


    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    Modal.setAppElement('#root');


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

                                <p onClick={() => setSelectedLocation(result)} className="cursor-pointer text-2xl animate-bounce"
                                >📍{result.title}</p>

                            </Marker>
                            { selectedLocation.long === result.long ? (
                                <Popup onClose={() => setSelectedLocation({})}
                                    closeOnClick={true}

                                    latitude={result.lat}
                                    longitude={result.long}
                                >
                                    {result.title} <br />
                                    Price: {result.price} <br />
                                    Latitude: {result.lat} <br />
                                    Longitude: {result.long} <br />
                                    <img style={{ height: '80px', width: '80px' }} src={result.img} alt="" />
                                </Popup>

                            ) : (
                                false
                            )
                            }
                        </div>
                    ))}


                    {/* <Marker latitude={23.833} longitude={90.417} >
                        <p  className="curser-pointer text-2xl animate-bounce">📍</p>

                    </Marker>
                     */}

                </ReactMapGL>

                <div>
                    <div class="card choose-location" style={{ width: '20rem' }}>
                        <div className=" topForm">
                            <div className="topStyleForm">
                                <h2 className="text-white">Give Those Information we need to place your order</h2>
                            </div>
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
                        <div class="card-body">
                            <p class="card-title">Your Choose Place </p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="">
                                    <div class="form-group mb-2 ">
                                        <div className="searchContainer form-inline">
                                            <FontAwesomeIcon className="searchIcon searchIconOrder" icon={faLocationArrow}></FontAwesomeIcon>
                                            <input class="searchBox" type="search" name="search" placeholder={title} />
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <p className="text-center">Approximately Delivery time <br /><span className="font-weight-bold">20 minutes</span></p>
                                    </div>

                                </div>
                            </form>
                            <div>
                                <button onClick={openModal} className="orderButton " type="submit">Order Now</button>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >

                                    <h2 style={{ padding: '30px' }}>You have sucessfully ordered</h2>
                                </Modal>
                            </div>
                            <p className="text-center">
                                <Link to="home"> Schedule Order</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ChooseLocation;