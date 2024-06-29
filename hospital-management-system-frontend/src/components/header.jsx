import React from "react";
import { FaPhoneVolume } from 'react-icons/fa';
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";

const Header = () =>  {

        return (
            <header>
                <div className="flex justify-between items-center bg-[#213360] p-3">
                    <ul className="flex gap-[3vw] text-white">
                        <li>
                            <a className="flex gap-[0.4vw] mx-8">
                                <FaPhoneVolume /> Emergency Line: (1990) 01061245741
                            </a>
                        </li>
                        <li>
                            <a className="flex gap-[0.4vw]">
                                <IoLocationOutline /> Location: Health Care, Mathugama
                            </a>
                        </li>
                        <li>
                            <a className="flex gap-[0.4vw]">
                                <IoTimeOutline /> 24 hours
                            </a>
                        </li>
                    </ul>

                    <ul className="flex gap-[1vw] text-black">
                        <li className="bg-[#21cdc0] p-2 rounded-full mx-2">
                            <a href="#"><CiFacebook /></a>
                        </li>
                        <li className="bg-[#21cdc0] p-2 rounded-full mx-2">
                            <a href="#"><FiTwitter /></a>
                        </li>
                        <li className="bg-[#21cdc0] p-2 rounded-full mx-2">
                            <a href="#"><FaInstagram /></a>
                        </li>
                    </ul>
                </div>
                <nav className="flex justify-between bg-color-white">
                    <div className="flex gap-[3vw] text-black items-center">
                        <div className="flex-none mx-15">
                            <img src="src/assets/istockphoto-1312665318-612x612.jpg" className="w-90 h-28" alt="Logo" />
                        </div>
                        <div className="flex gap-[4vw] text-black items-center font-bold text-lg">
                            <div className="mx-1 hover:text-[#21cdc0]">Home</div>
                            <div className="hover:text-[#21cdc0]">About</div>
                            <div className="hover:text-[#21cdc0]">Services</div>
                            <div className="hover:text-[#21cdc0]">Medicine</div>
                            <div className="hover:text-[#21cdc0]">Contact</div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <MyButton>Login</MyButton>
                        <MyButton>Sign Up</MyButton>
                        <MyButton>Appointment</MyButton>
                    </div>
                </nav>
            </header>
        );

}

export default Header;
