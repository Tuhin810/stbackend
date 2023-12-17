import { PaymentPackages } from "../../@types/interfaces/PaymentDetails";
import { RecruiterSignUp } from "../../@types/interfaces/RecruiterDetails";
import { ReviewDetails } from "../../@types/interfaces/ReviewDetails";
import { UserCredential } from "../../@types/interfaces/UserCredentail";
import applicantModel from "../../model/applicant/ApplicantSchema";
import recruiterModel from "../../model/recruiter/RecruiterSchema"
import PlanModel from "../../model/subscription_plans_list/subscription_plans_list_Schema";
import { encryptPass, isEmail, isPasswordMatched } from "../commonFunction/CommonFunctions";

export const getRecruiterByEmail = async (email: string) => {
    try {
        const recruiter = await recruiterModel.findOne({ email: email }).populate("company_details").exec();
        return recruiter;
    }
    catch (error) {
        throw error;
    }
}

export const getRecruiterByPhone = async (phone: number) => {
    try {
        const recruiter = await recruiterModel.findOne({ phone: phone }).populate("company_details").exec();
        return recruiter;
    }
    catch (error) {
        throw error;
    }
}


export const postRecruiter = async (recruiterDetails: RecruiterSignUp) => {
    try {
        let data = null;
        const hashPass = await encryptPass(recruiterDetails.password!);
        if (hashPass != undefined) {
            recruiterDetails.password = hashPass
            const response = await recruiterModel.create(recruiterDetails);
            if (response) {
                data = await getRecruiterByEmail(recruiterDetails.email);
            }
            return data;
        }
    }
    catch (error) {
        throw error;
    }
}

export const getRecruiterByEmailAndPassword = async (recruiterCredential: UserCredential) => {

    try {
        let response;
        const { userId } = recruiterCredential;
        if (!isEmail(recruiterCredential.userId)) {
            response = await recruiterModel.findOne({ email: userId }).populate("company_details").exec();
        }
        else {
            response = await recruiterModel.findOne({ phone: userId }).populate("company_details").exec();
        }
        const isPassMatched = await isPasswordMatched(recruiterCredential.password, response?.password || "")

        if (isPassMatched) {
            return response;
        }
        else return null;
    }
    catch (error) {
        console.log("error", error);
        throw error;
    }
}


export const postReviewToApplicantService = async (applicantId: string, review: ReviewDetails) => {
    try {
        const reviewResponse = await applicantModel.findByIdAndUpdate(applicantId,
            {
                $push: { reviews: review },
            }

        )
        if (reviewResponse) {
            const applicantDetailsInstance = await applicantModel.findById(applicantId);
            return applicantDetailsInstance;
        }
    } catch (error) {
        throw error;
    }
}
