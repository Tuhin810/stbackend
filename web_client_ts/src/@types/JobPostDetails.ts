export interface JobPostDetails {
    _id:string,
    posted_date: Date,
    jobTitle: string,
    jobType: string,
    jobDescription: string,
    no_of_vacancy: number,
    experience_year: number
    skills: string[],
    additonal_skills: string[],
    no_of_applicants: number
    location: string[],
    salary: number,
    currency_type: string,
    company_id: string,
    age_limit: number,
    job_poster_id: string,
    spoken_english_level: string,
    is_target_based_salary: boolean,
    duty_hours: number,
    is_fresher_allowed: boolean,
    gender: string,
    qualification: string,
    any_charges: boolean,
}

