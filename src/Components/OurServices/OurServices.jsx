import React from 'react';

const OurServices = () => {
    return (
        <div className='bg-monkwhite py-10'>
            <div className='lg:w-[1180px] lg:mx-auto'>
                <h1 className='text-5xl  text-center font-semibold text-monkblack leading-[35px] md:leading-[70px] mb-10'>
                    Our Services
                </h1>
                <div className='grid lg:grid-cols-4 lg:gap-4 gap-3 lg:p-0 p-7'>
                    <div className="card bg-[#ECE6FF] w-full shadow-sm">
                        <figure className="px-6 pt-6">
                            <img
                                src="/services/prnt.png"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body py-5 items-center text-center">
                            <h2 className="card-title text-2xl font-bold text-[#2D2D2D]">Print Photos</h2>
                            <p className='text-[#6C6F89] text-sm font-normal'>Superior quality printing,
                                the way it should be.</p>

                        </div>
                    </div>
                    <div className="card bg-[#ECE6FF] w-full shadow-sm">
                        <figure className="px-6 pt-6">
                            <img
                                src="/services/frm.png"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body py-5 items-center text-center">
                            <h2 className="card-title text-2xl font-bold text-[#2D2D2D]">Frame Photos</h2>
                            <p className='text-[#6C6F89] text-sm font-normal'>High quality frames for
                                your photos</p>

                        </div>
                    </div>
                    <div className="card bg-[#ECE6FF] w-full shadow-sm">
                        <figure className="px-6 pt-6">
                            <img
                                src="/services/clg.png"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body py-5 items-center text-center">
                            <h2 className="card-title text-2xl font-bold text-[#2D2D2D]">Photo Collages</h2>
                            <p className='text-[#6C6F89] text-sm font-normal'>Beautiful collages to
                            hang on your wall</p>

                        </div>
                    </div>
                    <div className="card bg-[#ECE6FF] w-full shadow-sm">
                        <figure className="px-6 pt-6">
                            <img
                                src="/services/albm.png"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body py-5 items-center text-center">
                            <h2 className="card-title text-2xl font-bold text-[#2D2D2D]">Photo Albums</h2>
                            <p className='text-[#6C6F89] text-sm font-normal'>Quality photo albums to keep
                            your memories safe</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurServices;