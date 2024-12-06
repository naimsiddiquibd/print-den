import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaRegCopy } from "react-icons/fa";
import { CheckCircleIcon, XMarkIcon, Bars2Icon, ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { IoIosCall } from "react-icons/io";
import './Navbar.css';

const Navbar = () => {
    const [copied, setCopied] = useState(false);

    const closeSidebar = () => {
        document.getElementById("my-drawer-3").checked = false;
    };

    const handleCopy = () => {
        navigator.clipboard.writeText('+8801722-723891');
        setCopied(true);
        setTimeout(() => setCopied(false), 10000); // Reset copied state after 3 seconds
    };
    return (
        <div className="absolute z-[999] drawer drawer-top mt-6">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="lg:w-[1180px] w-full navbar mx-auto px-2 lg:px-0">

                    <div className="navbar-start">
                        <Link to="/" >
                            <img className="w-16" src="/lg.svg" alt="Fatmonk Studio" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-0 text-[8px] sm:text-[10px]  lg:text-[14px] 2xl:text-[18px] text-monkblack font-poppins gap-0">
                            <li><Link to="/" className='hover:text-monkred'>Home</Link></li>
                            <li><Link to="" className='hover:text-monkred'>Pricing</Link></li>
                            <li><Link to="" className='hover:text-monkred'>Blog</Link></li>
                            <li><Link to="" className='hover:text-monkred'>Services</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="bg-monkblack font-poppins font-semibold px-4 py-2 lg:px-7 lg:py-3  rounded-full text-xs text-monkwhite sm:text-[10px] md:text-[10px] lg:text-[12px]  hover:bg-[#373636] cursor-pointer flex items-center gap-2">Contact Us
                                <ArrowLongRightIcon className="size-5 text-monkwhite" />
                            </div>
                         
                        </div>
                    </div>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost text-monkwhite">
                            <Bars2Icon className="h-6 w-6 text-blue-500" />
                        </label>
                    </div>
                </div>

            </div>
            <div className="drawer-side w-full">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-full min-h-full bg-[#000] gap-y-2 text-[24px] text-monkwhite">
                    {/* Sidebar content here */}
                    <div className='flex justify-between'>
                        <Link to="/" >
                            <img className="w-32 lg:w-[150px] mb-8" src="/social/flg.svg" alt="Print Den" />
                        </Link>
                        <XMarkIcon onClick={closeSidebar} className="h-6 w-6 mt-3 text-blue-500" />
                    </div>
                    <li><Link to="/" className='hover:text-monkred'>Home</Link>
                    </li>
                    <li><Link to="" className='hover:text-monkred'>Pricing</Link></li>
                    <li><Link to="" className='hover:text-monkred'>Blog</Link></li>
                    <li><Link to="" className='hover:text-monkred'>Services</Link></li>
                    <li className='absolute bottom-0'>
                        <div className='absolute text-[16px]'>Follow Us</div>
                        <div className='flex items-center gap-4'>
                            <Link to="https://www.facebook.com/fatmonkhere">
                                <img className='w-5 cursor-pointer hover:scale-150 transition-transform' src="/facebook.png" alt="" />
                            </Link>
                            <Link to="https://www.linkedin.com/company/fatmonk/mycompany/verification/">
                                <img className='w-5 my-7 cursor-pointer hover:scale-150 transition-transform' src="/linkedin.png" alt="" />
                            </Link>
                            <Link to="https://www.instagram.com/fatmonkstudio/">
                                <img className='w-5 cursor-pointer hover:scale-150 transition-transform' src="/instagram.png" alt="" />
                            </Link>
                            <Link to="https://www.twitter.com/fatmonkstudio/">
                                <img className='w-5 cursor-pointer hover:scale-150 transition-transform' src="/x.png" alt="" />
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;