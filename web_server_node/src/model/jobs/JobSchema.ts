import mongoose, { Schema } from "mongoose";
import { JobsDetails } from "../../@types/interfaces/JobsDetails";

// model for new company registration 

const JobSchema: Schema<JobsDetails> = new mongoose.Schema({
    posted_date:{
        type:Date,
        default:Date.now
    },
    jobTitle:{
        type:String,
        required:[true,"job Title can't be null"]
    },
    jobType:{
        type:String,
        required:[true,"jobtype cannot be null"],
        enum: ["full-time", "part-time", "Internship", "Freelancing"],
    },
    jobDescription:{
        type:String,
        required:[true,"job description can not be null"]
    },
    no_of_vacancy:{
        type:Number,
        required:[true,"job description can not be empty"]
    },
    experience_year:{
        type:Number,
        default:0
    },
    skills:{
        type:[String],
        required:[true,"skills list cant be null"]
    },
    additonal_skills:{
        type:[String],
        default:[]
    },
    no_of_applicants:{
        type:Number,
        default:0
    },
    location:{
        type:[String],
        default:[]
    },
    salary:{
        type:Number,
        default:0
    },
    currency_type:{
        type:String,
        default:"INR"
    },
    company_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Companies",
        required:[true,"company name can not be null"]
    },
    age_limit:{
        type:Number,
        default:60
    },
    job_poster_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Recruiters",
        required:[true,"job poster name can not be null"]
    },
    spoken_english_required:{
        type:Boolean,
        default:true
    },
    is_target_based_salary:{
        type:Boolean,
        default:false
    },
    duty_hours:{
        type:Number,
        default:8
    },
    is_fresher_allowed:{
        type:Boolean,
        required:[true,"fresh allowed field can not be blank"]
    },
    gender:{
        type:String,
        enum:["male","female","all"],
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    any_charges:{
        type:Boolean,
        required:[true,"any charges field can not be blank"]
    }
});

const JobModel = mongoose.model<JobsDetails>("Jobs", JobSchema);

export default JobModel;