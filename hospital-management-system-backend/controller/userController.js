import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import {User} from "../models/userSchema.js";
import {generateToken} from "../utils/jwtToken.js"
import cloudinary from "cloudinary";

export const patientRegister =catchAsyncErrors(async(req,res,next)=>{
    const {firstName, lastName, email, phone, password, gender, dob, nic, role} =req.body;
    if (!firstName ||
        !lastName ||
        !email ||
        !phone ||
        !password ||
        !gender ||
        !dob ||
        !nic ||
        !role
    ){
        return next(new ErrorHandler("Please Fill Full Form !",400));
    }

    let user = await User.findOne({ email });
    if (user){
        return next(new ErrorHandler("User Already Registered!" , 400));
    }
    user = await User.create({
        firstName,
        lastName,
        email,
        phone,
        password,
        gender,
        dob,
        nic,
        role,
    });
    generateToken(user,"User Registered!",200,res);

});

export const login = catchAsyncErrors(async (req,res,next)=>{
    const {email,password,confirmPassword,role} =req.body;
    if (!email || !password || !confirmPassword || !role){
      return next(new ErrorHandler("Please Provide All Detailes !", 400));
    }
    if (password !== confirmPassword){
        return next(new ErrorHandler("Password And Confirm Password Do Not Match !", 400));
    }
    const user = await  User.findOne({email}).select("+password");

    if (!user){
        return next(new ErrorHandler("Invalid Password Or Email !", 400));

    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched){
        return next(new ErrorHandler("Invalid Password Or Email !", 400));

    }
    if (role !== user.role){
        return next(new ErrorHandler("User With This Role Not Found !", 400));

    }
    generateToken(user,"User Login Successfully!",200,res);

});

export const addNewAdmin = catchAsyncErrors(async (req,res,next)=>{
    const {firstName, lastName, email, phone, password, gender, dob, nic} =req.body;
    if (!firstName ||
        !lastName ||
        !email ||
        !phone ||
        !password ||
        !gender ||
        !dob ||
        !nic
    ){
        return next(new ErrorHandler("Please Fill Full Form !",400));
    }

    const isRegistered = await User.findOne({ email });
    if (isRegistered){
        return next(new ErrorHandler(`${isRegistered.role} With This Email Already Exists !`))
    }
    const admin = await User.create({firstName, lastName, email, phone, password, gender, dob, nic,role:"Admin"})

    res.status(200).json({
        success: true,
        message: "New Admin Registered!",
    });

});

export const getAllDoctors = catchAsyncErrors(async (req,res,next) =>{
   const doctors = await User.find({role:"Doctor"});
   res.status(200).json({
       success:true,
       doctors
   });
});


export const getAllAdmins = catchAsyncErrors(async (req,res,next) =>{
    const admins = await User.find({role:"Admin"});
    res.status(200).json({
        success:true,
        admins
    });
});

export const getUserDetailes = catchAsyncErrors(async(req,res,next) =>{
   const user = req.user;
   res.status(200).json({
       success:true,
       user,
   });
});


export const logoutAdmin = catchAsyncErrors(async (req, res, next) => {
    res.status(200).cookie("adminToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    }).json({
        success: true,
        message: "User Log Out Successfully!",
    });
});

export const logoutPatient = catchAsyncErrors(async (req, res, next) => {
    res.status(200).cookie("patientToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    }).json({
        success: true,
        message: "Patient Log Out Successfully!",
    });
});

export const addNewDoctor = catchAsyncErrors(async(req,res,next) =>{
  if (!req.files || Object.keys(req.files).length === 0){
      return next(new ErrorHandler("Doctor Avatar Required!",400 ))
  }

  const { docAvatar } = req.files;
  const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
  if (!allowedFormats.includes(docAvatar.mimetype)){
      return next(new ErrorHandler("File Format Not Supported !" ,400));
  }
  const {
      firstName,
      lastName,
      email,
      phone,
      password,
      gender,
      dob,
      nic,
      doctorDepartment,
  } = req.body;
  if (
      (!firstName ||
      !lastName  ||
      !email  ||
      !phone  ||
      !password  ||
      !gender  ||
      !dob  ||
      !nic  ||
      !doctorDepartment)
      ){
      return next(new ErrorHandler("Please Provide Full Detailes!" , 400));
  }
  const isRegistered = await User.findOne({email});
  if (isRegistered){
      return next(new ErrorHandler(`${isRegistered.role} already registered with this email` ,
          400
      )
      );
  }
  const cloudinaryResponse = await cloudinary.uploader.upload(
   docAvatar.tempFilePath
  );
  if (!cloudinaryResponse || cloudinaryResponse.error){
      console.error("Cloudinary Error:",cloudinaryResponse.error || "Unknown Cloudinary Error");
  }
  const doctor = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password,
      gender,
      dob,
      nic,
      doctorDepartment,
      role:"Doctor",
      docAvatar:{
          public_id: cloudinaryResponse.public_id,
          url: cloudinaryResponse.secure_url,
      },
  });
  res.status(200).json({
     success:true,
     message:"New Doctor Registered!",
     doctor
  });

});

