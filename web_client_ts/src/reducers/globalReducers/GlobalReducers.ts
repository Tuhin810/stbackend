import { GlobalLoggedInDetails } from "../../@types/interfaces/GlobalLoggedInDetails";
import { GlobalLoggedInAction } from "../../@types/interfaces/actionTypes/GlobalLoggedInAction";

const setGlobalLoggedIn = (userloggedin:GlobalLoggedInDetails,action:GlobalLoggedInAction):GlobalLoggedInDetails=>{
    if(action.type==="login"){
        userloggedin.isLoggedIn=true;
        userloggedin.userType=action.userType;
        localStorage.setItem('userType',action.userType);
        return userloggedin;
    }
    return {} as GlobalLoggedInDetails;
}
export {setGlobalLoggedIn as globalLoggedInReducer}