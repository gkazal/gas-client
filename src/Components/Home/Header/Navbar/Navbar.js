import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/Logo-1.png';
const Navbar = () => {
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light col-md-10 offset-md-1">
                <img style={{ width: '100px' }} src={logo} alt="" />
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
                            <Link class="nav-link mr-3" to="/login">Login </Link>
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;