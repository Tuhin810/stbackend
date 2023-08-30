import { ApplicantDetails } from "../../@types/ApplicantDetails";
import { ApplicantLoggedInDetails } from "../../@types/interfaces/ApplicantLoggedInDetails";
import { ApplicantLoggedInAction } from "../../@types/interfaces/actionTypes/ApplicantLoggedInAction";

const setApplicantLoggedIn = (applicantloggedin: ApplicantLoggedInDetails, action: ApplicantLoggedInAction): ApplicantLoggedInDetails => {
    switch (action.type) {
        case "login": {
            localStorage.setItem("details", JSON.stringify(action.payload));
            return {
                ...applicantloggedin,
                isLoggedin: true,
                applicantDetails: action.payload
            };
        }
        case "refreshPage": {
            const recruiterDetails: ApplicantDetails = JSON.parse(localStorage.getItem("details")!);
            return {
                ...applicantloggedin,
                isLoggedin: true,
                applicantDetails: recruiterDetails
            };
        }
        case "logout": {
            localStorage.clear();
            return {
                ...applicantloggedin,
                isLoggedin: false,
                applicantDetails: {} as ApplicantDetails
            };
        }
        case "updateDetails":{
            localStorage.setItem("details", JSON.stringify(action.payload));
            return{
                ...applicantloggedin,
                isLoggedin: true,
                applicantDetails: action.payload
            }
        }
        default:
            return {} as ApplicantLoggedInDetails

    }
}


export { setApplicantLoggedIn as applicantLoggedInReducer }