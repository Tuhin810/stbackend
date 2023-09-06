"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchedApplicantSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// model for new matched profile registration 
exports.matchedApplicantSchema = new mongoose_1.default.Schema({
    applicantId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "applicants"
    },
    jobId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Jobs"
    },
    accept: {
        type: Boolean,
        default: false
    }
});
const MatchedApplicantModel = mongoose_1.default.model("matchedApplicants", exports.matchedApplicantSchema);
exports.default = MatchedApplicantModel;
