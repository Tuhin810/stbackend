import express,{Request,Response} from "express";
import { registerNewRecruiter } from "../../../controller/recruiter/auth/Register";

const router = express.Router();

router.post("recruiter/auth/register",registerNewRecruiter);
router.post("recruiter/auth/login",);

export {router as authRouter}