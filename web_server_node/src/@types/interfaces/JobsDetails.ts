import mongoose from "mongoose"

export interface JobsDetails{
    posted_date:Date,
    jobTitle:string,
    jobType:string,
    jobDescription:string,
    no_of_vacancy:number,
    experience_year:number
    skills:string[],
    soft_skills:string[],
    no_of_applicants:number
    location:string[],
    salary:number,
    currency_type:string,
    company_id:mongoose.Schema.Types.ObjectId,
    age_limit:number,
    job_poster_id:mongoose.Schema.Types.ObjectId
}