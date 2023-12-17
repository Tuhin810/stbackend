import express from "express";
import { getAllPayment, postNewPayment } from "../../controller/payment/Payment.controller";

const router = express.Router();

router.route("/getAllPayment").get(getAllPayment);
router.route("/recruiter/payment/newPayment").post(postNewPayment);


module.exports = router