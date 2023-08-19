import express from "express";
import postNewJobs from "../../controller/jobs/NewJobPost";
import {getJobsByCompany, getJobsRecruiter} from "../../controller/jobs/GetJobs";

const router = express.Router();

router.post("/jobs/postjob",postNewJobs);
router.get('/jobs/getJobByCompanyId/:companyId',getJobsByCompany)
router.get('/jobs/getJobByRecruiterId/:recruiterId',getJobsRecruiter)

export {router as jobRouter}