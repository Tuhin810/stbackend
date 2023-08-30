import { ApplicantEducation } from "./interfaces/ApplicantEducation"

export interface ApplicantDetails {
    _id?:string,
    firebase_id:string,
    created_date:Date
    first_name: string,
    middle_name: string,
    last_name: string,
    email: string,
    country_code: string
    phone: number,
    password: string,
    address: string,
    state: string,
    country: string,
    pin: number,
    age: number,
    dob:string,
    photo:string,
    cv:BufferSource[],
    experience_year: number
    skills: string[],
    additonal_skills: string[],
    spoken_english: boolean,
    is_fresher: boolean,
    gender: string,
    qualification_to_search: string[],
    qualification_details:ApplicantEducation[],
    min_expected_salary:number,
    min_duty_hours:number
}