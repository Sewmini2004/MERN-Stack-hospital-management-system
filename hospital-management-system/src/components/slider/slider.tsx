import React from 'react'
import {Cards2} from "../card/Cards2";
import {Cards3} from "../card/Cards3";
import {Cards4} from "../card/Cards4";
import {Cards5} from "../card/Cards5";

export class Slider extends React.Component<any, any>{
    render() {

        /*Slider */
        return (
            <div id="default-carousel" className="relative w-full" data-carousel="" >

                <div className="relative h-65 overflow-hidden rounded-lg md:h-[710px]  shadow-lg shadow-gray-500/100 bg-gray-300 ">

                    <div>
                        <div className="hidden  ease-in-out " data-carousel-item="slide ">

                            <div className={'flex columns-3'}>
                                <div className={' mx-10 p-5 shadow-2xl  rounded-[2rem] m-5 ' }>
                                    <Cards2/>
                                </div>

                                <div className={' mx-10 p-5 shadow-2xl  rounded-[2rem] m-5'}>
                                    <Cards3/>
                                </div>

                                <div className={'mx-10 p-5 shadow-2xl  rounded-[2rem] m-5'}>
                                    <Cards4/>
                                </div>
                            </div>

                        </div>

                        <div className="hidden  ease-in-out" data-carousel-item="slide">
                            <img src="src/assets/hame_doctor.jpg"
                                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            />
                        </div>

                        <div className="hidden ease-in-out" data-carousel-item="slide">
                            <div className={'flex columns-3'}>
                                <div className={' mx-10 p-5 shadow-2xl  rounded-[2rem] m-5'}>
                                    <Cards5/>

                                </div>

                                <div className={' mx-10 p-5 shadow-2xl  rounded-[2rem] m-5'}>
                                    <Cards4/>
                                </div>

                                <div className={'mx-10 p-5 shadow-2xl  rounded-[2rem] m-5'}>
                                    <Cards3/>
                                </div>
                            </div>
                        </div>

                    </div>




                </div>

                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
    data-carousel-slide-to="0"/>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
    data-carousel-slide-to="1"/>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
    data-carousel-slide-to="2"/>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
    data-carousel-slide-to="3"/>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5"
    data-carousel-slide-to="4"/>
                </div>

                <button type="button"
                        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-prev="slide">
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
                </button>
                <button type="button"
                        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-next="slide">
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
                </button>
            </div>
        );
    }
}