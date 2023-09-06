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
exports.registerNewUser = void 0;
const ApplicantSchema_1 = __importDefault(require("../../../model/applicant/ApplicantSchema"));
const applicant_service_1 = require("../../../service/applicant/applicant.service");
const registerNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userDetails = req.body;
    delete (userDetails._id);
    if (!userDetails.email || !userDetails.first_name || !userDetails.password) {
        return res.status(422).json({ error: "fill the form" });
    }
    try {
        const user = yield ApplicantSchema_1.default.findOne({ email: userDetails.email });
        if (user) {
            return res.status(409).send({
                success: false,
                message: "Already Register please login",
            });
        }
        else {
            const data = yield (0, applicant_service_1.registerNewApplicant)(userDetails);
            if (data) {
                const applicantResponse = yield (0, applicant_service_1.getApplicantDetailsByEmail)(userDetails.email);
                if (applicantResponse) {
                    res.status(200).send({
                        success: true,
                        message: "User Register Successfully",
                        user: applicantResponse
                    });
                }
                else {
                    res.status(207).send({
                        success: true,
                        message: "User Register Successfully but failed to get",
                        user: applicantResponse
                    });
                }
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
exports.registerNewUser = registerNewUser;
