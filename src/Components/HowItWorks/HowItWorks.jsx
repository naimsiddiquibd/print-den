import React from 'react';

const HowItWorks = () => {
    return (
        <div className='bg-monkwhite py-10'>
            <div className='lg:w-[1180px] lg:mx-auto'>
                <h1 className='text-5xl  text-center font-semibold text-monkblack leading-[35px] md:leading-[70px] mb-10'>
                    How It Works
                </h1>
                <div className='grid lg:grid-cols-2 gap-4 lg:gap-4 p-7'>
                    <div>
                        <img src="/Link.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className="collapse collapse-arrow bg-base-200 shadow-sm">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium bg-[#464646] text-monkwhite">Step 1: Choose a Service</div>
                            <div className="collapse-content bg-monkwhite">
                                <p className='pt-3 text-[#464646] max-w-80'>Browse through our services and select the one that suits your needs.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 shadow-sm">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium bg-[#464646] text-monkwhite">Step 2: Upload Your Photos</div>
                            <div className="collapse-content bg-monkwhite">
                                <p className='pt-3 text-[#464646] max-w-80'>Browse through our services and select the one that suits your needs.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 shadow-sm">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium bg-[#464646] text-monkwhite">Step 3: Edit and Select Sizes</div>
                            <div className="collapse-content bg-monkwhite">
                                <p className='pt-3 text-[#464646] max-w-80'>Browse through our services and select the one that suits your needs.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 shadow-sm">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium bg-[#464646] text-monkwhite">Step 4: Pay using Cards or Cash on Delivery</div>
                            <div className="collapse-content bg-monkwhite">
                                <p className='pt-3 text-[#464646] max-w-80'>Browse through our services and select the one that suits your needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;