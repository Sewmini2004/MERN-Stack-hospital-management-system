import React from "react";
import {Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack,CardHeader,Image,Text} from "@chakra-ui/react";
import {CiFacebook} from "react-icons/ci";
import {FiTwitter} from "react-icons/fi";
import {FaInstagram} from "react-icons/fa6";

export class Cards5 extends React.Component<any, any>{
    render() {
        return (
            <div>
                <Card maxW='sm'>
                    <CardBody >
                        <Image
                            src='src/assets/dog(3).jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='5' spacing='3' >
                            <Heading size='md'>Dermatologists</Heading>
                            <Text color='blue.600' fontSize='xl'>
                                Cardiology Specialist
                            </Text>
                            <Text>
                                Brian specializes in treating skin, hair, nail,
                                and mucous membrane. He also address cosmetic issues,
                                helping to revitalize the appearance of the skin
                               </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <ul className={'flex gap-[1vw] text-black'}>
                                <li className={'bg-[#21cdc0] p-3 rounded-full mx-2  hover:border-2 border-gray-400'}><a href="#"><CiFacebook/></a></li>
                                <li className={'bg-[#21cdc0] p-3 rounded-full mx-2 hover:border-2 border-gray-400'}><a href="#"><FiTwitter/></a></li>
                                <li className={'bg-[#21cdc0] p-3 rounded-full mx-2 hover:border-2 border-gray-400'}><a href="#"><FaInstagram/></a></li>
                            </ul>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </div>

        );
    }

}