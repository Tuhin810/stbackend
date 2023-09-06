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
exports.getCompanyList = exports.addNewCompany = exports.getCompanyByEmail = exports.getCompanyById = exports.getCompanyByName = void 0;
const CompanySchema_1 = __importDefault(require("../../model/company/CompanySchema"));
const getCompanyByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const company = yield CompanySchema_1.default.find({ name: name });
    return company;
});
exports.getCompanyByName = getCompanyByName;
const getCompanyById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const company = yield CompanySchema_1.default.findById(id);
    return company;
});
exports.getCompanyById = getCompanyById;
const getCompanyByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const company = yield CompanySchema_1.default.findOne({ email: email });
    return company;
});
exports.getCompanyByEmail = getCompanyByEmail;
const addNewCompany = (companyDetails) => __awaiter(void 0, void 0, void 0, function* () {
    const company = yield CompanySchema_1.default.create(companyDetails);
    return company;
});
exports.addNewCompany = addNewCompany;
const getCompanyList = () => __awaiter(void 0, void 0, void 0, function* () {
    const companyList = yield CompanySchema_1.default.find({}, { name: 1 });
    return companyList;
});
exports.getCompanyList = getCompanyList;
