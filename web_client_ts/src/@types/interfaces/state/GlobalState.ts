import { GlobalLoggedInDetails } from "../GlobalLoggedInDetails"
import { GlobalLoggedInAction } from "../actionTypes/GlobalLoggedInAction"

export interface GlobalDetailsState{
    globalLoggedIn:GlobalLoggedInDetails
    loggedIn:React.Dispatch<GlobalLoggedInAction>
}