import express from "express";
import postNewJobs from "../../controller/jobs/NewJobPost";
import {getJobDetails, getJobsByCompany, getJobsRecruiter} from "../../controller/jobs/GetJobs";
import { deleteJob } from "../../controller/jobs/DeleteJob";

const router = express.Router();

router.post("/jobs/postjob",postNewJobs);
router.get('/jobs/getJobByCompanyId/:companyId',getJobsByCompany)
router.get('/jobs/getJobByRecruiterId/:recruiterId',getJobsRecruiter)
router.get('/jobs/getJobByJobId/:jobId',getJobDetails)
router.delete('/jobs/deleteJobDetailsByJobId/:jobId',deleteJob);

export {router as jobRouter}