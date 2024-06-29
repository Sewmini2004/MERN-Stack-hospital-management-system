import React from "react";
import {FaHandHoldingHeart, FaUserDoctor} from "react-icons/fa6";
import {GiCorkedTube, GiMedicinePills} from "react-icons/gi";

export class HomeCircle extends React.Component<any, any> {
    render() {
        return (
            <ul className={'flex gap-[2.3vw] '}>
                <div>
                    <li className={'bg-gray-100 w-28 h-28 p-7 rounded-full  hover:border-8 border-gray-400 '}><FaUserDoctor className={'w-12 h-12'}/></li>
                    <h2 className={'flex-row mx-2'}>Examination</h2>
                </div>
                <div>
                    <li className={'bg-gray-100 w-28 h-28 p-7 rounded-full  hover:border-8 border-gray-400 '}><GiMedicinePills className={'w-12 h-12'}/></li>
                    <h2 className={'flex-row mx-2'}>Prescription</h2>
                </div>
                <div>
                    <li className={'bg-gray-100 w-28 h-28 p-7 rounded-full  hover:border-8 border-gray-400 '}><FaHandHoldingHeart className={'w-12 h-12'}/></li>
                    <h2 className={'flex-row mx-2'}>Cardiogram</h2>
                </div>
                <div>
                    <li className={'bg-gray-100 w-28 h-28 p-7 rounded-full  hover:border-8 border-gray-400 '}><GiCorkedTube className={'w-12 h-12'}/></li>
                    <h2 className={'flex-row mx-2'}>Blood Pressure</h2>

                </div>

            </ul>


        );
    }

}