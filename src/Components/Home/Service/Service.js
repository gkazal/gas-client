import React from 'react';
import image1 from '../../../images/service/service-1.png'
import image2 from '../../../images/service/service-2.png'
import image3 from '../../../images/service/service-3.png'

const Service = () => {

    return (
        <div className="d-flex justify-content-around  p-2" style={{backgroundColor: 'rgb(207, 203, 203)', marginTop: '190px'}}> 
            <div>
                <img src={image1} alt=""/>
            </div>
            <div>
                <img src={image2} alt=""/>
            </div>
            <div>
                <img src={image3} alt=""/>
            </div>
            <div>
                <img src={image1} alt=""/>
            </div>

            
        </div>
    );
};

export default Service;