import React from 'react';
import { motion } from "framer-motion"

const TopServices = () => {
    return (
        <div className=" bg-[#0D0D0D] py-16">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-1 lg:gap-3 lg:w-[1180px] mx-auto'>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    y: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 0.3,
                }}
                whileHover={{ scale: 1.1 }}
                className='bg-[#281A3A] px-8 py-14 m-4 lg:mx-1 rounded-3xl h-[435px] cursor-pointer'>
                <img className='w-16' src="/web.png" alt="" />
                <h1 className='text-[36px] font-poppins font-semibold  text-monkwhite my-2'>Web</h1>
                <p className='text-[15px] font-poppins leading-7 text-monkwhite'>Experience top-tier web development: Stunning websites, powerful apps, and growth-driven solutions</p>
            </motion.div>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    y: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 0.3,
                }}
                whileHover={{ scale: 1.1 }}
                className='bg-gradient-to-bl from-[#FF0961] to-[#4100FB] px-8 py-14 m-4 lg:mx-1 rounded-3xl md:mt-24 h-[470px] cursor-pointer'>
                <img className='w-16' src="/design.png" alt="" />
                <h1 className='text-[36px] font-poppins font-semibold text-monkwhite my-2'>Design</h1>
                <p className='text-[15px] font-poppins leading-7 text-monkwhite'>Experience the magic of our UI/UX expertise, where captivating designs and seamless interactions enhance user engagement and propel your business forward</p>
            </motion.div>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    y: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 0.3,
                }}
                whileHover={{ scale: 1.1 }}
                className='bg-[#030A49] px-8 py-14 m-4 lg:mx-1 rounded-3xl h-[435px] cursor-pointer'>
                <img className='w-16' src="/software.png" alt="" />
                <h1 className='text-[36px] font-poppins font-semibold text-monkwhite my-2'>Software</h1>
                <p className='text-[15px] font-poppins leading-7 text-monkwhite'>Tailored software solutions for your business needs. From ideation to execution, we deliver scalable, efficient, and secure software to drive your success</p>
            </motion.div>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    y: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 0.3,
                }}
                whileHover={{ scale: 1.1 }}
                className='bg-gradient-to-bl from-[#FF4409] to-[#FFEF5A] px-8 py-14 m-4 lg:mx-1 rounded-3xl md:mt-24 h-[470px] cursor-pointer'>
                <img className='w-16' src="/events.png" alt="" />
                <h1 className='text-[36px] font-poppins font-semibold text-[#864B04] my-2'>Events</h1>
                <p className='text-[15px] font-poppins leading-7 text-[#864B04]'>Indulge in seamless event orchestration, from inception to culmination, with our comprehensive suite of services, ensuring your event resonates as an unforgettable experience</p>
            </motion.div>
            </div>
        </div>
    );
};

export default TopServices;