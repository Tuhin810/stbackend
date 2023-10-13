import { CompanyDetails } from "../CompanyDetails"
import { RecruiterDetails } from "../RecruiterDetails"

export interface JobDetails{
    _id?: string,
    posted_date: Date,
    job_title: string,
    job_type: string,
    job_description: string,
    no_of_vacancy: number,
    min_experience_year: number,
    max_experience_year: number,
    mandatory_skills: string[],
    additonal_skills: string[],
    location: string[],
    no_of_expery_date: number,
    min_salary: number,
    max_salary: number,
    currency_type: string,
    company_id: string,
    company_name?: string,
    min_age_limit: number,
    max_age_limit: number,
    job_poster_id: string,
    spoken_english_level: string,
    is_disabled_alllow: boolean,
    is_target_based_salary: boolean,
    duty_hours: number,
    gender: string,
    qualification: string,
    any_charges: boolean,
    no_of_matched_profiles?: number
    no_of_applicants?: number,
    company_details?:CompanyDetails,
    recruiter_details?:RecruiterDetails
}