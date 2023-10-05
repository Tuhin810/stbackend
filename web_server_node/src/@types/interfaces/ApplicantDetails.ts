import mongoose from "mongoose"
import { ApplicantQualification } from "./ApplicantEducation"
import { ApplicantExperience } from "./ApplicantExperience"

export interface ApplicantDetails {
    _id?: string,
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
    photo: string,
    cv: Buffer[],
    experience_year: number,
    skills: string[],
    additonal_skills: string[],
    spoken_english: string,
    gender: string,
    qualification_to_search: string[],
    qualification_details: ApplicantQualification[],
    experience_details: ApplicantExperience[],
    min_expected_salary: number,
    min_duty_hours: number,
    native_language: string,
    is_disabled: boolean,
    is_profile_public: boolean,
    is_resume_public: boolean,
    tokens: any,
    is_phone_verified: boolean,
    is_email_verified: boolean
}