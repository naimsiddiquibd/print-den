import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar absolute z-30 mt-5 lg:px-5 xl:px-[210px] 2xl:px-34">
            <div className="navbar-start">
                <Link to="/" >
                    <img className="w-32 lg:w-[150px]" src="/logo.png" alt="Fatmonk Studio" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-0 text-[8px] sm:text-[10px]  lg:text-[14px] 2xl:text-[18px] text-monkwhite font-poppins gap-0">
                    <li><Link to="/" className='hover:text-monkred'>Home</Link></li>
                    <li>
                        <details>
                            <summary>Services</summary>
                            <ul className="p-2 bg-[#1D232A] text-monkwhite">
                                <li className='hover:text-monkred'><Link to="/development">Development</Link></li>
                                <li
                                className='hover:text-monkred'
                                ><Link to="/uiuxdesign">Ui/Ux Design</Link></li>
                                <li
                                className='hover:text-monkred'
                                ><Link to="/branddesign">Brand Design</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to="/works" className='hover:text-monkred'>Works</Link></li>
                    <li><Link to="/career" className='hover:text-monkred'>Career</Link></li>
                    <li><Link to="/contact" className='hover:text-monkred'>Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className='bg-monkred font-poppins font-semibold px-4 py-2 lg:px-7 lg:py-3  rounded-full text-xs text-monkwhite sm:text-[10px] md:text-[10px] lg:text-[12px]  hover:bg-monkdeepred cursor-pointer'>Make a Call</button>
            </div>
        </div>
    );
};

export default Navbar;