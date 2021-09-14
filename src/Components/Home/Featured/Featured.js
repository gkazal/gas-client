import React from 'react';
import image1 from '../../../images/feature.png';
import image2 from '../../../images/feature-2.png';
import logo1 from '../../../images/ser-1.png';
import './Featured.css'
import imageIcon from '../../../images/horizontalImage.png'

const Featured = () => {
    return (
        <div>
            <div className="row d-flex justify-content-center" style={{ marginTop: '190px' }}>
                <div className=" mr-5 text-center">
                    <img src={image1} alt="" />
                    <p>Search From Your Location</p>
                </div>
                <div className="text-center">
                    <img style={{ width: '350px' }} src={image2} alt="" />
                    <p>Supper Fast Delivery</p>
                    <small >Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Maiores eum ratione inventore magnam, <br /> expedita voluptates delectus perspiciatis excepturi ?</small>
                </div>
                <img src={logo1} alt="" />

            </div>

            <div className="d-flex justify-content-center" style={{marginTop: '100px' }}>
                <img  src={imageIcon} style={{width: '30%'}} alt=""/>
            </div>

{/* 
            <div className="imageParent" style={{ marginTop: '50px', padding: '10px' }}>
                <div className="horizontal">
                    <hr style={{ width: '30%' }} />
                </div>
                <div className="horizontalIcon d-flex justify-content-center"  >
                    <img style={{ backgroundColor: 'green', padding: '7px', borderRadius: '20px', marginRight:'40px' }} src={logo1} alt="" />
                    <img style={{ backgroundColor: 'green', padding: '7px', borderRadius: '20px', marginRight:'40px' }} src={logo1} alt="" />
                    <img style={{ backgroundColor: 'green', padding: '7px', borderRadius: '20px' }} src={logo1} alt="" />
                </div>
            </div> */}


        </div>
    );
};

export default Featured;