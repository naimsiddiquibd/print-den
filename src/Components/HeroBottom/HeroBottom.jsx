import React from 'react';
import {motion} from 'framer-motion';

const HeroBottom = () => {
    return (
        <div className="hero min-h-screen bg-monkblack">
            <div className="hero-content max-w-[1180px] flex-col lg:flex-row">
                <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    y: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 0.3,
                }}
                whileHover={{ scale: 1.1 }}
                src="/herobottom.png" className="max-w-[280px] md:max-w-md rounded-lg shadow-2xl" />
                <div>
                    <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        y: { type: 'spring', stiffness: 60 },
                        opacity: { duration: 0.2 },
                        ease: "easeIn",
                        duration: 0.5,
                    }}
                    className='grid grid-cols-1 px-7'>
                        <div>
                            <h3 className='text-[25px] md:text-[60px] md:leading-[60px] font-poppins text-monkwhite font-bold mt-3 leading-8 text-center md:text-left'>Revitalize businesses with innovative design.</h3>
                        </div>
                        <div>
                            <p className='text-[14px] font-poppins font-normal text-monkwhite mt-2 leading-5 md:text-left text-center'>Ready to take your business to the next level? Our team of experts is here to collaborate with you, bringing fresh ideas and modern solutions to the table. Whether you need to boost your online presence, streamline your software, create stunning designs, or plan unforgettable events, we've got the expertise you need.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroBottom;