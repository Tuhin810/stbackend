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
exports.getApplicantDetailsById = void 0;
const applicant_service_1 = require("../../../service/applicant/applicant.service");
const getApplicantDetailsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const applicantId = req.params.id;
    if (applicantId != undefined) {
        try {
            yield (0, applicant_service_1.getApplicantDetails)(applicantId).then(data => {
                if (data) {
                    res.status(200).send({
                        success: true,
                        message: "applicant details fetched successfully",
                        applicant: data
                    });
                }
                else {
                    res.status(404).send({
                        success: false,
                        message: "invalid userId",
                        applicant: data
                    });
                }
            });
        }
        catch (e) {
            res.status(500).send({
                success: false,
                message: "error in server",
                error: e
            });
        }
    }
    else {
        res.status(422).send({
            success: true,
            message: "applicant id is undefined",
        });
    }
});
exports.getApplicantDetailsById = getApplicantDetailsById;
