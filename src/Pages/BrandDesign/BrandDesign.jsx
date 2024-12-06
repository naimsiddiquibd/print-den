import React from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BrandDesignHero from '../../Components/BrandDesignComponents/BrandDesignHero';
import BrandCustomer from '../../Components/BrandDesignComponents/BrandCustomer';
import GridGallery from '../../Components/AboutComponents/GridGallery/GridGallery';
import OurWorks from '../../Components/OurWorks/OurWorks';
import Feedback from '../../Components/Feedback/Feedback';
import Contact from '../../Components/AboutComponents/Contact/Contact';
import MarqueeSection from '../../Components/AboutComponents/MarqueeSection/MarqueeSection';
import StickyIcons from '../../Components/StickyIcons/StickyIcons';

const BrandDesign = () => {
    return (
        <div>
            <Navbar></Navbar>
            <StickyIcons></StickyIcons>
            <BrandDesignHero></BrandDesignHero>
            {/* <GridGallery></GridGallery> */}
            <BrandCustomer></BrandCustomer>
            <OurWorks></OurWorks>
            <MarqueeSection></MarqueeSection>
            <Feedback></Feedback>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default BrandDesign;