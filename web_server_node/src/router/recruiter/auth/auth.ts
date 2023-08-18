import express from "express";
import { registerNewRecruiter } from "../../../controller/recruiter/auth/Register";
import { loginRecruiter } from "../../../controller/recruiter/auth/Login";

const router = express.Router();

router.post("/recruiter/auth/register",registerNewRecruiter);
router.post("/recruiter/auth/login",loginRecruiter);

export {router as authRecruiterRouter}