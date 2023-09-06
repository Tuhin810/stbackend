"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRecruiterRouter = void 0;
const express_1 = __importDefault(require("express"));
const Register_1 = require("../../../controller/recruiter/auth/Register");
const Login_1 = require("../../../controller/recruiter/auth/Login");
const router = express_1.default.Router();
exports.authRecruiterRouter = router;
router.post("/recruiter/auth/register", Register_1.registerNewRecruiter);
router.post("/recruiter/auth/login", Login_1.loginRecruiter);
