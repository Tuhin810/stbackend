import { Request, Response } from "express";
import { UserSignUp } from "../../../@types/interfaces/UserDetails";
import UserModel from "../../../model/users/UserSchema";

export const registerNewUser = async (req: Request, res: Response) => {
    const userDetails: UserSignUp = req.body;
    if (!userDetails.email || !userDetails.first_name || !userDetails.password) {
        return res.status(422).json({ error: "fill the form" })
    }
    try {
        const user = await UserModel.findOne({ email: userDetails.email })

        if (user) {
            return res.status(409).send({
                success: false,
                message: "Already Register please login",
            });
        } else {
            UserModel
                .create(userDetails)
                .then((data) => {
                    const userDetails:UserSignUp=data;
                    userDetails.password="";
                    res.status(200).send({
                        success: true,
                        message: "User Register Successfully",
                        user:userDetails
                    });
                })

        }
    } catch (e) {
        res.status(500).send({
            success: false,
            message: "Error in Registeration",
            e,
        });
    }
}