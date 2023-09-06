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
exports.registerNewRecruiter = void 0;
const RecruiterService_1 = require("../../../service/Recruiter/RecruiterService");
const CompanyService_1 = require("../../../service/Company/CompanyService");
const registerNewRecruiter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recruiterDetails = req.body;
    if (!recruiterDetails.email || !recruiterDetails.first_name || !recruiterDetails.password) {
        return res.status(422).json({ error: "fill the form" });
    }
    try {
        const recruiter = yield (0, RecruiterService_1.getRecruiterByEmail)(recruiterDetails.email);
        if (recruiter) {
            return res.status(409).send({
                success: false,
                message: "Already Registered please login",
            });
        }
        else {
            const comapny = yield (0, CompanyService_1.getCompanyById)(recruiterDetails.company_id);
            if (comapny) {
                (0, RecruiterService_1.postRecruiter)(recruiterDetails)
                    .then((data) => {
                    const recruiterDetails = data;
                    recruiterDetails.password = "";
                    res.status(200).send({
                        success: true,
                        message: "Users Register Successfully",
                        recruiter: recruiterDetails
                    });
                });
            }
            else {
                return res.status(404).send({
                    success: false,
                    message: "Company not found",
                });
            }
        }
    }
    catch (e) {
        res.status(500).send({
            success: false,
            message: "Error in Registeration",
            e,
        });
    }
});
exports.registerNewRecruiter = registerNewRecruiter;
