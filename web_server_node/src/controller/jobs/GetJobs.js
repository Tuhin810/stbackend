"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobDetails = exports.getJobsRecruiter = exports.getJobsByCompany = void 0;
const job_service_1 = require("../../service/jobs/job.service");
const mongoose_1 = __importDefault(require("mongoose"));
//get jobs by company
const getJobsByCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const companyId = req.params.companyId;
    if (!companyId) {
        return res.status(422).send({
            success: false,
            message: "Fields are empty",
        });
    }
    else {
        try {
            (0, job_service_1.getJobsByCompanyId)(companyId)
                .then((data) => {
                const jobsList = data;
                // const applicantsCount = await ApplicantModel.countDocuments({  });
                if (jobsList.length !== 0) {
                    res.status(200).send({
                        success: true,
                        message: "jobs fetched successfully",
                        jobList: jobsList
                    });
                }
                else {
                    res.status(404).send({
                        success: false,
                        message: "job list not found",
                        jobList: jobsList
                    });
                }
            });
        }
        catch (e) {
            res.status(500).send({
                success: false,
                message: "Error in Job searching",
                e,
            });
        }
    }
});
exports.getJobsByCompany = getJobsByCompany;
const getJobsRecruiter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recruiterId = req.params.recruiterId;
    if (!recruiterId) {
        return res.status(422).send({
            success: false,
            message: "Fields are empty",
        });
    }
    else {
        try {
            (0, job_service_1.getJobsByRecruiterId)(recruiterId)
                .then((data) => {
                const jobsList = data;
                if (jobsList.length !== 0) {
                    res.status(200).send({
                        success: true,
                        message: "jobs fetched successfully",
                        jobList: jobsList
                    });
                }
                else {
                    res.status(404).send({
                        success: false,
                        message: "job list not found",
                        jobList: jobsList
                    });
                }
            });
        }
        catch (e) {
            res.status(500).send({
                success: false,
                message: "Error in Job searching",
                e,
            });
        }
    }
});
exports.getJobsRecruiter = getJobsRecruiter;
const getJobDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.jobId;
    const jobId = new mongoose_1.default.Schema.Types.ObjectId(id);
    if (jobId === undefined || !jobId) {
        res.status(422).send({
            success: false,
            message: "job id is bad"
        });
    }
    else {
        try {
            const response = yield (0, job_service_1.getJobDetailsByJobId)(jobId);
            if (response) {
                res.status(200).send({
                    success: true,
                    message: "Job Details fetched successfully",
                    jobDetails: response
                });
            }
        }
        catch (e) {
            res.send(500).send({
                success: false,
                message: "internal problem",
                e
            });
        }
    }
});
exports.getJobDetails = getJobDetails;
