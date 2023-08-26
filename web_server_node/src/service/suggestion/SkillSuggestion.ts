import SkillSuggestionModel from "../../model/suggestionSkill/SkillSuggestionSchema"

export const getAllSkills = async() =>{
    const response = await SkillSuggestionModel.find({},{_id:0});
    return response;
}