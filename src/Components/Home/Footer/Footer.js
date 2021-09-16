import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import copyright from '../../../images/copyright.png'
import global from '../../../images/global.png'
import projectX from '../../../images/PorjectXlogo.png'

const Footer = () => {
    return (
        <div className="footer" style={{ marginTop: '190px' }} >
            <div className="col-md-10 offset-md-1 logo">
                <img src={projectX} alt="" />
            </div>

            <div className=" d-flex justify-content-center">
                <div className="row  col-md-10 offset-md-1 ">
                    <div className="row footerBrand">
                        <div>
                            <img className="mr-2" src={copyright} alt="" /><small className="text-white mr-5">All Right Reserved ProjectX Limited</small>
                        </div>
                        <div>
                            <img className="mr-2" src={global} alt="" /> <small className="text-white">http://projectX.com.bd</small>
                        </div>
                    </div>
                    {/* <ul className="mr-auto">
                        <li>
                            <img className="mr-2" src={copyright} alt="" /><small className="text-white mr-5">All Right Reserved ProjectX Limited</small>
                            <img className="mr-2" src={global} alt="" /> <small className="text-white">http://projectX.com.bd</small>
                        </li>
                    </ul> */}

                    <div className="ml-auto">
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon active-icon" icon={faTwitter} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon active-icon" icon={faInstagram} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Footer;