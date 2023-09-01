import express from "express";
import { getSkillSuggestion } from "../../controller/suggestion/SkillSuggestion";
import { getStateSuggestion } from "../../controller/suggestion/StateSuggestion";

const router = express.Router();
router.get("/suggestion/getSkillList",getSkillSuggestion);
router.get("/suggestion/getStateList/:country",getStateSuggestion);
export {router as suggestionRouter}