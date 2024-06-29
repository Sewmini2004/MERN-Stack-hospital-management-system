import React from "react";
import MyButton from "../components/button/myButton";

export class About extends React.Component<any, any>{
    render() {
        return(
            /* About */
            <section className={'flex'}>
                <div className={'flex columns-2 w-[100%] h-[650px] mx-20'}>

                    <div className={'flex items-center '}>
                        <div className={'flex-col  mx-20 space-y-6 text-[#213360] items-center'}>
                            <h1 className={'text-4xl font-bold '}>Improving The Quality Of Your Life Through Better Health</h1>
                            <p className={'text-m font-bold '}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and to be the first and best choice for healthcare.</p>
                            <p className={'text-m text-[#213360]'}>We will work with you to develop individualised care plans, including management of chronic diseases. We are committed to being the region’s premier healthcare network providing patient centered care that inspires clinical and service excellence.</p>
                            <div className={'flex space-y-4'}/>
                            <MyButton children={'Meet Our Doctors'} />
                           </div>

                    </div>

                    <div className={"flex justify-center items-center"}>
                        <img src={'src/assets/doctor-nurses-special-equipment.jpg'} className={'w-[900px] h-[450px]'}/>
                    </div>
                </div>

            </section>
        );
    }

}