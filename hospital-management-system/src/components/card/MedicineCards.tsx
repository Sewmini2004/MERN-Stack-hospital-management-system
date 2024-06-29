import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Heading,
    Button,
    Divider,
    Image,
    Stack,
    ButtonGroup
} from '@chakra-ui/react'
import {FaHandHoldingHeart, FaHospitalUser, FaInstagram, FaUserDoctor} from "react-icons/fa6";
import {FaAmbulance} from "react-icons/fa";
import {GiMedicines} from "react-icons/gi";
import {AiFillMedicineBox} from "react-icons/ai";
import {CiFacebook} from "react-icons/ci";
import {FiTwitter} from "react-icons/fi";
interface Props {
    price:number,
    description:string,
    image?:string,
    heading:string

}
function medicineCards({price,description,image,heading }: Props) {
    return (
        <div  className={'rounded-xl border-4 border-gray-300  shadow-xl shadow-gray-500/100'}>
            <Card >
                <CardBody >
                    <Image
                        src={image}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='5' spacing='3' >
                        <Heading size='md'>{heading}</Heading>
                        <Text color='blue.600' fontSize='x'>
                            {description}
                        </Text>
                        <Text>
                            {price}
                        </Text>
                    </Stack>
                </CardBody>
          </Card>
        </div>


        );
    }
    export default medicineCards;



