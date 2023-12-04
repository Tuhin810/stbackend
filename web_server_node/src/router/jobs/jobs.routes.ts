import express from "express";
import postNewJobs from "../../controller/jobs/NewJobPost";
import { getAllJob, getJobDetails, getJobsByCompany, getJobsRecruiter, getMatchedJobDetails, matchedApplicantDetailsList } from "../../controller/jobs/GetJobs";
import { deleteJob } from "../../controller/jobs/DeleteJob";
import { brodcastJob } from "../../controller/jobs/BrodcastJob.controller";
import { postApplicantPreferredJob } from "../../controller/users/applicantPreferredJob/ApplicantPreferredJob";
import { recruiterSearchPreferredJob } from "../../controller/recruiter/searchJob/RecruiterSearchPreferredJob";
import { matchedApplicantHire } from "../../controller/users/applicantHired/ApplicantHired";
import { matchedApplicantstatus } from "../../controller/users/applicantHired/ApplicantStatus";
import employerAuth from "../../middleware/employer.middleware";

const router = express.Router();

router.route("/getAllJobs").get(getAllJob);
router.route("/getJobByCompanyId/:companyId").get(getJobsByCompany);
router.route("/getJobByRecruiterId/:recruiterId").get(getJobsRecruiter);
router.route("/searchApplicant/:job").get(recruiterSearchPreferredJob);
router.route("/getJobByJobId/:jobId").get(getJobDetails)
router.route("/getMatchedProfileListByJobId/:jobId").get(matchedApplicantDetailsList);
router.route("/getMatchedJobDetails/:jobId/:applicantId").get(getMatchedJobDetails);

router.route("/postjob").post(postNewJobs);
router.route("/brodcast/:id").post(brodcastJob);
router.route("/addPreferredJob").post(postApplicantPreferredJob);

router.route("/hired/:jobId").put(matchedApplicantHire)

router.route("/deleteJobDetailsByJobId/:jobId").delete(deleteJob)

module.exports = router