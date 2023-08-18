import express,{Request,Response} from "express";
import { registerNewUser } from "../../../controller/users/auth/Register";
import { loginUser } from "../../../controller/users/auth/Login";

const router = express.Router();

router.post("/user/auth/register",registerNewUser);
router.post("/user/auth/login",loginUser);

export {router as authUsersRouter}