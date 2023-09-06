import mongoose from "mongoose"
import { ApplicantQualification } from "./ApplicantEducation"

export interface ApplicantDetails {
    _id?: mongoose.Schema.Types.ObjectId,
    firebase_id: string,
    created_date: Date
    first_name: string,
    middle_name: string,
    last_name: string,
    email: string,
    country_code: string,
    profile_bio: string,
    phone: number,
    password?: string,
    current_address: string,
    permanent_address: string,
    state: string,
    country: string,
    pin: number,
    age: number,
    birth_year: number,
    photo: Buffer,
    cv: Buffer[],
    experience_year: number,
    skills: string[],
    additonal_skills: string[],
    spoken_english: string,
    gender: string,
    qualification_to_search: string[],
    qualification_details: ApplicantQualification[],
    min_expected_salary: number,
    min_duty_hours: number,
    native_language: string,
    is_disabled: boolean,
    invited_job_list: mongoose.Schema.Types.ObjectId[],
    applied_job_list: mongoose.Schema.Types.ObjectId[],
    part_time_preferred_job_list: string[]
    is_profile_public: boolean,
    is_resume_public: boolean
}