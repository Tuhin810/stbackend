import mongoose, { mongo } from "mongoose";

export interface IMatchedApplicant{
    first_name:string,
    middle_name:string,
    last_name:string,
    _id:mongoose.Schema.Types.ObjectId
}