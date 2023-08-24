import { RecruiterLoggedInDetails } from "../../@types/interfaces/RecruiterLoggedInDetails";
import { RecruiterLoggedInAction } from "../../@types/interfaces/actionTypes/RecruiterLoggedInAction";

const setRecruiterLoggedIn = (recruiterloggedin:RecruiterLoggedInDetails,action:RecruiterLoggedInAction):RecruiterLoggedInDetails=>{
    if(action.type==="login"){
        recruiterloggedin.isLoggedin=true;
        recruiterloggedin.recruiterDetails=action.payload;
        localStorage.setItem('details',JSON.stringify(action.payload));
        return recruiterloggedin;
    }
    return {} as RecruiterLoggedInDetails;
}


export {setRecruiterLoggedIn as recruiterLoggedInReducer}