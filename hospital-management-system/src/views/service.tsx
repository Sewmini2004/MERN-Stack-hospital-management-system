import React from "react";
import {Cards} from "../components/card/Cards";
import {Slider} from "../components/slider/slider";
import {SizeAvatars} from "../components/sizeavatars/sizeAvatars";
import {Input, Select} from "@chakra-ui/react";
import MyButton from "../components/button/myButton";
import BasicDatePicker from "../components/datePicker/datePicker";
import {About} from "./about1";
import {Appointment} from "./appointment";
export class Service extends React.Component<any, any> {
    render() {
        return (
            /*Service */
            <section>

                <div>
                    <div className={'flex w-[100%] h-[900px] bg-gradient-to-r from-[#21cdc0] to-[#213360]'}>
                        <div className={'flex-col items-center justify-center mx-10 space-y-8 p-6 m-4 text-[white]'}>
                            <p className={'font-bold text-3xl mx-10'}>Medcity Has Touched The Lives Of Patients &
                                Providing Care For The Sickest In Our Community</p>
                            <Cards/>
                        </div>
                    </div>

                    <div className={'flex '}>
                        <div className={'flex-col w-[100%] h-[850px] items-center justify-center mx-40 '}>
                            <h1 className={'text-4xl font-bold text-[#213360] my-2 p-8'}>Meet Our Doctors</h1>
                            <p className={'text-xl font-bold text-[#213360]  p-6 '}>Our administration and support staff
                                all have exceptional
                                people skills and trained to assist you with all medical enquiries.</p>
                            <Slider/>
                        </div>

                    </div>

                    <div className={'w-[100%] h-[580px] p-20'}>
                        <div className={'flex justify-start items-end  p-20 '}>
                            <p className={' text-3xl font-bold text-[#213360] mx-17'}>We Provide All Aspects Of
                                Medical Practice For Your Whole Family!</p>

                        </div>
                        <div className={'flex flex-row justify-center items-end '}>
                            <SizeAvatars/>
                        </div>

                    </div>

                    <div className={'flex w-[100%] h-[800px] bg-gradient-to-r from-[#21cdc0] to-[#21cdc0] '}>
                        <Appointment/>
                        <div className={'flex flex-col items-center justify-center p-16 gap-y-4 '}>
                            <h1 className={'text-3xl font-bold text-[#213360] '}>Helping Patients From Around The Globe!!</h1>
                            <img src={'src/assets/doctor-nurses-special-equipment.jpg'} className={'w-[800px] h-[440px]'}/>
                        </div>
                    </div>



                </div>


            </section>

        );
    }

}