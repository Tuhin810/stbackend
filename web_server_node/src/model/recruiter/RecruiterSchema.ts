import mongoose, { Schema } from "mongoose";
import { RecruiterSignUp } from "../../@types/interfaces/RecruiterSignup";

// model for new registration 

const recruiterSchema: Schema<RecruiterSignUp> = new mongoose.Schema({
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
        default:""
    },
    address: {
        type: String,
        default: ""
    },
    state: {
        type: String,
        default: ""
    },
    country: {
        type: String,
        default: ""
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
    dob: {
        type: Date
    },
    photo: {
        data: Buffer,
        contentType: String,
    },
    company_name: {
        type:String,
        required:[true,"company name can not be blank"]
    }
});

const RecruiterModel = mongoose.model<RecruiterSignUp>("Recruiters", recruiterSchema);

export default RecruiterModel;