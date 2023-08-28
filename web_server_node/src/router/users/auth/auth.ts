import express,{Request,Response} from "express";
import { registerNewUser } from "../../../controller/users/auth/Register";
import { loginUser } from "../../../controller/users/auth/Login";

const router = express.Router();

router.post("/applicant/register",registerNewUser);
router.post("/applicant/login",loginUser);

export {router as authUsersRouter}