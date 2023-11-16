import { Request, Response } from "express";
import { generateToken } from "../../service/jwt/generateToken.service";

//creating new company

const authentiaction = async (req: Request, res: Response) => {

    try {
        const { _id, role } = req.body;
        const token = await generateToken(_id, role);
        res.status(200).send({
            message: "Token generated successfully",
            data: token
        });
    }
    catch (e) {
        res.status(400).send({
            success: false,
            message: "Error to generate token",
            e,
        });
    }

}

export default authentiaction;