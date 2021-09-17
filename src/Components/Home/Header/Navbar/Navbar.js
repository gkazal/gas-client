import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/Logo-1.png';
import Login from '../../../Authentication/Login/Login';


const Navbar = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light col-md-10 offset-md-1">
                
                <Link class="nav-link mr-3" to="/home"><img style={{ width: '100px' }} src={logo} alt="" /></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav ml-auto">
                       
                        <li class="nav-item">
                            <Link class="nav-link mr-3" to="#">About US</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-3" to="/booking">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-3" to="/booking">Help</Link>
                        </li>
                        <li class="nav-item active">
                            <Link onClick={openModal} class="nav-link mr-3" to="">Login </Link>
                            <Login modalIsOpen={modalIsOpen} closeModal={closeModal}></Login>
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;