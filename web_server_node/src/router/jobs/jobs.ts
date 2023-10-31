import express from "express";
import postNewJobs from "../../controller/jobs/NewJobPost";
import { getAllJob, getJobDetails, getJobsByCompany, getJobsRecruiter, getMatchedJobDetails, matchedApplicantDetailsList } from "../../controller/jobs/GetJobs";
import { deleteJob } from "../../controller/jobs/DeleteJob";
import { brodcastJob } from "../../controller/jobs/BrodcastJob.controller";
import { postApplicantPreferredJob } from "../../controller/users/applicantPreferredJob/ApplicantPreferredJob";
import { recruiterSearchPreferredJob } from "../../controller/recruiter/searchJob/RecruiterSearchPreferredJob";
import { matchedApplicantHire } from "../../controller/users/applicantHired/ApplicantHired";
import { matchedApplicantstatus } from "../../controller/users/applicantHired/ApplicantStatus";

const router = express.Router();

router.get("/jobs/getAllJobs", getAllJob);
router.get("/jobs/getJobByCompanyId/:companyId", getJobsByCompany);
router.get("/jobs/getJobByRecruiterId/:recruiterId", getJobsRecruiter);
router.get("/jobs/searchApplicant/:job", recruiterSearchPreferredJob);
router.get("/jobs/getJobByJobId/:jobId", getJobDetails)
router.get("/jobs/getMatchedProfileListByJobId/:jobId", matchedApplicantDetailsList);
router.get("/jobs/getMatchedJobDetails/:jobId/:applicantId", getMatchedJobDetails);
router.post("/jobs/postjob", postNewJobs);
router.post("/job/brodcast/:id", brodcastJob);
router.post("/job/addPreferredJob", postApplicantPreferredJob);
router.put("/job/hire/:jobId", matchedApplicantHire)
router.put("/job/:status/:jobId", matchedApplicantstatus)

router.delete("/jobs/deleteJobDetailsByJobId/:jobId", deleteJob);

export { router as jobRouter }