import express from "express";
import postNewJobs from "../../controller/jobs/NewJobPost";

const router = express.Router();

router.post("/jobs/register",postNewJobs);

export {router as jobRouter}