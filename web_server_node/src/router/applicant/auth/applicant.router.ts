import express, { Request, Response } from "express";
import { registerNewUser } from "../../../controller/users/auth/Register";
import { loginUser } from "../../../controller/users/auth/Login";
import { getApplicantDetailsById } from "../../../controller/users/applicantDetails/GetApplicantDetails";
import { updateQualification } from "../../../controller/users/applicantQualification/applicantQualification.controller";
import { updateApplicantSkillById } from "../../../controller/users/applicantSkill/applicantSkill.controller";
import { getApplicantInvitedJobList } from "../../../controller/users/applicantInvitedJobLisit/GetInvitedJobList.Controller";
import { updateApplicntProfileDetails } from "../../../controller/users/applicantDetails/UpdateApplicantProfileDetails";
import { getApplicantProfilePrivacy, getApplicantResumePrivacy, updateApplicantPrivacy } from "../../../controller/users/applicantPrivacy/ApplicantPrivacy";
import { applicantApplyJob } from "../../../controller/users/applicantAppliedJobList/ApplicantApplyJob";
import { getApplicantAcceptedJobList } from "../../../controller/users/ApplicantAcceptedjobList/GetApplicantAcceptedjobList";

const router = express.Router();

router.get("/applicant/getApplicantDetailsById/:id", getApplicantDetailsById);
router.get("/applicant/getApplicantInvitedJobDetailsList/:id", getApplicantInvitedJobList);
router.get("/applicant/getApplicantProfilePrivacy/:id", getApplicantProfilePrivacy);
router.get("/applicant/getApplicantResumePrivacy/:id", getApplicantResumePrivacy);
router.get("/applicant/getApplicantAcceptedJobList/:id", getApplicantAcceptedJobList);

router.post("/applicant/register", registerNewUser);
router.post("/applicant/login", loginUser);
router.post("/applicant/applyJob/:jobId/:applicantId", applicantApplyJob);
router.put("/applicant/updateApplicantEducation/:id", updateQualification);
router.put("/applicant/updateApplicantSkills/:id", updateApplicantSkillById);
router.patch("/applicant/updateApplicantProfile/:id", updateApplicntProfileDetails);
router.patch("/applicant/updateApplicantPrivacy/:id", updateApplicantPrivacy);

export { router as ApplicantRouter }