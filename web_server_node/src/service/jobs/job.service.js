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
exports.deleteJobDetailsByJobId = exports.getJobDetailsByJobId = exports.matchedJobApplicants = exports.getJobsByCompanyId = exports.getJobsByRecruiterId = exports.postNewJob = void 0;
const JobSchema_1 = __importDefault(require("../../model/jobs/JobSchema"));
const ApplicantSchema_1 = __importDefault(require("../../model/applicant/ApplicantSchema"));
const applicant_service_1 = require("../applicant/applicant.service");
const MatchedApplicant_1 = __importDefault(require("../../model/matchedApplicant/MatchedApplicant"));
const postNewJob = (jobDetails) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield JobSchema_1.default.create(jobDetails);
    return data;
});
exports.postNewJob = postNewJob;
const getJobsByRecruiterId = (recruiterId) => __awaiter(void 0, void 0, void 0, function* () {
    const jobList = yield JobSchema_1.default.find({ job_poster_id: recruiterId }).lean();
    return jobList;
});
exports.getJobsByRecruiterId = getJobsByRecruiterId;
const getJobsByCompanyId = (companyId) => __awaiter(void 0, void 0, void 0, function* () {
    const jobList = yield JobSchema_1.default.find({ company_id: companyId });
    return jobList;
});
exports.getJobsByCompanyId = getJobsByCompanyId;
const matchedJobApplicants = (jobDetails) => __awaiter(void 0, void 0, void 0, function* () {
    if (jobDetails.gender != "all") {
        const queryToFindApplicant = {
            $and: [
                { gender: jobDetails.gender },
                { age: { $lt: jobDetails.max_age_limit } },
                { age: { $gt: jobDetails.min_age_limit } },
                { experience_year: { $lt: jobDetails.max_experience_year } },
                { experience_year: { $gt: jobDetails.min_experience_year } },
                { spoken_english: jobDetails.spoken_english_level },
                { min_expected_salary: { $lt: jobDetails.max_salary } },
                { min_duty_hours: { $gt: jobDetails.duty_hours } },
                { qualification_to_search: jobDetails.qualification },
                { skills: { $all: jobDetails.mandatory_skills } }
            ]
        };
        const applicantList = yield ApplicantSchema_1.default.find(queryToFindApplicant, { _id: 1 });
        yield (0, applicant_service_1.sendInviteApplicantList)(applicantList, jobDetails._id);
    }
    else {
        const queryToFindApplicant = {
            $and: [
                { gender: jobDetails.gender },
                { age: { $gt: jobDetails.min_age_limit } },
                { experience_year: { $lt: jobDetails.max_experience_year } },
                { experience_year: { $gt: jobDetails.min_experience_year } },
                { spoken_english: jobDetails.spoken_english_level },
                { min_expected_salary: { $lt: jobDetails.max_salary } },
                { min_duty_hours: { $gt: jobDetails.duty_hours } },
                { qualification_to_search: jobDetails.qualification },
                { skills: { $all: jobDetails.mandatory_skills } }
            ]
        };
        const applicantList = yield ApplicantSchema_1.default.find(queryToFindApplicant, { _id: 1 });
        yield (0, applicant_service_1.sendInviteApplicantList)(applicantList, jobDetails._id);
    }
    const postJobDetails = yield (0, exports.getJobDetailsByJobId)(jobDetails._id);
    yield updateMatchedApplicantNumbers(jobDetails._id);
    if (postJobDetails) {
        return postJobDetails;
    }
    return {};
});
exports.matchedJobApplicants = matchedJobApplicants;
const updateMatchedApplicantNumbers = (jobId) => __awaiter(void 0, void 0, void 0, function* () {
    const matchedApplicantNumber = yield MatchedApplicant_1.default.countDocuments({ jobId: jobId });
    if (matchedApplicantNumber) {
        yield JobSchema_1.default.updateOne({ _id: jobId }, { $set: { no_of_matched_profiles: matchedApplicantNumber } });
    }
});
const getJobDetailsByJobId = (jobId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield JobSchema_1.default.findById(jobId).populate("company_id").exec();
    return response;
});
exports.getJobDetailsByJobId = getJobDetailsByJobId;
const deleteJobDetailsByJobId = (jobId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield JobSchema_1.default.findByIdAndDelete(jobId);
    return response;
});
exports.deleteJobDetailsByJobId = deleteJobDetailsByJobId;
