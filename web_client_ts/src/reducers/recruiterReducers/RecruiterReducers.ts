import { RecruiterDetails } from "../../@types/RecruiterDetails";
import { RecruiterLoggedInDetails } from "../../@types/interfaces/RecruiterLoggedInDetails";
import { RecruiterLoggedInAction } from "../../@types/interfaces/actionTypes/RecruiterLoggedInAction";

const setRecruiterLoggedIn = (recruiterloggedin: RecruiterLoggedInDetails, action: RecruiterLoggedInAction): RecruiterLoggedInDetails => {
    switch (action.type) {
        case "login":
            localStorage.setItem("details", JSON.stringify(action.payload));
            return {
                ...recruiterloggedin,
                isLoggedin: true,
                recruiterDetails: action.payload
            };
        case "refreshPage":
            const recruiterDetails: RecruiterDetails = JSON.parse(localStorage.getItem("details")!);
            return {
                ...recruiterloggedin,
                isLoggedin: true,
                recruiterDetails: recruiterDetails
            };
        case "updateDetails":{
            localStorage.setItem("details", JSON.stringify(action.payload));
            return{
                ...recruiterloggedin,
                isLoggedin: true,
                recruiterDetails: action.payload
            }
        }
        case "logout":
            localStorage.clear();
            return {
                ...recruiterloggedin,
                isLoggedin: false,
                recruiterDetails: {} as RecruiterDetails
            };
        default:
            return {} as RecruiterLoggedInDetails

    }
}


export { setRecruiterLoggedIn as recruiterLoggedInReducer }