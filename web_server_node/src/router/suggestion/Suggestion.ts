import express from "express";
import { getSkillSuggestion } from "../../controller/suggestion/SkillSuggestion";

const router = express.Router();
router.get("/suggestion/getSkillList",getSkillSuggestion);
export {router as suggestionRouter}