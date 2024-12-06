import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Learn = () => {
    return (
        <div className='bg-[#131313]'>
            <div className='hidden lg:inline'>
            <div className='lg:w-[1180px] lg:mx-auto  py-24'>
                <div className="mockup-phone mx-auto">
                    <div className="camera"></div>
                    <div className="display">
                        <h1 className='text-center font-poppins text-[30px] md:text-[60px] font-bold my-6 md:my-6 text-[#BD7C92]'>Learn With Us</h1>
                        <div className='flex justify-center lg:w-[1180px] lg:mx-auto px-4 lg:px-7'>
                            <div className='lg:flex lg:justify-center gap-5 '>
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
                                    className="card w-full  bg-monkwhite mb-5 hover:shadow-md cursor-pointer">
                                    <figure><img src="/learn1.png" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="font-poppins text-[14px] md:text-[14px] leading-3 font-semibold text-[#9D9D9D]">1 day ago</h2>
                                        <p className='font-poppins text-[18px] md:text-[24px] leading-5 md:leading-7 font-semibold text-monkblack w-[240px] md:w-[260px]'>A Symphony of Technological Creativity</p>
                                        <div className="card-actions justify-start">
                                            <Link to="https://blog.fatmonk.studio/a-symphony-of-human-and-technological-creativity/" className='font-poppins text-[15px] font-semibold text-monkred'>Read More</Link>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ y: -100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.2,
                                        y: { type: 'spring', stiffness: 60 },
                                        opacity: { duration: 0.2 },
                                        ease: "easeIn",
                                        duration: 0.5,
                                    }}
                                    className="card w-full  bg-monkwhite mb-5 hover:shadow-md cursor-pointer">
                                    <figure><img src="/learn2.png" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="font-poppins text-[14px] md:text-[14px] leading-3 font-semibold text-[#9D9D9D]">20 min ago</h2>
                                        <p className='font-poppins text-[18px] md:text-[24px] leading-5 md:leading-7 font-semibold text-monkblack w-[240px] md:w-[260px]'>Designing Immersive Experiences that Captivate Audience</p>
                                        <div className="card-actions justify-start">
                                            <Link to="https://blog.fatmonk.studio/designing-immersive-experiences-that-captivate-your-audience/" className='font-poppins text-[15px] font-semibold text-monkred'>Read More</Link>
                                        </div>
                                    </div>
                                </motion.div>
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
                                    className="card w-full  bg-monkwhite mb-5 hover:shadow-md cursor-pointer">
                                    <figure><img src="/learn3.png" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="font-poppins text-[14px] md:text-[14px] leading-3 font-semibold text-[#9D9D9D]">20 min ago</h2>
                                        <p className='font-poppins text-[18px] md:text-[24px] leading-5 md:leading-7 font-semibold text-monkblack w-[240px] md:w-[260px]'>How Innovation Can Drive Positive Change</p>
                                        <div className="card-actions justify-start">
                                            <Link to="https://blog.fatmonk.studio/tech-for-good-how-innovation-can-drive-positive-change/" className='font-poppins text-[15px] font-semibold text-monkred'>Read More</Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="lg:hidden">
                        <h1 className='text-center font-poppins text-[30px] md:text-[60px] font-bold my-6 md:my-6 text-[#BD7C92]'>Learn With Us</h1>
                        <div className='flex justify-center lg:w-[1180px] lg:mx-auto px-10 lg:px-7'>
                            <div className='lg:flex lg:justify-center gap-5 '>
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
                                    className="card w-full  bg-monkwhite mb-5 hover:shadow-md cursor-pointer">
                                    <figure><img src="/learn1.png" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="font-poppins text-[14px] md:text-[14px] leading-3 font-semibold text-[#9D9D9D]">1 day ago</h2>
                                        <p className='font-poppins text-[18px] md:text-[24px] leading-5 md:leading-7 font-semibold text-monkblack w-[240px] md:w-[260px]'>A Symphony of Technological Creativity</p>
                                        <div className="card-actions justify-start">
                                            <Link to="https://blog.fatmonk.studio/a-symphony-of-human-and-technological-creativity/" className='font-poppins text-[15px] font-semibold text-monkred'>Read More</Link>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ y: -100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.2,
                                        y: { type: 'spring', stiffness: 60 },
                                        opacity: { duration: 0.2 },
                                        ease: "easeIn",
                                        duration: 0.5,
                                    }}
                                    className="card w-full  bg-monkwhite mb-5 hover:shadow-md cursor-pointer">
                                    <figure><img src="/learn2.png" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="font-poppins text-[14px] md:text-[14px] leading-3 font-semibold text-[#9D9D9D]">20 min ago</h2>
                                        <p className='font-poppins text-[18px] md:text-[24px] leading-5 md:leading-7 font-semibold text-monkblack w-[240px] md:w-[260px]'>Designing Immersive Experiences that Captivate Audience</p>
                                        <div className="card-actions justify-start">
                                            <Link to="https://blog.fatmonk.studio/designing-immersive-experiences-that-captivate-your-audience/" className='font-poppins text-[15px] font-semibold text-monkred'>Read More</Link>
                                        </div>
                                    </div>
                                </motion.div>
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
                                    className="card w-full  bg-monkwhite mb-5 hover:shadow-md cursor-pointer">
                                    <figure><img src="/learn3.png" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="font-poppins text-[14px] md:text-[14px] leading-3 font-semibold text-[#9D9D9D]">20 min ago</h2>
                                        <p className='font-poppins text-[18px] md:text-[24px] leading-5 md:leading-7 font-semibold text-monkblack w-[240px] md:w-[260px]'>How Innovation Can Drive Positive Change</p>
                                        <div className="card-actions justify-start">
                                            <Link to="https://blog.fatmonk.studio/tech-for-good-how-innovation-can-drive-positive-change/" className='font-poppins text-[15px] font-semibold text-monkred'>Read More</Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
        </div>

    );
};

export default Learn;