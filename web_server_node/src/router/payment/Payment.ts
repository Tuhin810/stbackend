import express from "express";
import { getAllPayment, postNewPayment } from "../../controller/payment/Payment.controller";

const router = express.Router();

router.get("/payment/getAllPayment", getAllPayment);
router.post("/recruiter/auth/login", postNewPayment);

export { router as paymentRouter }