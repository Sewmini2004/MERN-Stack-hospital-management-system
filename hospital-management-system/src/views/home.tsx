import React from "react";
import 'flowbite';
import {Modal} from 'flowbite'
import {HomeCircle} from "../components/home_circle/homeCircle";


class Home extends React.Component<any, any> {
    render() {
        return (
            /* Home */
            <section className={'flex w-[100%] h-[650px] bg-gradient-to-r from-[#21cdc0] to-[#213360]'}>

                <div className={'flex items-center '}>
                    <div className={'flex-col mx-20 space-y-3 font-bold text-[#213360] items-center'}>
                        <h1 className={'text-6xl'}>Health Care</h1>
                        <h2 className={'text-5xl'}>For Hole Family</h2>
                        <p className={'text-2xl'}>In healthcare sector,service excellence <br/> is the facility
                            of the hospital as healthcare service provider to consistently </p>
                        <div className={'flex space-y-4'}/>
                        <HomeCircle/>

                    </div>

                </div>

                <div className={"flex justify-end items-end "}>
                    <img src={'src/assets/home_doc.png'} className={'w-[1000px] h-[650px]'}/>
                </div>
            </section>
        );
    }

}

export default Home;