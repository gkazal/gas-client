import React from 'react';
import image from '../../../../images/Group 1.png';
import timer from '../../../../images/timer.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import './HeaderBody.css'
import { useHistory } from 'react-router';

const HeaderBody = () => {

    const history = useHistory()
    const handleSearch = () => {
        history.push(`/order`)
    }


    return (
        <div>
            <main className="row d-flex align-items-center offset-md-1" style={{ marginTop: '150px' }} >
                <div className="col-md-6">
                    <div className="headerText" >
                        <h1 style={{fontSize: '55px !important'}} className="text-bolt">Get Your Product  <br /> Delivered </h1>

                        <div className="mt-4 d-flex">
                            <img style={{ width: '15px' }} src={timer} alt="" /><small className="ml-2"> in 15 minutes</small>
                        </div>
                        <small style={{ color: '#C0C0C0	' }}> Our Service is Currently Available on Dhaka city  </small>
                        <div className="mt-4">
                            <form class="form-inline">
                                <div class="form-group mb-2 ">
                                    <div className="searchContainer form-inline">
                                        <FontAwesomeIcon className="searchIcon" icon={faLocationArrow}></FontAwesomeIcon>
                                        <input class="searchBox" type="search" name="search" placeholder="Search Location..." />
                                    </div>
                                </div>
                                <button  onClick={()=> handleSearch()} type="button" class="btn btn-submit mb-2 ml-2">Search</button>
                            </form>
                        </div>

                        <div className="button mt-4">
                            <button>
                                <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon> <small>Gulshan-01</small>
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon> <small>Nikunjo-02</small>
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon> <small>Gulshan</small>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="headerImage col-md-6 d-flex justify-content-center">
                    <img className="headerIcon" src={image} alt="" />
                </div>
            </main>
        </div>
    );
};

export default HeaderBody;