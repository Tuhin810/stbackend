export interface ApplicantDetails {
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
    dob:Date,
    photo:string,
    cv:BufferSource[],
    experience_year: number
    skills: string[],
    additonal_skills: string[],
    spoken_english: boolean,
    is_fresher: boolean,
    gender: string,
    qualification: string[],
    min_expected_salary:number,
    min_duty_hours:number
}