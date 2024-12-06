import React from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import WorkHero from '../../Components/WorkComponents/WorkHero';
import OurWorks from '../../Components/OurWorks/OurWorks';
import MarqueeSection from '../../Components/AboutComponents/MarqueeSection/MarqueeSection';
import GridGallery from '../../Components/AboutComponents/GridGallery/GridGallery';
import Feedback from '../../Components/Feedback/Feedback';
import Contact from '../../Components/AboutComponents/Contact/Contact';
import StickyIcons from '../../Components/StickyIcons/StickyIcons';

const Work = () => {
    return (
        <div>
           <Navbar></Navbar>
           <StickyIcons></StickyIcons>
           <WorkHero></WorkHero>
           <OurWorks></OurWorks>
           <MarqueeSection></MarqueeSection>
     
           <Feedback></Feedback>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Work;