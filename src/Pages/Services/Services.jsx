import React from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import AboutHero from '../../Components/AboutComponents/AboutHero/AboutHero';
import CustomerExperience from '../../Components/AboutComponents/CustomerExperience/CustomerExperience';
import CustomerExperienceMobile from '../../Components/AboutComponents/CustomerExperienceMobile/CustomerExperienceMobile';
import OurWorks from '../../Components/OurWorks/OurWorks';
import Feedback from '../../Components/Feedback/Feedback';
import Contact from '../../Components/AboutComponents/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import MarqueeSection from '../../Components/AboutComponents/MarqueeSection/MarqueeSection';
import CaseStudies from '../../Components/AboutComponents/CaseStudies/CaseStudies';
import GridGallery from '../../Components/AboutComponents/GridGallery/GridGallery';
import StickyIcons from '../../Components/StickyIcons/StickyIcons';

const Services = () => {
    return (
        <div>
            <Navbar></Navbar>
            <StickyIcons></StickyIcons>
            <AboutHero></AboutHero>
            <CustomerExperience></CustomerExperience>
            <CustomerExperienceMobile></CustomerExperienceMobile>
            <OurWorks></OurWorks>
            <MarqueeSection></MarqueeSection>
            <CaseStudies></CaseStudies>
            <Feedback></Feedback>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Services;