import express from "express";
import {
    addNewAdmin, addNewDoctor,
    getAllDoctors,
    getAllAdmins,
    getUserDetailes,
    login,
    logoutAdmin, logoutPatient,
    patientRegister, updateAdmin, deleteAdmin, deleteDoctor, updateDoctor,

} from "../controller/userController.js";
import {isAdminAuthenticated,isPatientAuthenticated} from "../models/auth.js";
const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated,addNewAdmin);
router.get("/doctors",getAllDoctors);
router.get("/admins",getAllAdmins);
router.get("/admin/me",isAdminAuthenticated,getUserDetailes);
router.get("/patient/me",isPatientAuthenticated,getUserDetailes);
router.get("/admin/logout",isAdminAuthenticated,logoutAdmin);
router.get("/patient/logout",isPatientAuthenticated,logoutPatient);
router.post("/doctor/addnew",isAdminAuthenticated,addNewDoctor);
router.put("/admin/update/:id", isAdminAuthenticated, updateAdmin);
router.put("/doctor/update/:id", isAdminAuthenticated, updateDoctor);
router.delete("/admin/delete/:id", isAdminAuthenticated, deleteAdmin);
router.delete("/doctors/delete/:id",isAdminAuthenticated,deleteDoctor);
//isAdminAuthenticated - middleware function ekk. middleware ekk kynne pana filter ekk wge ekk
// deleteAdmin me handler ekk mken krnne adla http request ek map krnw ape function ekta

export default router;