import express from "express";
import postNewJobs from "../../controller/jobs/NewJobPost";
import { getJobDetails, getJobsByCompany, getJobsRecruiter } from "../../controller/jobs/GetJobs";
import { deleteJob } from "../../controller/jobs/DeleteJob";
import { brodcastJob } from "../../controller/jobs/BrodcastJob.controller";

const router = express.Router();

router.get("/jobs/getJobByCompanyId/:companyId", getJobsByCompany)
router.get("/jobs/getJobByRecruiterId/:recruiterId", getJobsRecruiter)
router.get("/jobs/getJobByJobId/:jobId", getJobDetails)
router.post("/jobs/postjob", postNewJobs);
router.post("/job/brodcast", brodcastJob)
router.delete("/jobs/deleteJobDetailsByJobId/:jobId", deleteJob);

export { router as jobRouter }