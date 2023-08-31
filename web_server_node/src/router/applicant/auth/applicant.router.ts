import express, { Request, Response } from "express";
import { registerNewUser } from "../../../controller/users/auth/Register";
import { loginUser } from "../../../controller/users/auth/Login";
import { getApplicantDetailsById } from "../../../controller/users/applicantDetails/GetApplicantDetails";
import { updateQualification } from "../../../controller/users/applicantQualification/applicantQualification.controller";
import { updateApplicantSkillById } from "../../../controller/users/applicantSkill/applicantSkill.controller";
import { getApplicantInvitedJobList } from "../../../controller/users/applicantInvitedJobLisit/GetInvitedJobList.Controller";

const router = express.Router();

router.get("/applicant/getApplicantDetailsById/:id",getApplicantDetailsById);
router.get("/applicant/getApplicantInvitedJobDetailsList/:id",getApplicantInvitedJobList);
router.post("/applicant/register", registerNewUser);
router.post("/applicant/login", loginUser);
router.put('/applicant/updateApplicantEducation/:id',updateQualification);
router.put("/applicant/updateApplicantSkills/:id/:skill",updateApplicantSkillById);

export { router as ApplicantRouter }