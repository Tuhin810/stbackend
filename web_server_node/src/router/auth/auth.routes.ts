import express from "express";
import authentiaction from "../../controller/auth/generateToken.controller";

const router = express.Router();

router.post("/auth/authentication", authentiaction)

export { router as authenticationRouter }