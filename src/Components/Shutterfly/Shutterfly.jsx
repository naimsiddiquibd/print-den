import React from 'react';

const Shutterfly = () => {
    return (
        <div className='bg-[#f8f6f6] py-10'>
            <div className='lg:w-[1180px] lg:mx-auto'>
                <div className='grid grid-cols-1  lg:grid-cols-3  gap-7 p-7 lg:p-0'>
                    <div className='bg-monkblack px-10 pt-7 pb-16 rounded-2xl col-span-2'>
                        <img src="/horn.png" className='-ml-5' alt="" />
                        <h2 className='font-bold text-5xl text-monkwhite leading-[65px] -mt-3'>Experience the Shutterfly Difference</h2>
                        <button className='flex items-center gap-2 mt-4 text-sm text-monkblack bg-monkwhite px-5 py-2 rounded-full'>
                            <p>Upload Photos </p>
                            <img src="/camb.png" alt="" />
                        </button>
                    </div>
                    <div className='p-10 shadow-sm rounded-2xl bg-monkwhite'>
                        <img className='w-16' src="/crt.png" alt="" />
                        <h2 className='text-2xl font-bold text-monkblack'>Create your way</h2>
                        <p className='text-lg text-monkblack font-normal'>
                            Make something special in just minutes or dive deep into all the details. It’s up to you.
                        </p>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 gap-7 mt-7'>
                    <div className='px-10 py-16 shadow-sm rounded-2xl bg-monkwhite'>
                        <img className='w-16' src="/hpp.png" alt="" />
                        <h2 className='text-2xl font-bold text-monkblack my-4'>100% happiness guaranteed
                        </h2>
                        <p className='text-lg text-monkblack font-normal'>
                            Make something special in just minutes or dive deep into all the details. It’s up to you.
                        </p>
                    </div>
                    <div className='px-10 py-16 shadow-sm rounded-2xl bg-monkwhite'>
                        <img className='w-16' src="/qlt.png" alt="" />
                        <h2 className='text-2xl font-bold text-monkblack my-4'>Quality you can see
                        </h2>
                        <p className='text-lg text-monkblack font-normal'>
                            Make something special in just minutes or dive deep into all the details. It’s up to you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shutterfly;