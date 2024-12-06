import React from 'react';
import { motion } from 'framer-motion';
import { Img } from 'react-image';

const OurWorks = () => {
    return (
        <div className='bg-[#000] flex justify-center md:py-20 py-10 md:px-20 relative overflow-y-hidden overflow-x-hidden'>
            <div className='flex items-center mt-44'>
                <Img
                    className='absolute -left-0 w-[750px] top-24 z-20 left-image'
                    src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846893/chakti1-min_psbn45.png"
                />
                <Img
                    className='absolute -right-0 w-[750px] top-24 z-20 right-image'
                    src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846878/chakti2-min_ntgg5i.png"
                />
            </div>
            <div className='flex items-center mt-44'>
                <Img
                    className='absolute -left-0 w-[750px] bottom-24 z-20 left-image'
                    src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846893/chakti1-min_psbn45.png"
                />
                <Img
                    className='absolute -right-0 w-[750px] bottom-24 z-20 right-image'
                    src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846878/chakti2-min_ntgg5i.png"
                />
            </div>

            <div className='font-poppins text-center z-30'>
                <h1 className='text-3xl md:text-6xl font-semibold text-monkwhite leading-[35px] md:leading-[70px] mb-10 md:mb-16'>
                    OUR Works
                </h1>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-6  lg:w-[1180px]'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            y: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 0.2 },
                            ease: "easeIn",
                            duration: 0.2,
                        }}
                    >
                        <div className='md:w-[530px] md:h-[707px] w-[280px] relative overflow-hidden rounded-3xl hover:rounded-[70px] transition-all duration-300'>
                            <img src="/work1.png" alt="" className='transition-transform duration-300 transform hover:scale-150 rounded-lg' />
                        </div>
                        <h3 className='text-start md:w-[530px] md:text-[28px] text-[20px] mt-2 text-monkwhite font-poppins font-semibold w-[280px] leading-6 lg:leading-9'>Threadwel - Market Place For RMG and Garments Industry</h3>
                        <p className='text-start md:w-[530px] md:text-[20px] text-[16px] mt-2 text-monkwhite font-poppins font-normal w-[280px] leading-5 lg:leading-7'>UI/UX Design • Website Development • Software Development</p>
                    </motion.div>
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            y: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 0.2 },
                            ease: "easeIn",
                            duration: 0.2,
                        }}
                    >
                        <div className='md:w-[530px] md:h-[707px] w-[280px] relative overflow-hidden rounded-3xl hover:rounded-[70px] transition-all duration-300 md:mt-24'>
                            <img src="/work2.png" alt="" className='transition-transform duration-300 transform hover:scale-150 rounded-lg' />
                        </div>
                        <h3 className='text-start md:w-[530px] md:text-[28px] text-[20px] mt-2 text-monkwhite font-poppins font-semibold w-[280px] leading-6 lg:leading-9'>Ispahani - Group Website & CRM System</h3>
                        <p className='text-start md:w-[530px] md:text-[20px] text-[16px] mt-2 text-monkwhite font-poppins font-normal w-[280px] leading-5 lg:leading-7'>UI/UX Design • Website Development • Software Development</p>
                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            y: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 0.2 },
                            ease: "easeIn",
                            duration: 0.2,
                        }}
                    >
                        <div className='md:w-[530px] md:h-[707px] w-[280px] relative overflow-hidden rounded-3xl hover:rounded-[70px] transition-all duration-300'>
                            <img src="/work3.png" alt="" className='transition-transform duration-300 transform hover:scale-150 rounded-lg' />
                        </div>
                        <h3 className='text-start md:w-[530px] md:text-[28px] text-[20px] mt-2 text-monkwhite font-poppins font-semibold w-[280px] leading-6 lg:leading-9'>Marina - Booking System & Website</h3>
                        <p className='text-start md:w-[530px] md:text-[20px] text-[16px] mt-2 text-monkwhite font-poppins font-normal w-[280px] leading-5 lg:leading-7'>UI/UX Design • Website Development • Software Development</p>
                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            y: { type: 'spring', stiffness: 60 },
                            opacity: { duration: 0.2 },
                            ease: "easeIn",
                            duration: 0.2,
                        }}
                    >
                        <div className='md:w-[530px] md:h-[707px] w-[280px] relative overflow-hidden rounded-3xl hover:rounded-[70px] transition-all duration-300 md:mt-24'>
                            <img src="/work4.png" alt="" className='transition-transform duration-300 transform hover:scale-150 rounded-lg' />
                        </div>
                        <h3 className='text-start md:w-[530px] md:text-[28px] text-[20px] mt-2 text-monkwhite font-poppins font-semibold w-[280px] leading-6 lg:leading-9'>Digital Health - Degital Health Care Solutions</h3>
                        <p className='text-start md:w-[530px] md:text-[20px] text-[16px] mt-2 text-monkwhite font-poppins font-normal w-[280px] leading-5 lg:leading-7'>UI/UX Design • Website Development • Software Development</p>
                    </motion.div>


                </div>
            </div>
        </div>


    );
};

export default OurWorks;