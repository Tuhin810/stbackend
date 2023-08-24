import mongoose from "mongoose"

export interface JobsDetails{
    posted_date:Date,
    jobTitle:string,
    jobType:string,
    jobDescription:string,
    no_of_vacancy:number,
    experience_year:number
    skills:string[],
    additonal_skills:string[],
    no_of_applicants:number
    location:string[],
    salary:number,
    currency_type:string,
    company_id:mongoose.Schema.Types.ObjectId,
    age_limit:number,
    job_poster_id:mongoose.Schema.Types.ObjectId,
    spoken_english_required:boolean,
    is_target_based_salary:boolean,
    duty_hours:number,
    is_fresher_allowed:boolean,
    gender:string,
    qualification:string,
    any_charges:boolean,
}