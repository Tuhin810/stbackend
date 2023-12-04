import express from "express";
import { getAllPayment, postNewPayment } from "../../controller/payment/Payment.controller";
import { recruiterPayment } from "../../controller/recruiter/payment/RecruiterPayment";

const router = express.Router();

router.route("/getAllPayment").get(getAllPayment);
router.route("/recruiter/payment/newPayment").post(postNewPayment);
router.route("/recruiter/buySubscription").post(recruiterPayment);

module.exports = router