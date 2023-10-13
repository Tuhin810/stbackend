import { PaymentPackages } from "../../@types/interfaces/PaymentDetails";
import { RecruiterSignUp } from "../../@types/interfaces/RecruiterDetails";
import { UserCredential } from "../../@types/interfaces/UserCredentail";
import RecruiterModel from "../../model/recruiter/RecruiterSchema"
import { encryptPass, isEmail, isPasswordMatched } from "../commonFunction/CommonFunctions";

export const getRecruiterByEmail = async (email: string) => {
    try {
        const recruiter = await RecruiterModel.findOne({ email: email }).populate("company_details").exec();
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
            const response = await RecruiterModel.create(recruiterDetails);
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
        console.log("credential", recruiterCredential);
        const { userId } = recruiterCredential;
        if (!isEmail(recruiterCredential.userId)) {
            response = await RecruiterModel.findOne({ email: userId }).populate("company_details").exec();
        }
        else {
            response = await RecruiterModel.findOne({ phone: userId }).populate("company_details").exec();
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

export const buySubscription = async (paymentPackage: PaymentPackages, recruiterId: string) => {
    try {
        RecruiterModel.updateOne(
            { _id: recruiterId },
            {
                $set:
                {
                    job_post_left: paymentPackage.no_of_job_post
                }
            }
        )
        const response = await RecruiterModel.findById(recruiterId);
        return response;
    }
    catch (error) {
        throw error;
    }
}


