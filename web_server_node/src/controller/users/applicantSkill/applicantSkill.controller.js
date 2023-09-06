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
exports.updateApplicantSkillById = void 0;
const applicant_service_1 = require("../../../service/applicant/applicant.service");
const updateApplicantSkillById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const applicantId = req.params.id;
    const skill = req.params.skill;
    if (applicantId === undefined || !skill) {
        res.status(422).send({
            success: false,
            messsage: "fields are empty"
        });
    }
    else {
        try {
            const response = yield (0, applicant_service_1.updateApplicantSkill)(applicantId, skill);
            if (response) {
                res.status(200).send({
                    success: true,
                    messsage: "fetched successfully",
                    applicant: response
                });
            }
            console.log(response);
        }
        catch (error) {
            res.status(500).send({
                success: false,
                messsage: "error in server"
            });
        }
    }
});
exports.updateApplicantSkillById = updateApplicantSkillById;
