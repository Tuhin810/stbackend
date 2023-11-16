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

router.route("/getApplicantDetailsById/:id").get(getApplicantDetailsById);
router.route("/getApplicantInvitedJobDetailsList/:id").get(getApplicantInvitedJobList);
router.route("/getApplicantResumePrivacy/:id").get(getApplicantResumePrivacy);
router.route("/getApplicantAcceptedJobList/:id").get(getApplicantAcceptedJobList);
router.route("/register").post(registerNewUser);
router.route("/login").post(loginUser);
router.route("/googleLogin/:email").post(googleLogin);
router.route("/forgetPassword/:applicantPhone").post(fogottenPassword);
router.route("/applyJob/:jobId/:applicantId").post(applicantApplyJob);
router.route("/updateApplicantEducation/:id").put(updateQualification);
router.route("/updateApplicantExperience/:id").put(updateExperience);
router.route("/updateApplicantSkills/:id").put(updateApplicantSkillById);
router.route("/updateApplicantProfile/:id").patch(updateApplicntProfileDetails);
router.route("/updateApplicantPrivacy/:id/:visibilty").patch(updateApplicantPrivacy);



module.exports = router