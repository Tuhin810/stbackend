import express from "express";
import authentiaction from "../../controller/auth/generateToken.controller";

const router = express.Router();

router.route("/auth/authentication").post(authentiaction)

export { router as authenticationRouter }