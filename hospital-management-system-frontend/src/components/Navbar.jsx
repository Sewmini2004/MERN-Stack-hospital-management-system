import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import {FaPhoneVolume} from "react-icons/fa";
import {IoLocationOutline, IoTimeOutline} from "react-icons/io5";
import {CiFacebook} from "react-icons/ci";
import {FiTwitter} from "react-icons/fi";
import {FaInstagram} from "react-icons/fa6";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };

  return (
    <>
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


      <nav className="flex justify-between items-center bg-white p-3">
        <div className="flex gap-[3vw] text-black items-center">
          <div className="flex-none mx-15">
            <img src="public/istockphoto-1312665318-612x612.jpg" className="w-20 h-20" alt="Logo" />
          </div>

          <div className="flex gap-[4vw] text-black items-center font-bold text-lg">
            <div className="mx-1 hover:text-[#21cdc0]">
              <Link to={"/"} onClick={() => setShow(!show)} className="mx-1 hover:text-[#21cdc0]">Home</Link>
            </div>
            <div className="hover:text-[#21cdc0]">
              <Link to={"/about"} onClick={() => setShow(!show)} className="hover:text-[#21cdc0]">
              About Us
            </Link>
            </div>
            <div className="hover:text-[#21cdc0]">
              <Link to={"/appointment"} onClick={() => setShow(!show)} className="hover:text-[#21cdc0]">
                Appointment
              </Link>
            </div>
          {/*  <div className="hover:text-[#21cdc0]">
              <Link to={"/about"} onClick={() => setShow(!show)} className="hover:text-[#21cdc0]">
                Services
            </Link>
            </div>
            <div className="hover:text-[#21cdc0]">
              <Link to={"/about"} onClick={() => setShow(!show)} className="hover:text-[#21cdc0]">
                Medicine
              </Link></div>
            <div className="hover:text-[#21cdc0]">
              <Link to={"/about"} onClick={() => setShow(!show)} className="hover:text-[#21cdc0]">
                Contact</Link>
            </div>*/}
          </div>

        </div>
        <div className="flex items-center">
          {isAuthenticated ? (
              <button
                  className="m-4 rounded-lg bg-[#21cdc0] p-4 outline-black hover:bg-[#213360] text-white font-bold"
                  onClick={handleLogout}
              >
                LOGOUT
              </button>
          ) : (
              <button
                  className="m-4 lg:w-48 rounded-lg bg-[#21cdc0] p-4 outline-black hover:bg-[#213360] text-white font-bold"
                  onClick={goToLogin}
              >
                LOGIN
              </button>
          )}
        </div>
        <div className="hamburger cursor-pointer" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
