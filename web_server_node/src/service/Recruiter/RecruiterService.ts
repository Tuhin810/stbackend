import { RecruiterSignUp } from "../../@types/interfaces/RecruiterSignup";
import { UserCredential } from "../../@types/interfaces/UserCredentail";
import RecruiterModel from "../../model/recruiter/RecruiterSchema"

export const getRecruiterByEmail = async (email: string) => {
    const recruiter = await RecruiterModel.findOne({ email: email });
    return recruiter;
}

export const postRecruiter = async (recruiterDetails: RecruiterSignUp) => {
    const data = await RecruiterModel.create(recruiterDetails);
    return data;
}

export const getRecruiterByEmailAndPassword = async (recruiterCredential: UserCredential) => {
    const recruiter = await RecruiterModel.findOne({ $and: [{ email: recruiterCredential.email }, { password: recruiterCredential.password }] }).populate("company_id").exec();
    return recruiter;
}