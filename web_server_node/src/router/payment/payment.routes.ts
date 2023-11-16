import express from "express";
import { getAllPayment, postNewPayment } from "../../controller/payment/Payment.controller";

const router = express.Router();

router.get("/payment/getAllPayment", getAllPayment);
router.post("/recruiter/payment/newPayment", postNewPayment);

export { router as paymentRouter }