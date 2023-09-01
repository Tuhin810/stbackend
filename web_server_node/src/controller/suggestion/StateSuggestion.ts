import { Request, Response } from "express";
import { getAllStates } from "../../service/suggestion/suggestion.service";
export const getStateSuggestion = async (req: Request, res: Response) => {
    const country:string=req.params.country;
    if(country===undefined){
        res.status(422).send({
            success:false,
            message:"country is empty",
        })
    }
    try {
        await getAllStates(country).then((stateList) => {
            console.log(stateList);
            
            res.status(200).send({
                success: true,
                message:"fetched successfully",
                stateList: stateList
            })
        })
    } catch (e) {
        res.status(500).send({
            success: false,
            message:"error in server",
            stateList: []
        })
    }
}