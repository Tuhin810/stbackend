import { GlobalLoggedInDetails } from "../../@types/interfaces/GlobalLoggedInDetails";
import { GlobalLoggedInAction } from "../../@types/interfaces/actionTypes/GlobalLoggedInAction";

const setGlobalLoggedIn = (userloggedin: GlobalLoggedInDetails, action: GlobalLoggedInAction): GlobalLoggedInDetails => {
    switch (action.type) {
        case "login": {
            userloggedin.isLoggedIn = true;
            userloggedin.userType = action.userType;
            localStorage.setItem('userType', action.userType);
            return userloggedin;
        }
        case "refresh_page":{
            const userType:string  = localStorage.getItem("userType")!;
            userloggedin.isLoggedIn = true;
            userloggedin.userType = userType
            return userloggedin;
        }
    }

    return {} as GlobalLoggedInDetails;
}
export { setGlobalLoggedIn as globalLoggedInReducer }