import express from "express";
import { registerNewRecruiter } from "../../controller/recruiter/auth/Register";
import { loginRecruiter } from "../../controller/recruiter/auth/Login";
import { postReviewToApplicant } from "../../controller/recruiter/postReview/PostReview";
// import employerAuth from "../../middleware/employer.middleware";
import { activateSubscription } from "../../controller/recruiter/payment/ActiveSubscription";

const router = express.Router();

router.route("/auth/register").post(registerNewRecruiter);
router.route("/auth/login").post(loginRecruiter);
router.route("/review/post").post(postReviewToApplicant);
router.route("/activateSubscription").post(activateSubscription);

module.exports = router