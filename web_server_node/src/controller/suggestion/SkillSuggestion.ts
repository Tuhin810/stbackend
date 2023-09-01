import { Request, Response } from "express";
import { getAllSkills } from "../../service/suggestion/suggestion.service";
export const getSkillSuggestion = async (req: Request, res: Response) => {
    try {
        await getAllSkills().then((skillList) => {
            res.status(200).send({
                success: true,
                message:"fetched successfully",
                skillList: skillList
            })
        })
    } catch (e) {
        res.status(500).send({
            success: false,
            message:"error in server",
            skillList: []
        })
    }
}