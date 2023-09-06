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
exports.getApplicantInvitedJobList = void 0;
const applicant_service_1 = require("../../../service/applicant/applicant.service");
const getApplicantInvitedJobList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const applicantId = req.params.id;
    if (applicantId === undefined) {
        res.status(422).send({
            success: false,
            message: "fields are empty"
        });
    }
    else {
        try {
            const response = yield (0, applicant_service_1.getApplicantInvitedJobListService)(applicantId);
            if (response) {
                if (response.length !== 0) {
                    res.status(200).json({
                        message: "fetched successfully",
                        data: response
                    });
                }
            }
            else {
                res.status(404).send({
                    message: "no invited jobs yet",
                    data: response
                });
            }
        }
        catch (e) {
            res.status(500).send({
                success: false,
                message: "error in server"
            });
        }
    }
});
exports.getApplicantInvitedJobList = getApplicantInvitedJobList;
