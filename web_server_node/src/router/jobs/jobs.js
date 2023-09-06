"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobRouter = void 0;
const express_1 = __importDefault(require("express"));
const NewJobPost_1 = __importDefault(require("../../controller/jobs/NewJobPost"));
const GetJobs_1 = require("../../controller/jobs/GetJobs");
const DeleteJob_1 = require("../../controller/jobs/DeleteJob");
const BrodcastJob_controller_1 = require("../../controller/jobs/BrodcastJob.controller");
const router = express_1.default.Router();
exports.jobRouter = router;
router.get("/jobs/getJobByCompanyId/:companyId", GetJobs_1.getJobsByCompany);
router.get("/jobs/getJobByRecruiterId/:recruiterId", GetJobs_1.getJobsRecruiter);
router.get("/jobs/getJobByJobId/:jobId", GetJobs_1.getJobDetails);
router.post("/jobs/postjob", NewJobPost_1.default);
router.post("/job/brodcast", BrodcastJob_controller_1.brodcastJob);
router.delete("/jobs/deleteJobDetailsByJobId/:jobId", DeleteJob_1.deleteJob);
