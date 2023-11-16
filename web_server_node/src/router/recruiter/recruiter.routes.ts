import express from "express";
import { registerNewRecruiter } from "../../controller/recruiter/auth/Register";
import { loginRecruiter } from "../../controller/recruiter/auth/Login";
import { recruiterPayment } from "../../controller/recruiter/payment/RecruiterPayment";
import { postReviewToApplicant } from "../../controller/recruiter/postReview/PostReview";
import employerAuth from "../../middleware/employer.middleware";

const router = express.Router();

router.route("/auth/register").post(registerNewRecruiter);
router.route("/auth/login").post(loginRecruiter);
router.route("/review/post").post(postReviewToApplicant);
router.route("/complete-payment/:id").put(recruiterPayment);

module.exports = router