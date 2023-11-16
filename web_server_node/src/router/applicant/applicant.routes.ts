import express from "express";
import { registerNewUser } from "../../controller/users/auth/Register";
import { googleLogin, loginUser } from "../../controller/users/auth/Login";
import { getApplicantDetailsById } from "../../controller/users/applicantDetails/GetApplicantDetails";
import { updateQualification } from "../../controller/users/applicantQualification/applicantQualification.controller";
import { updateApplicantSkillById } from "../../controller/users/applicantSkill/applicantSkill.controller";
import { getApplicantInvitedJobList } from "../../controller/users/applicantInvitedJobLisit/GetInvitedJobList.Controller";
import { updateApplicntProfileDetails } from "../../controller/users/applicantDetails/UpdateApplicantProfileDetails";
import { getApplicantResumePrivacy, updateApplicantPrivacy } from "../../controller/users/applicantPrivacy/ApplicantPrivacy";
import { applicantApplyJob } from "../../controller/users/applicantAppliedJobList/ApplicantApplyJob";
import { getApplicantAcceptedJobList } from "../../controller/users/ApplicantAcceptedjobList/GetApplicantAcceptedjobList";
import { updateExperience } from "../../controller/users/applicantExperience/ApplicantExperience";
import { fogottenPassword } from "../../controller/users/auth/forgottenPassWord";
import applicantAuth from "../../middleware/applicant.middleware";


const router = express.Router();

router.get("/applicant/getApplicantDetailsById/:id", getApplicantDetailsById);
router.get("/applicant/getApplicantInvitedJobDetailsList/:id", applicantAuth, getApplicantInvitedJobList);
router.get("/applicant/getApplicantResumePrivacy/:id", applicantAuth, getApplicantResumePrivacy);
router.get("/applicant/getApplicantAcceptedJobList/:id", applicantAuth, getApplicantAcceptedJobList);
router.post("/applicant/register", registerNewUser);
router.post("/applicant/login", loginUser);
router.post("/applicant/googleLogin/:email", googleLogin);
router.post("/applicant/forgetPassword/:applicantPhone", fogottenPassword);
router.post("/applicant/applyJob/:jobId/:applicantId", applicantAuth, applicantApplyJob);
router.put("/applicant/updateApplicantEducation/:id", applicantAuth, updateQualification);
router.put("/applicant/updateApplicantExperience/:id", applicantAuth, updateExperience);
router.put("/applicant/updateApplicantSkills/:id", applicantAuth, updateApplicantSkillById);
router.patch("/applicant/updateApplicantProfile/:id", applicantAuth, updateApplicntProfileDetails);
router.patch("/applicant/updateApplicantPrivacy/:id/:visibilty", applicantAuth, updateApplicantPrivacy);

export { router as ApplicantRouter }