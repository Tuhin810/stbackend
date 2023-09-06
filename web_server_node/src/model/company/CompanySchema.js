"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanySchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// model for new company registration 
exports.CompanySchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "first name can not be empty"],
        maxlength: [50, "Name cannot be more than 50 characters"],
        unique: true
    },
    logo: {
        data: Buffer,
        contentType: String,
    },
    type: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        default: "",
        unique: true,
        required: [true, "company email can not be blank"]
    },
    country_code: {
        type: String,
        trim: true,
        enum: ["+91", "033", "+1"],
        default: "+91"
    },
    phone: {
        type: Number,
        maxLength: [10, "phone number can not be more than 10 digits"],
        unique: true,
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
    address: {
        type: String,
        default: ""
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    gst_number: {
        type: String,
        unique: true
    },
    no_of_workers: {
        type: Number,
        default: 0
    },
    establish_year: {
        type: Number,
        maxlength: [4, "invalid years"]
    },
    website: {
        type: String,
    }
});
const CompanyModel = mongoose_1.default.model("Companies", exports.CompanySchema);
exports.default = CompanyModel;