import React from 'react';
import phone from '../../../images/Phone.png';
import google from '../../../images/googlePlay.png'
import apple from '../../../images/ios.png'
import './Details.css'

const Details = () => {
    return (
        <div className="" style={{ marginTop: '190px' }}>
            <div className="row d-flex justify-content-center col-md-10 offset-md-1">
                <div className="col-md-6 details">
                    <div>
                        <h4 className="">How It Works</h4>
                        <p className="color"></p>
                        <small >Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Maiores eum ratione inventore magnam, <br /> expedita voluptates delectus perspiciatis excepturi ?</small>
                    </div>
                    <div className="">
                        <h4>How It Works</h4>
                        <p className="color"></p>
                        <small >Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Maiores eum ratione inventore magnam, <br /> expedita voluptates delectus perspiciatis excepturi ?</small>
                    </div>
                    <div className="">
                        <h4>How It Works</h4>
                        <p className="color"></p>
                        <small >Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Maiores eum ratione inventore magnam, <br /> expedita voluptates delectus perspiciatis excepturi ?</small>
                    </div>

                    <div className="mt-5 row d-flex" >
                        <div >
                            <img style={{width:'70%'}} src={google} alt="" />
                        </div>
                        <div className="appleStore">
                            <img style={{width:'70%'}} src={apple} alt="" />
                        </div>
                    </div>
                </div>


                <div className="col-md-6 mobile mt-3">
                    <img  src={phone} alt="" />
                </div>



            </div>
        </div>
    );
};

export default Details;