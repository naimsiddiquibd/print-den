import React from 'react';

const ThreeSteps = () => {
    return (
       <div className='bg-monkwhite py-10'>
         <div className='lg:w-[1180px] lg:mx-auto bg-monkwhite shadow-sm p-8'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                <div className='flex items-center justify-start gap-2'>
                    <img src="/lowest.png" alt="" />
                    <p className='text-[#121212] text-lg font-medium'>Lowest Price Granted</p>
                </div>
                <div className='flex items-center justify-start gap-2'>
                    <img src="/free.png" alt="" />
                    <p className='text-[#121212] text-lg font-medium'>Lowest Price Granted</p>
                </div>
                <div className='flex items-center justify-start gap-2'>
                    <img src="/super.png" alt="" />
                    <p className='text-[#121212] text-lg font-medium'>Lowest Price Granted</p>
                </div>

            </div>
        </div>
       </div>
    );
};

export default ThreeSteps;