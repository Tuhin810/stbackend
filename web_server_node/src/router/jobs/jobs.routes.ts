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

router.route("/jobs/getAllJobs").get(getAllJob);
router.route("/jobs/getJobByCompanyId/:companyId").get(getJobsByCompany);
router.route("/jobs/getJobByRecruiterId/:recruiterId").get(getJobsRecruiter);
router.route("/jobs/searchApplicant/:job").get(recruiterSearchPreferredJob);
router.route("/jobs/getJobByJobId/:jobId").get(getJobDetails)
router.route("/jobs/getMatchedProfileListByJobId/:jobId").get(matchedApplicantDetailsList);
router.route("/jobs/getMatchedJobDetails/:jobId/:applicantId").get(getMatchedJobDetails);

router.route("/jobs/postjob").post(postNewJobs);
router.route("/job/brodcast/:id").post(brodcastJob);
router.route("/job/addPreferredJob").post(postApplicantPreferredJob);

router.route("/job/hire/:jobId").put(matchedApplicantHire)
router.route("/job/:status/:jobId").put(matchedApplicantstatus)

router.delete("/jobs/deleteJobDetailsByJobId/:jobId", deleteJob);

module.exports = router