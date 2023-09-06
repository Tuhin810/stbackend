import mongoose, { Schema } from "mongoose";
import { JobPostDetails } from "../../@types/interfaces/JobPostDetails";

// model for new company registration 

export const JobSchema: Schema<JobPostDetails> = new mongoose.Schema({
    posted_date: {
        type: Date,
        default: Date.now
    },
    job_title: {
        type: String,
        required: [true, "job Title can't be null"]
    },
    job_type: {
        type: String,
        required: [true, "jobtype cannot be null"],
        enum: ["full-time", "part-time", "Internship", "Freelancing", "contract"],
    },
    job_description: {
        type: String,
        required: [true, "job description can not be null"]
    },
    no_of_vacancy: {
        type: Number,
        required: [true, "job description can not be empty"]
    },
    min_experience_year: {
        type: Number,
        default: 0
    },
    max_experience_year: {
        type: Number,
        default: 0
    },
    no_of_expery_date: {
        type: Number,
        default: 10
    },
    mandatory_skills: {
        type: [String],
        required: [true, "skills list cant be null"]
    },
    additonal_skills: {
        type: [String],
        default: []
    },
    location: {
        type: [String],
        default: []
    },
    min_salary: {
        type: Number,
        default: 0
    },
    max_salary: {
        type: Number,
        default: 0
    },
    currency_type: {
        type: String,
        default: "INR"
    },
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Companies",
        required: [true, "company name can not be null"]
    },
    min_age_limit: {
        type: Number,
        default: 60
    },
    max_age_limit: {
        type: Number,
        default: 0
    },
    job_poster_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recruiters",
        required: [true, "job poster name can not be null"]
    },
    spoken_english_level: {
        type: String,
        enum: ["beginner", "intermediate", "fluent"]
    },
    is_target_based_salary: {
        type: Boolean,
        default: false
    },
    duty_hours: {
        type: Number,
        default: 8
    },
    gender: {
        type: String,
        enum: ["male", "female", "all"],
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    any_charges: {
        type: Boolean,
        required: [true, "any charges field can not be blank"]
    },
    is_disabled_alllow: {
        type: Boolean,
        default: true
    },
    applicant_list: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
        ref: "applicants"
    },
    matched_applicant_list: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
        ref: "applicants"
    }
});

const JobModel = mongoose.model<JobPostDetails>("Jobs", JobSchema);

export default JobModel;