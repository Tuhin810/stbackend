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
exports.loginUser = void 0;
const ApplicantSchema_1 = __importDefault(require("../../../model/applicant/ApplicantSchema"));
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userCredentail = req.body;
    if (!userCredentail.email || !userCredentail.password) {
        return res.status(422).send({
            success: false,
            message: "Invalid email or password",
        });
    }
    try {
        const user = yield ApplicantSchema_1.default.findOne({ $and: [{ email: userCredentail.email }, { password: userCredentail.password }] });
        if (user) {
            user.password = "";
            res.status(200).send({
                success: true,
                message: "login successful",
                applicant: user
            });
        }
        else {
            res.status(404).send({
                success: false,
                message: "invalid credentials",
            });
        }
    }
    catch (e) {
        res.status(500).send({
            success: false,
            message: "Error in login",
        });
    }
});
exports.loginUser = loginUser;
