import express from "express";
import {isAdminAuthenticated, isPatientAuthenticated} from "../models/auth.js";
import {getAllAppointment, postAppointment, updateAppointmentStatus} from "../controller/appointmentController.js";
//route hdann use krnne express kyl nkm mthk thygnn pana ek use wenne controller wl wdipurma wen thnwl thjid dnne mn dkla thynne mewge thmai
//oye controller neweineh ek map krnne controller ekkt ah ow controller wl nwei pana ek map krno controller wl function ekkta
const router = express.Router();
router.post("/post",isPatientAuthenticated, postAppointment);
router.get("/getall",isAdminAuthenticated, getAllAppointment);
router.put("/update/:id",isAdminAuthenticated, updateAppointmentStatus);

export default router;