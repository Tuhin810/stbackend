import { Request, Response } from "express";
import { getAllSkills } from "../../service/suggestion/SkillSuggestion";
export const getSkillSuggestion = async (req: Request, res: Response) => {
    try {
        await getAllSkills().then((skillList) => {
            res.status(200).send({
                success: true,
                skillList: skillList
            })
        })
    } catch (e) {
        res.status(500).send({
            success: false,
            skillList: []
        })
    }
}