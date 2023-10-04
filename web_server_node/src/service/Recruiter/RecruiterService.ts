import { RecruiterSignUp } from "../../@types/interfaces/RecruiterDetails";
import { UserCredential } from "../../@types/interfaces/UserCredentail";
import RecruiterModel from "../../model/recruiter/RecruiterSchema"
import { encryptPass, isEmail, isPasswordMatched } from "../commonFunction/CommonFunctions";

export const getRecruiterByEmail = async (email: string) => {
    const recruiter = await RecruiterModel.findOne({ email: email }).populate("company_details").exec();
    return recruiter;
}

// export const postRecruiter = async (recruiterDetails: RecruiterSignUp) => {
//     let data = null;
//     const response = await RecruiterModel.create(recruiterDetails);
//     if (response) {
//         data = await getRecruiterByEmail(recruiterDetails.email);
//     }
//     return data;
// }

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
    // console.log(recruiterCredential);
    // const recruiter = await RecruiterModel.findOne({ $and: [{ email: recruiterCredential.userId }, { password: recruiterCredential.password }] }).populate("company_details").exec();

    // return recruiter;

    try {
        let response;
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
        throw error;
    }
}


