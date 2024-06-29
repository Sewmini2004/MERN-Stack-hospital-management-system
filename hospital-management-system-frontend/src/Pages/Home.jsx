import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import 'flowbite';
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";
import HomeCircle from "../components/homeCircle";
import {Slider} from "../components/slider";
import {Service} from "./service";

const Home = () => {
  return (
    <>
        <section className='flex w-[100%] h-[770px] bg-gradient-to-r from-[#21cdc0] to-[#213360]'>

            <div className='flex items-center'>
                <div className='flex-col mx-20 space-y-3 font-bold text-[#213360] items-center'>
                    <h1 className='text-6xl'>Health Care</h1>
                    <h2 className='text-5xl'>For Whole Family</h2>
                    <p className='text-2xl'>
                        In healthcare sector, service excellence <br /> is the facility
                        of the hospital as healthcare service provider to consistently
                    </p>

                    <HomeCircle />
                </div>
            </div>

            <div className='flex justify-end items-end'>
                <img src='public/home_doc.png' className='w-[1000px] h-[660px]' />
            </div>
        </section>

      <Departments />
        <Service/>
      <MessageForm />

    </>
  );
};

export default Home;
