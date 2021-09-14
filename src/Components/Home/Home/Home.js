import React from 'react';
import Details from '../Details/Details';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';
import HeaderBody from '../Header/HeaderBody/HeaderBody';
import Navbar from '../Header/Navbar/Navbar';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div style={{overflowX: 'hidden'}}>
            <Navbar></Navbar>
            <HeaderBody></HeaderBody>
            <Service></Service>
            <Featured></Featured>
            <Details></Details>
            <Footer></Footer>
        </div>
    );
};

export default Home;