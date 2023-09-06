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
exports.getRecruiterByEmailAndPassword = exports.postRecruiter = exports.getRecruiterByEmail = void 0;
const RecruiterSchema_1 = __importDefault(require("../../model/recruiter/RecruiterSchema"));
const getRecruiterByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const recruiter = yield RecruiterSchema_1.default.findOne({ email: email });
    return recruiter;
});
exports.getRecruiterByEmail = getRecruiterByEmail;
const postRecruiter = (recruiterDetails) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield RecruiterSchema_1.default.create(recruiterDetails);
    return data;
});
exports.postRecruiter = postRecruiter;
const getRecruiterByEmailAndPassword = (recruiterCredential) => __awaiter(void 0, void 0, void 0, function* () {
    const recruiter = yield RecruiterSchema_1.default.findOne({ $and: [{ email: recruiterCredential.email }, { password: recruiterCredential.password }] }).populate("company_id").exec();
    return recruiter;
});
exports.getRecruiterByEmailAndPassword = getRecruiterByEmailAndPassword;
