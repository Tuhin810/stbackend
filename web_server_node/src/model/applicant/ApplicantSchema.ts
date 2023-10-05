import mongoose, { Schema } from "mongoose";
import { ApplicantDetails } from "../../@types/interfaces/ApplicantDetails";
const jwt = require("jsonwebtoken");
// model for new registration 

export const applicantSchema: Schema<ApplicantDetails> = new mongoose.Schema({
    firebase_id: {
        type: String
    },
    first_name: {
        type: String,
        trim: true,
        required: [true, "first name can not be empty"],
        maxlength: [50, "Name cannot be more than 50 characters"]
    },
    middle_name: {
        type: String,
    },
    last_name: {
        type: String,
        required: [true, "last name can not be empty"],
        trim: true,
        maxlength: [50, "Name cannot be more than 50 characters"]
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        trim: true,
        default: "",
    },
    country_code: {
        type: String,
        enum: ["+91", "033", "+1"],
        default: "+91"
    },
    phone: {
        type: Number,
        maxLength: [10, "phone number can not be more than 10 digits"],
        unique: true,
    },
    password: {
        type: String,
        default: ""
    },
    current_address: {
        type: String,
        default: ""
    },
    permanent_address: {
        type: String,
        default: ""
    },
    state: {
        type: String,
        default: ""
    },
    country: {
        type: String,
        default: "India"
    },
    pin: {
        type: Number,
        default: 0
    },
    age: {
        type: Number,
        maxLength: 2,
        default: 0
    },
    birth_year: {
        type: Number
    },
    photo: {
        type: String,
        default: "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg",
    },
    cv: {
        data: [Buffer],
        contentType: String,
    },
    experience_year: {
        type: Number,
        default: 0
    },
    skills: {
        type: [String],
        default: []
    },
    additonal_skills: {
        type: [String],
        default: []
    },
    spoken_english: {
        type: String,
        enum: ["beginner", "intermediate", "fluent"],
        default: "beginner"
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    qualification_to_search: {
        type: [String],
        default: []
    },
    qualification_details: {
        type: [Object],
        default: []
    },
    experience_details: {
        type: [Object],
        default: []
    },
    min_expected_salary: {
        type: Number,
        default: 0
    },
    min_duty_hours: {
        type: Number,
        default: 6
    },
    is_disabled: {
        type: Boolean,
        default: false
    },
    native_language: {
        type: String,
        default: ""
    },
    profile_bio: {
        type: String,
        default: ""
    },
    is_profile_public: {
        type: Boolean,
        default: false
    },
    is_resume_public: {
        type: Boolean,
        default: false
    },
    is_email_verified: {
        type: Boolean,
        default: false
    },
    is_phone_verified: {
        type: Boolean,
        default: false
    },
    tokens: [
        {
            token: {
                type: String,
                require: true
            }
        }
    ]
},
    // JobSchema.virtual("invited_job_details_list", {
    //     ref: "Jobs",
    //     localField: "invited_job_list",
    //     foreignField: "_id",
    //     justOne: true
    // });
);



const ApplicantModel = mongoose.model<ApplicantDetails>("applicants", applicantSchema);

export default ApplicantModel;