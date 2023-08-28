import express, { Request, Response } from "express";
import { registerNewUser } from "../../../controller/users/auth/Register";
import { loginUser } from "../../../controller/users/auth/Login";
import { getApplicantDetailsById } from "../../../controller/users/applicantDetails/GetApplicantDetails";

const router = express.Router();

router.post("/applicant/register", registerNewUser);
router.post("/applicant/login", loginUser);
router.get("/applicant/getApplicantDetailsById/:id",getApplicantDetailsById);

export { router as ApplicantRouter }