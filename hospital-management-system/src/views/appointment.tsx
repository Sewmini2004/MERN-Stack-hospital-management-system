import React from "react";
import {Input, Select} from "@chakra-ui/react";
import MyButton from "../components/button/myButton";
import BasicTextFields from "../components/textField/basicTextFields";

export class Appointment extends React.Component<any, any> {
    render() {
        return (
            <section className={'flex items-center'}>
                <div
                    className={'w-[100%] h-[520px] border-3 mx-40 p-12 rounded-xl shadow-xl shadow-gray-500/100 bg-white '}>
                    <div className={'flex flex-col justify-center '}>
                        <h1 className={'text-4xl font-bold text-[#213360] my-4 '}>Book An Appointment</h1>
                        <p className={'text-s text-[#213360]'}>Please feel welcome to contact our friendly
                            reception staff with any general or medical enquiry.
                            Our doctors will receive or return any urgent calls.</p>
                    </div>


                    <div>
                        <div className={'grid grid-cols-2 gap-4 justify-start my-10 gap-3 '}>
                            <Input placeholder='Name :'/>
                            <Input placeholder='Email :'/>
                            {/*   <BasicTextFields/>*/}
                            <Select placeholder='Choose Doctor :'>
                                <option value='doc1'>Option 1</option>
                                <option value='doc2'>Option 2</option>
                                <option value='doc3'>Option 3</option>
                                <option value='doc4'>Option 4</option>
                                <option value='doc5'>Option 5</option>
                            </Select>
                            <Input placeholder='Phone :'/>
                            <Input placeholder='Date :'/>
                            {/*    <BasicDatePicker label="Basic date picker" />*/}
                            <Input placeholder='Time :'/>

                        </div>


                        <MyButton children={'Book Appointment'} width={430}/>


                    </div>


                </div>

            </section>
        );
    }
}