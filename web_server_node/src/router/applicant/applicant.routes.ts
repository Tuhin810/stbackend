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

router.route("/applicant/getApplicantDetailsById/:id").get(getApplicantDetailsById);
router.route("/applicant/getApplicantInvitedJobDetailsList/:id").get(getApplicantInvitedJobList);
router.route("/applicant/getApplicantResumePrivacy/:id").get(getApplicantResumePrivacy);
router.route("/applicant/getApplicantAcceptedJobList/:id").get(getApplicantAcceptedJobList);
router.route("/applicant/register").post(registerNewUser);
router.route("/applicant/login").post(loginUser);
router.route("/applicant/googleLogin/:email").post(googleLogin);
router.route("/applicant/forgetPassword/:applicantPhone").post(fogottenPassword);
router.route("/applicant/applyJob/:jobId/:applicantId").post(applicantApplyJob);
router.route("/applicant/updateApplicantEducation/:id").put(updateQualification);
router.route("/applicant/updateApplicantExperience/:id").put(updateExperience);
router.route("/applicant/updateApplicantSkills/:id").put(updateApplicantSkillById);
router.route("/applicant/updateApplicantProfile/:id").patch(updateApplicntProfileDetails);
router.route("/applicant/updateApplicantPrivacy/:id/:visibilty").patch(updateApplicantPrivacy);



export { router as ApplicantRouter }