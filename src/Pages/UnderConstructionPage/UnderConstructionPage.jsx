import React from 'react';
import UnderConstruction from '../../Components/UnderConstruction/UnderConstructions';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const UnderConstructionPage = () => {
    return (
        <div>
        <Navbar />
        <div className="bg-monkwhite py-10 pt-32 min-h-screen">
            <div className="lg:w-[1180px] lg:mx-auto">
                <UnderConstruction></UnderConstruction>
            </div>
        </div>
        <Footer />
    </div>
    );
};

export default UnderConstructionPage;