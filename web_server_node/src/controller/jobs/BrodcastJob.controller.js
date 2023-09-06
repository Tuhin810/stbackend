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
exports.brodcastJob = void 0;
const job_service_1 = require("../../service/jobs/job.service");
const brodcastJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jobDetails = req.body;
    if (!jobDetails) {
        res.status(422).json({
            message: "fields are empty",
        });
    }
    else {
        try {
            const response = yield (0, job_service_1.matchedJobApplicants)(jobDetails);
            if (response) {
                res.status(200).json({
                    message: "brodcasting successfully",
                    data: response
                });
            }
            else {
                res.status(404).json({
                    message: "no applicants here",
                    data: response
                });
            }
        }
        catch (error) {
            res.status(500).json({
                message: "error in server",
                error
            });
        }
    }
});
exports.brodcastJob = brodcastJob;
