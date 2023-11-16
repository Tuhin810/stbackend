import express from "express";
import { registerNewRecruiter } from "../../controller/recruiter/auth/Register";
import { loginRecruiter } from "../../controller/recruiter/auth/Login";
import { recruiterPayment } from "../../controller/recruiter/payment/RecruiterPayment";
import { postReviewToApplicant } from "../../controller/recruiter/postReview/PostReview";
import employerAuth from "../../middleware/employer.middleware";

const router = express.Router();

router.post("/recruiter/auth/register", registerNewRecruiter);
router.post("/recruiter/auth/login", loginRecruiter);
router.post("/recruiter/review/post", employerAuth, postReviewToApplicant);
router.put("/recruiter/complete-payment/:id", employerAuth, recruiterPayment);

export { router as RecruiterRouter }