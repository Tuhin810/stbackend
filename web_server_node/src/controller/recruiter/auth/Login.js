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
exports.loginRecruiter = void 0;
const RecruiterService_1 = require("../../../service/Recruiter/RecruiterService");
const loginRecruiter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recruiterCredentail = req.body;
    if (!recruiterCredentail.email || !recruiterCredentail.password) {
        return res.status(422).json({
            success: false,
            message: "Invalid email or password",
        });
    }
    try {
        const recruiter = yield (0, RecruiterService_1.getRecruiterByEmailAndPassword)(recruiterCredentail);
        if (recruiter) {
            recruiter.password = "";
            res.status(200).json({
                success: true,
                message: "login successful",
                recruiter: recruiter
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "invalid credentials",
            });
        }
    }
    catch (error) {
        res.status(500).send({
            message: "Error in login",
            error
        });
    }
});
exports.loginRecruiter = loginRecruiter;
