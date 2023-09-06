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
exports.updateApplicantPrivacy = exports.getApplicantResumePrivacy = exports.getApplicantProfilePrivacy = void 0;
const applicant_service_1 = require("../../../service/applicant/applicant.service");
const getApplicantProfilePrivacy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const applicantId = req.params.id;
    if (applicantId === undefined) {
        res.status(422).json({
            message: "data fields are missing"
        });
    }
    else {
        try {
            const response = yield (0, applicant_service_1.isApplicantProfilePrivate)(applicantId);
            if (response) {
                res.status(200).json({
                    message: "data updated successfully",
                    data: response
                });
            }
            else {
                res.status(404).json({
                    message: "the applicant id is not exist",
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
exports.getApplicantProfilePrivacy = getApplicantProfilePrivacy;
const getApplicantResumePrivacy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const applicantId = req.params.id;
    if (applicantId === undefined) {
        res.status(422).json({
            message: "data fields are missing"
        });
    }
    else {
        try {
            const response = yield (0, applicant_service_1.isApplicantResumePrivate)(applicantId);
            if (response) {
                res.status(200).json({
                    message: "data updated successfully",
                    data: response
                });
            }
            else {
                res.status(404).json({
                    message: "the applicant id is not exist",
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
exports.getApplicantResumePrivacy = getApplicantResumePrivacy;
const updateApplicantPrivacy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const applicantId = req.params.id;
    const applicantPrivacy = req.body;
    if (applicantId === undefined || !applicantPrivacy) {
        res.status(422).json({
            message: "data fields are missing"
        });
    }
    else {
        try {
            const response = yield (0, applicant_service_1.updateApplicantProfileAndResumePrivacy)(applicantId, applicantPrivacy);
            if (response) {
                res.status(200).json({
                    message: "data updated successfully",
                    data: response
                });
            }
            else {
                res.status(207).json({
                    message: "data updated successfully,but failed to get data",
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
exports.updateApplicantPrivacy = updateApplicantPrivacy;
