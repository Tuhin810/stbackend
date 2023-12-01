import { CompanyDetails } from "./CompanyDetails"

export interface RecruiterDetails{
    _id?:string,
    firebase_id?:string,
    created_date?:Date
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
    dob?:Date,
    photo:BufferSource,
    company_id:string,
    company_details:CompanyDetails,
    subscription:boolean
}