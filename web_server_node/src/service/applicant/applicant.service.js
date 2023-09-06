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
exports.applyjob = exports.sendInviteApplicantList = exports.isApplicantResumePrivate = exports.isApplicantProfilePrivate = exports.updateApplicantProfileAndResumePrivacy = exports.updateApplicantProfileDetailsById = exports.getApplicantInvitedJobListService = exports.updateApplicantSkill = exports.updateApplicantQualification = exports.getApplicantDetailsByEmail = exports.getApplicantDetails = exports.registerNewApplicant = void 0;
const ApplicantSchema_1 = __importDefault(require("../../model/applicant/ApplicantSchema"));
const MatchedApplicant_1 = __importDefault(require("../../model/matchedApplicant/MatchedApplicant"));
const JobSchema_1 = __importDefault(require("../../model/jobs/JobSchema"));
const registerNewApplicant = (applicantDetails) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield ApplicantSchema_1.default.create(applicantDetails);
    return response;
});
exports.registerNewApplicant = registerNewApplicant;
const getApplicantDetails = (applicantId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield ApplicantSchema_1.default.findById(applicantId);
    return response;
});
exports.getApplicantDetails = getApplicantDetails;
const getApplicantDetailsByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield ApplicantSchema_1.default.findOne({ email: email });
    return response;
});
exports.getApplicantDetailsByEmail = getApplicantDetailsByEmail;
const updateApplicantQualification = (applicantId, applicantQualification) => __awaiter(void 0, void 0, void 0, function* () {
    yield ApplicantSchema_1.default.updateOne({ _id: applicantId }, { $push: { qualification_to_search: applicantQualification.qualification } });
    yield ApplicantSchema_1.default.updateOne({ _id: applicantId }, { $push: { qualification_details: applicantQualification } });
    const applicantdetails = yield (0, exports.getApplicantDetails)(applicantId);
    return applicantdetails;
});
exports.updateApplicantQualification = updateApplicantQualification;
const updateApplicantSkill = (applicantId, skill) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield ApplicantSchema_1.default.updateOne({ _id: applicantId }, { $push: { skills: skill } });
    const applicantdetails = yield (0, exports.getApplicantDetails)(applicantId);
    return applicantdetails;
});
exports.updateApplicantSkill = updateApplicantSkill;
const getApplicantInvitedJobListService = (applicantId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = (yield MatchedApplicant_1.default.find({ applicantId: applicantId }, { jobId: 1, _id: 0 }).lean().populate("jobId").exec());
    return response;
});
exports.getApplicantInvitedJobListService = getApplicantInvitedJobListService;
const updateApplicantProfileDetailsById = (applicantId, applicantProfile) => __awaiter(void 0, void 0, void 0, function* () {
    yield ApplicantSchema_1.default.updateOne({ _id: applicantId }, {
        $set: {
            first_name: applicantProfile.first_name,
            middle_name: applicantProfile.middle_name,
            last_name: applicantProfile.last_name,
            current_address: applicantProfile.current_address,
            permanent_address: applicantProfile.permanent_address,
            gender: applicantProfile.gender,
            birth_year: applicantProfile.birth_year,
            profile_bio: applicantProfile.profile_bio,
            phone: applicantProfile.phone,
            state: applicantProfile.state,
            country: applicantProfile.country,
            pin: applicantProfile.state,
            age: applicantProfile.age,
            experience_year: applicantProfile.experience_year,
            spoken_english: applicantProfile.spoken_english,
            min_expected_salary: applicantProfile.min_expected_salary,
            min_duty_hours: applicantProfile.min_duty_hours,
            native_language: applicantProfile.min_duty_hours,
            is_disabled: applicantProfile.is_disabled,
        }
    });
    const applicantDetails = yield (0, exports.getApplicantDetails)(applicantId);
    return applicantDetails;
});
exports.updateApplicantProfileDetailsById = updateApplicantProfileDetailsById;
const updateApplicantProfileAndResumePrivacy = (applicantId, applicantPrivacy) => __awaiter(void 0, void 0, void 0, function* () {
    yield ApplicantSchema_1.default.updateOne({ _id: applicantId }, {
        $set: {
            is_profile_public: applicantPrivacy.is_profile_public,
            is_resume_public: applicantPrivacy.is_resume_public
        }
    });
    const response = yield (0, exports.getApplicantDetails)(applicantId);
    return response;
});
exports.updateApplicantProfileAndResumePrivacy = updateApplicantProfileAndResumePrivacy;
const isApplicantProfilePrivate = (applicantId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield ApplicantSchema_1.default.findOne({ _id: applicantId }, { is_profile_public: 1, _id: 0 });
    return response;
});
exports.isApplicantProfilePrivate = isApplicantProfilePrivate;
const isApplicantResumePrivate = (applicantId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield ApplicantSchema_1.default.findOne({ _id: applicantId }, { is_resume_public: 1, _id: 0 });
    return response;
});
exports.isApplicantResumePrivate = isApplicantResumePrivate;
const sendInviteApplicantList = (matchedApplicantList, jobId) => __awaiter(void 0, void 0, void 0, function* () {
    for (const applicantId of matchedApplicantList) {
        yield inviteApplicant(applicantId, jobId);
    }
});
exports.sendInviteApplicantList = sendInviteApplicantList;
const inviteApplicant = (applicantId, jobId) => __awaiter(void 0, void 0, void 0, function* () {
    const matchedApplicant = {
        applicantId: applicantId,
        jobId: jobId,
        accept: false
    };
    const isApplicantAlreadyMatched = yield getIsApplicantAlreadyMatched(matchedApplicant);
    if (!isApplicantAlreadyMatched) {
        try {
            MatchedApplicant_1.default.create(matchedApplicant);
        }
        catch (error) {
            console.log(error);
        }
    }
});
const getIsApplicantAlreadyMatched = (matchedApplicant) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield MatchedApplicant_1.default.findOne({
        $and: [
            { applicantId: matchedApplicant.applicantId },
            { jobId: matchedApplicant.jobId }
        ]
    });
    if (response)
        return true;
    return false;
});
const applyjob = (jobId, applicantId) => __awaiter(void 0, void 0, void 0, function* () {
    const queryToFindApplicantAndJob = {
        $and: [
            { applicantId: applicantId },
            { jobId: jobId }
        ]
    };
    const response = yield MatchedApplicant_1.default.updateOne(queryToFindApplicantAndJob, { $set: { accept: true } });
    if (response.acknowledged) {
        yield setAppliedJobNumber(jobId);
    }
    return response;
});
exports.applyjob = applyjob;
const setAppliedJobNumber = (jobId) => __awaiter(void 0, void 0, void 0, function* () {
    const no_of_applicants = yield MatchedApplicant_1.default.countDocuments({
        $and: [
            { jobId: jobId },
            { accept: true }
        ]
    });
    yield JobSchema_1.default.updateOne({ _id: jobId }, {
        $set: {
            no_of_applicants: no_of_applicants
        }
    });
});
