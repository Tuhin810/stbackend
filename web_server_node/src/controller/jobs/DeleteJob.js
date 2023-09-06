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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = void 0;
const job_service_1 = require("../../service/jobs/job.service");
const deleteJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jobId = req.params.jobId;
    if (!jobId) {
        return res.status(422).send({
            success: false,
            message: "Job ID is missing",
        });
    }
    try {
        const deletionResult = yield (0, job_service_1.deleteJobDetailsByJobId)(jobId);
        if (deletionResult) {
            res.status(200).send({
                success: true,
                message: "Job deleted successfully",
            });
        }
        else {
            res.status(404).send({
                success: false,
                message: "Job not found",
            });
        }
    }
    catch (e) {
        res.status(500).send({
            success: false,
            message: "Error while deleting job",
            error: e,
        });
    }
});
exports.deleteJob = deleteJob;
