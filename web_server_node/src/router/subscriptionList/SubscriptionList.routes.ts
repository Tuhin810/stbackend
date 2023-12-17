import express from "express";
import { updateSubscriptionPricing } from "../../controller/recruiter/subscriptionPricing/SubscriptionPricing";
import { editSubscriptionPricing } from "../../controller/recruiter/subscriptionPricing/UpdateSubscription";
import { deleteSubscriptionPricing } from "../../controller/recruiter/subscriptionPricing/DeleteSubscriptionPlan";
import { findMostUsedPlan } from "../../controller/recruiter/subscriptionPricing/GetPopularPlan";
import { getSubscriptionPricing } from "../../controller/recruiter/subscriptionPricing/GetSubscriptionPlan";
import { deleteOntimeSubscriptionPricing } from "../../controller/recruiter/subscriptionPricing/DelPlanInTime";

const router = express.Router();

router.route("/deletePlanOntime").post(deleteOntimeSubscriptionPricing);
router.route("/AddPlan").post(updateSubscriptionPricing);
router.route("/EditPlan").put(editSubscriptionPricing);
router.route("/removePlan").delete(deleteSubscriptionPricing);
router.route("/GetPlans").get(getSubscriptionPricing);
router.route("/GetPopularPlans").get(findMostUsedPlan);
module.exports = router;
