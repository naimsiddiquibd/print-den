import React from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Footer from '../../Components/Footer/Footer';
import ThreeSteps from '../../Components/ThreeStepts/ThreeSteps';
import OurServices from '../../Components/OurServices/OurServices';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import Shutterfly from '../../Components/Shutterfly/Shutterfly';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <ThreeSteps></ThreeSteps>
            <OurServices></OurServices>
            <HowItWorks></HowItWorks>
            <Shutterfly></Shutterfly>
            <Footer></Footer>
        </div>
    );
};

export default Home;