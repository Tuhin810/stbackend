import mongoose from "mongoose"

export interface RecruiterSignUp {
    firebase_id: string,
    _id?: string,
    created_date: Date
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
    isPlanActive: boolean,
    active_plan: string,
    job_post_left: number,
    dob: Date,
    photo: Buffer,
    company_id: string,
    subscription: boolean,
    activated: boolean,
    job_limit: number,
    subscription_plan_object_id: mongoose.Schema.Types.ObjectId
}