export const updateAdmin = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    const updateData = req.body;
    console.log("Request comes");
    if (!id) {
        return next(new ErrorHandler("Admin ID is required!", 400));
    }

    // Check if the admin exists
    let admin = await User.findById(id);

    if (!admin) {
        return next(new ErrorHandler("Admin not found!", 404));
    }

    // Ensure the role is Admin
    if (admin.role !== "Admin") {
        return next(new ErrorHandler("The user with the given ID is not an admin!", 400));
    }

    // Handle avatar update if file is provided
    if (req.files && req.files.avatar) {
        const { avatar } = req.files;
        const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
        if (!allowedFormats.includes(avatar.mimetype)) {
            return next(new ErrorHandler("File format not supported!", 400));
        }

        const cloudinaryResponse = await cloudinary.uploader.upload(avatar.tempFilePath);
        if (!cloudinaryResponse || cloudinaryResponse.error) {
            console.error("Cloudinary Error:", cloudinaryResponse.error || "Unknown Cloudinary Error");
            return next(new ErrorHandler("Failed to upload avatar to cloud storage!", 500));
        }

        updateData.avatar = {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
        };
    }

    // Update admin details
    admin = await User.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        success: true,
        message: "Admin details updated successfully!",
        admin,
    });
});

export const deleteAdmin = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return next(new ErrorHandler("Admin ID is required!", 400));
    }

    // Check if the admin exists
    const admin = await User.findById(id);

    if (!admin) {
        return next(new ErrorHandler("Admin not found!", 404));
    }

    // Ensure the role is Admin
    if (admin.role !== "Admin") {
        return next(new ErrorHandler("The user with the given ID is not an admin!", 400));
    }

    // Delete the admin
    await User.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        message: "Admin deleted successfully!",
    });
});

export const deleteDoctor = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params; // me wdyta gnnth pluwm
    /*
    /:vidura
    req.param.vidura;
    const {vidura} = req.param;

    me dekm ekai mek thrunda oww
    */

    /*

    next

    mken krnne middleware function ekakadi ilg ekt ywn ek. mek samanai api filter ekk dmmama filterchain ekt ar add krnne java wl annekt ek thrunda hroii
    */


    /*
    req
    en request eka mke body ek gnn pluwm pana req.body kyl ghla hrida hrii


    res

    res.status(200)  mken apit ar http statsu ek hdnn pluwm 400kd 500kd 200kd em ek thrunda ow mee mt oye tik newei jwt tik kiyl denoko owa dnnonei

    res
    */

    ///doctors/delete/:id
    //mke id ek gnne req.param.id kyl mke thbunoth bbo /:vidura ok gnne req.param.vidura kyl hrida

    if (!id) {
        return next(new ErrorHandler("Doctor ID is required!", 400));
    }

    // Check if the doctor exists
    const doctor = await User.findById(id);

    if (!doctor) {
        return next(new ErrorHandler("Doctor not found!", 404));
    }

    // Ensure the role is Doctor
    if (doctor.role !== "Doctor") {
        return next(new ErrorHandler("The user with the given ID is not a doctor!", 400));
    }

    // Delete the doctor
    await User.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        message: "Doctor deleted successfully!",
    });
});


export const updateDoctor = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    const updateData = req.body;

    if (!id) {
        return next(new ErrorHandler("Doctor ID is required!", 400));
    }

    // Check if the doctor exists
    let doctor = await User.findById(id);

    if (!doctor) {
        return next(new ErrorHandler("Doctor not found!", 404));
    }

    // Ensure the role is Doctor
    if (doctor.role !== "Doctor") {
        return next(new ErrorHandler("The user with the given ID is not a doctor!", 400));
    }

    // Handle avatar update if file is provided
    if (req.files && req.files.docAvatar) {
        const { docAvatar } = req.files;
        const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
        if (!allowedFormats.includes(docAvatar.mimetype)) {
            return next(new ErrorHandler("File format not supported!", 400));
        }

        const cloudinaryResponse = await cloudinary.uploader.upload(docAvatar.tempFilePath);
        if (!cloudinaryResponse || cloudinaryResponse.error) {
            console.error("Cloudinary Error:", cloudinaryResponse.error || "Unknown Cloudinary Error");
            return next(new ErrorHandler("Failed to upload avatar to cloud storage!", 500));
        }

        updateData.docAvatar = {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
        };
    }

    // Update doctor details
    doctor = await User.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        success: true,
        message: "Doctor details updated successfully!",
        doctor,
    });
});


