import express, { Request, Response } from "express";
import { registerNewUser } from "../../../controller/users/auth/Register";
import { loginUser } from "../../../controller/users/auth/Login";
import { getApplicantDetailsById } from "../../../controller/users/applicantDetails/GetApplicantDetails";
import { updateQualification } from "../../../controller/users/applicantQualification/applicantQualification.controller";
import { updateApplicantSkillById } from "../../../controller/users/applicantSkill/applicantSkill.controller";

const router = express.Router();

router.post("/applicant/register", registerNewUser);
router.post("/applicant/login", loginUser);
router.get("/applicant/getApplicantDetailsById/:id",getApplicantDetailsById);
router.put('/applicant/updateApplicantEducation/:id',updateQualification);
router.put("/applicant/updateApplicantSkills/:id/:skill",updateApplicantSkillById);

export { router as ApplicantRouter }