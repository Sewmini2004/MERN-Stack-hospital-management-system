import React from "react";
import {Appointment} from "./appointment";
import MedicineCards from "../components/card/MedicineCards";
export class Medicine extends React.Component<any, any>{
render() {
    return(
        <section className={'flex  flex-col w-[100%] h-[1700px] bg-gradient-to-r from-[#21cdc0] to-[#213360] '}>

            <div>
                <div className={'flex justify-center w-[100%] h-[150px] bg-white'}>
                   {/* <img src={"src/assets/peakpx (17).jpg" } className={' w-[100%] h-[150px]'}/>*/}
                    <h1 className={"text-4xl font-bold text-[#213360]  m-10 "}>Medicines in our pharmacy</h1>
                </div>
            </div>
            <div className="flex columns h-65  space-x-10 m-20">
                <MedicineCards heading={"Panadol"} description={"vfdf hehfedhf hfiehfej erhieheh beihi"} image={"src/assets/doctor-nurses-special-equipment.jpg"} price={230.00} />
                <MedicineCards heading={"Panadol"} description={"vfdf hehfedhf hfiehfej erhieheh beihi"} image={"src/assets/doctor-nurses-special-equipment.jpg"} price={230.00} />
                <MedicineCards heading={"Panadol"} description={"vfdf hehfedhf hfiehfej erhieheh beihi"} image={"src/assets/doctor-nurses-special-equipment.jpg"} price={230.00} />
                <MedicineCards heading={"Panadol"} description={"vfdf hehfedhf hfiehfej erhieheh beihi"} image={"src/assets/doctor-nurses-special-equipment.jpg"} price={230.00} />
               </div>
            <div className="flex columns h-65  space-x-10 m-20 mt-6">
                <MedicineCards heading={"Panadol"} description={"vfdf hehfedhf hfiehfej erhieheh beihi"} image={"src/assets/doctor-nurses-special-equipment.jpg"} price={230.00} />
                <MedicineCards heading={"Panadol"} description={"vfdf hehfedhf hfiehfej erhieheh beihi"} image={"src/assets/doctor-nurses-special-equipment.jpg"} price={230.00} />
                <MedicineCards heading={"Panadol"} description={"vfdf hehfedhf hfiehfej erhieheh beihi"} image={"src/assets/doctor-nurses-special-equipment.jpg"} price={230.00} />
                <MedicineCards heading={"Panadol"} description={"vfdf hehfedhf hfiehfej erhieheh beihi"} image={"src/assets/doctor-nurses-special-equipment.jpg"} price={230.00} />
            </div>

            <div className="flex columns h-65  space-x-10 m-20 mt-6">
                <MedicineCards heading={"Panadol"} description={"vfdf hehfedhf hfiehfej erhieheh beihi"} image={"src/assets/doctor-nurses-special-equipment.jpg"} price={230.00} />
                <MedicineCards heading={"Panadol"} description={"vfdf hehfedhf hfiehfej erhieheh beihi"} image={"src/assets/doctor-nurses-special-equipment.jpg"} price={230.00} />
                <MedicineCards heading={"Panadol"} description={"vfdf hehfedhf hfiehfej erhieheh beihi"} image={"src/assets/doctor-nurses-special-equipment.jpg"} price={230.00} />
                <MedicineCards heading={"Panadol"} description={"vfdf hehfedhf hfiehfej erhieheh beihi"} image={"src/assets/doctor-nurses-special-equipment.jpg"} price={230.00} />
            </div>

        </section>
    );
}
}
