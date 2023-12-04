import { PaymentPackages } from "../../@types/interfaces/PaymentDetails";
import { RecruiterSignUp } from "../../@types/interfaces/RecruiterDetails";
import { ReviewDetails } from "../../@types/interfaces/ReviewDetails";
import { UserCredential } from "../../@types/interfaces/UserCredentail";
import applicantModel from "../../model/applicant/ApplicantSchema";
import recruiterModel from "../../model/recruiter/RecruiterSchema"
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

// export const buySubscription = async (paymentPackage: PaymentPackages, recruiterId: string) => {
//     try {
//         recruiterModel.updateOne(
//             { _id: recruiterId },
//             {
//                 $set:
//                 {
//                     job_post_left: paymentPackage.no_of_job_post
//                 }
//             }
//         )
//         const response = await recruiterModel.findById(recruiterId);
//         return response;
//     }
//     catch (error) {
//         throw error;
//     }
// }

export const buySubscription = async (payment: PaymentPackages, recId: string) => {
    try {
        // Assuming  function to verify the payment, let's call it verifyPayment
        // const isPaymentValid = await verifyPayment(payment);
        const isPaymentValid = true;
        // const price = 700;
        if (isPaymentValid) {
            const recruiter = await recruiterModel.findById(recId);

            if (recruiter) {

                //for furthur price increasing part job_limit will increase using payment.price
                // if (price <= 501) {
                //     recruiter.job_limit += 10;
                // }
                // else if (price <= 701) {
                //     recruiter.job_limit += 20;
                // }
                // else if (price <= 1000) {
                //     recruiter.job_limit += 30;
                // }
                recruiter.subscription = true;
                recruiter.activated = true;
                // recruiter.subscription_plan_object_id = payment.paymentPlanId;
                await recruiter.save();

                return {
                    success: true,
                    message: "Payment successful",
                    data: recruiter,
                };
            } else {
                return {
                    success: false,
                    message: "Recruiter not found",
                };
            }
        } else {
            return {
                success: false,
                message: "Invalid payment",
            };
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

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
