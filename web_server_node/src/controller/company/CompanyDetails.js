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
const getAllCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companyList = yield (0, CompanyService_1.getCompanyList)()
            .then((data) => {
            res.status(200).send({
                success: true,
                message: "Company Registered Successfully",
                company: data
            });
        });
    }
    catch (e) {
        res.status(500).send({
            success: false,
            message: "Error to get company list",
            e,
        });
    }
});
exports.default = getAllCompany;
