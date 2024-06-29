import {mongo} from "mongoose";
import validator from "validator";
import * as mongoose from "mongoose";

const messageSchema =new mongoose.Schema({
    firstName:{
       type:String,
       required:true,
       minLength: [3,"First Name Must Contain At Least 3 Character !!"],
    },
    lastName:{
        type:String,
        required:true,
        minLength: [3,"Last Name Must Contain At Least 3 Character !!"],
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please Provide A Valid Email !!"],
    },
    phone:{
        type:String,
        required:true,
        minLength: [11,"Phone number must contain exact 11 digits !!"],
        maxLength: [11,"Phone number must contain exact 11 digits !!"]

    },
    message:{
        type:String,
        required:true,
        minLength: [10,"Message must contain at least 10 characters"],

    },
});

export const Message =mongoose.model("Message",messageSchema)
