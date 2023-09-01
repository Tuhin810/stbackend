import SkillSuggestionModel from "../../model/suggestionSkill/SkillSuggestionSchema"
import StateSuggestionModel from "../../model/suggestionState/SuugestionStatSchema";

export const getAllSkills = async() =>{
    const response = await SkillSuggestionModel.find({},{_id:0});
    return response;
}

export const getAllStates =async (country:string) => {
    const response = await StateSuggestionModel.find({country:country},{_id:0,state:1});
    let stateList:string[]=[];
    if(response){
        for(let state of response){
            stateList.push(state.state);
        }
    }
    return stateList;
}