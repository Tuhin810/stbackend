import mongoose, { Schema } from "mongoose";
import { SkillSuggestion } from "../../@types/interfaces/SkillSuggestion";

// model for skills
const skillSchema: Schema<SkillSuggestion> = new mongoose.Schema({
    skill: {
        type: String,
        required: [true, "state can not be blank"]
    }
});
const SkillSuggestionModel = mongoose.model<SkillSuggestion>("SkillSuggestion", skillSchema);

export default SkillSuggestionModel;