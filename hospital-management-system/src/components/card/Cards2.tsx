import React from "react";
import {Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack,CardHeader,Image,Text} from "@chakra-ui/react";
import {CiFacebook} from "react-icons/ci";
import {FiTwitter} from "react-icons/fi";
import {FaInstagram} from "react-icons/fa6";
import MyButton from "../button/myButton";

export class Cards2 extends React.Component<any, any>{
    render() {
        return (
            <div >
                <Card maxW='sm'>
                    <CardBody  >
                        <Image
                            src='src/assets/doc (1).jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='5' spacing='3' >
                            <Heading size='md'>Dupree Black</Heading>
                            <Text color='blue.600' fontSize='xl'>
                                Urologist
                            </Text>
                            <Text>
                                Black diagnose and treat diseases of the urinary tract in both men and wowen.He
                                also diagnose and treat anything involving the reproductive tract in men.
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