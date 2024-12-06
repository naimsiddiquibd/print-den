import React, { useState } from 'react';
import './Hero.css';
import { Img } from 'react-image';
import { XMarkIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='w-full overflow-x-hidden overflow-y-hidden bg-monkwhite'> {/* Apply overflow-x: hidden; here */}
            <div className="hero lg:min-h-screen relative overflow-x-hidden overflow-y-hidden px-5 lg:px-0">

                <div className='xl:right-20 z-10 -mt-72 lg:absolute lg:overflow-x-hidden lg:overflow-y-hidden lg:mt-24'>
                    <Img className='' src="/hbg.png" />
                </div>

                {/* Body */}
                <div className='lg:absolute lg:w-[1180px] z-40 md:col-span-9 lg:ml-0 lg:mt-10 mt-[700px]'>
                    <h1 className='font-poppins font-bold text-monkwhite text-5xl lg:text-8xl my-1 lg:my-3 bg-gradient-to-r from-[#000000] to-[#625E5E] bg-clip-text text-transparent'>
                        You Create,<br />
                        We Print
                    </h1>
                    <h2 className='font-poppins text-lg lg:text-2xl font-bold text-monkblack'>
                        Upload your photos to get started
                    </h2>
                    <button
                        className='bg-monkblack flex items-center gap-3 font-poppins px-5 md:px-11 py-3 rounded-full text-sm text-monkwhite mt-4 md:text-[22px] hover:bg-[#4c4a4a] cursor-pointer'
                        onClick={toggleModal}
                    >
                        Upload Photos
                        <Img className='' src="/camera.png" />
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-monkblack bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative bg-monkwhite rounded-lg p-5 w-[95%] max-w-xl shadow-lg">
                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-3 text-monkblack text-lg font-bold hover:text-red-500"
                            onClick={toggleModal}
                        >
                            <XMarkIcon className="size-7 bg-[#DDDDDD] p-1 rounded-full text-monkblack" />
                        </button>
                        {/* Modal Content */}
                        <h2 className='text-center text-3xl font-bold text-monkblack mb-6 mt-6'>Our Services</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mx-10 pb-7'>
                            <Link to="/print" className='cursor-pointer flex items-center gap-2 bg-[#CACEFF] bg-opacity-20 px-4 py-3 rounded-full'>
                                <img src="/popup/print2.png" alt="" />
                                <p className='text-lg text-monkblack font-normal'>Print Photos</p>
                                <ArrowLongRightIcon className="size-5  text-monkblack" />
                            </Link>
                            <Link to="/under-construction" className='cursor-pointer flex items-center gap-2 bg-[#CACEFF] bg-opacity-20 px-4 py-3 rounded-full'>
                                <img src="/popup/frame2.png" alt="" />
                                <p className='text-lg text-monkblack font-normal'>Frame Photos</p>
                                <ArrowLongRightIcon className="size-5  text-monkblack" />
                            </Link>
                            <Link to="/under-construction" className='cursor-pointer flex items-center gap-2 bg-[#CACEFF] bg-opacity-20 px-4 py-3 rounded-full'>
                                <img src="/popup/collages2.png" alt="" />
                                <p className='text-lg text-monkblack font-normal'>Photo Collages</p>
                                <ArrowLongRightIcon className="size-5  text-monkblack" />
                            </Link>
                            <Link to="/under-construction" className=' cursor-pointer flex items-center gap-2 bg-[#CACEFF] bg-opacity-20 px-4 py-3 rounded-full'>
                                <img src="/popup/albums2.png" alt="" />
                                <p className='text-lg text-monkblack font-normal'>Photo Albums</p>
                                <ArrowLongRightIcon className="size-5  text-monkblack" />
                            </Link>
                        </div>

                    </div>
                </div>

            )}
        </div>
    );
};

export default Hero;
