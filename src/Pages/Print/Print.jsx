import React from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import PhotoLibrary from '../../Components/PhotoLibrary/PhotoLibrary';

const Print = () => {
    return (
        <div>
            <Navbar></Navbar>
                <PhotoLibrary></PhotoLibrary>
            <Footer></Footer>
        </div>
    );
};

export default Print;