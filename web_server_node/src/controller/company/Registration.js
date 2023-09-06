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
const CompanyService_1 = require("../../service/Company/CompanyService");
//creating new company
const registerNewCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const companyDetails = req.body;
    if (!companyDetails.name || !companyDetails.email || !companyDetails.website) {
        return res.status(422).send({
            success: false,
            message: "Fields are empty",
        });
    }
    else {
        try {
            const company = yield (0, CompanyService_1.getCompanyByEmail)(companyDetails.email);
            console.log(company);
            if (company) {
                return res.status(409).send({
                    success: false,
                    message: "Already exists !!",
                });
            }
            else {
                (0, CompanyService_1.addNewCompany)(companyDetails)
                    .then((data) => {
                    const companyDetails = data;
                    res.status(200).send({
                        success: true,
                        message: "Company Registered Successfully",
                        company: companyDetails
                    });
                });
            }
        }
        catch (e) {
            res.status(500).send({
                success: false,
                message: "Errro in Registeration",
                e,
            });
        }
    }
});
exports.default = registerNewCompany;
