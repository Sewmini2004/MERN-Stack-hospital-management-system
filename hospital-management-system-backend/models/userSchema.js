import * as mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema =new mongoose.Schema({
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
    nic:{
        type:String,
        required:true,
        minLength: [13,"NIC must contain exact 13 digits !!"],
        maxLength: [13,"NIC must contain exact 13 digits !!"]

    },
    dob:{
        type:Date,
        required:[true,"DOB is Required!"],
    },
    gender:{
        type:String,
        required:true,
        enum: ["Male","Female"],
    },
    password:{
        type:String,
        minLength:[8,"Password Must Contain At Least 8 Characters !"],
        required:true,
        select:false,
    },
    role:{
        type:String,
        required:true,
        enum: ["Admin","Patient","Doctor"],
    },
    doctorDepartment:{
        type:String,
    },
    doctorAvatar:{
        public_id:String,
        url: String,
    },
});

//api document ekk save krnn klim mem hdla thyenonm mke tk wda krno e kynne user.save() ghuwma mekt avth tmai save wenne mthnim apit validation em dla blnn pluwm ek thrunda? hrii
userSchema.pre("save",async function (next){
    if (!this.isModified("password")){ //mthndi pwd ek wens wel nthnm save krddi klim ekmnm mkuth krn nthuw ilga ekt ywno em nthnm
        next();
    }
    this.password = await bcrypt.hash(this.password,10); //mthnim ewn pwd ek encrypt krno e kynne ar hri hri dnno
});

userSchema.methods.comparePassword =async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};

userSchema.methods.generateJsonWebToken = function (){
    return jwt.sign({id: this._id }, process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRES,
    });
};
// mt meke expree dapu then tiki react dapu thntki reamongo db node tiki tina thn penno react backend eke nee hrida ek hri
export const User =mongoose.model("User",userSchema)

