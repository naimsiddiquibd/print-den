import React from 'react';
import { FaWhatsapp, FaRegCopy } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-[#292929]">
            <footer className="footer lg:w-[1180px] lg:mx-auto shadow-sm p-8 flex flex-col items-center justify-center text-center">
                <img src="/social/flg.svg" alt="Logo" className="mb-0" />
                <div className="flex space-x-4">
                    <img src="/social/ig.png" alt="" />
                    <img src="/social/x.png" alt="" />
                    <img src="/social/fb.png" alt="" />
                    <img src="/social/in.png" alt="" />
                </div>

                {/* 1px Line */}
                <div className="w-full h-[1px] bg-monkwhite my-4"></div>

                <p className="text-white">Copyright by Print Den</p>
            </footer>
        </div>
    );
};

export default Footer;
