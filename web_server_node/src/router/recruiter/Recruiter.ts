import express from "express";
import { registerNewRecruiter } from "../../controller/recruiter/auth/Register";
import { loginRecruiter } from "../../controller/recruiter/auth/Login";
import { recruiterPayment } from "../../controller/recruiter/payment/RecruiterPayment";

const router = express.Router();

router.post("/recruiter/auth/register", registerNewRecruiter);
router.post("/recruiter/auth/login", loginRecruiter);
router.put("/recruiter/complete-payment/:id", recruiterPayment)

export { router as RecruiterRouter }