import { createContext } from "react";
import {  UserDetails } from "../../@types/UserDetails";
import { DefaultDeserializer } from "v8";

interface userDetailsState{
    userDetails:UserDetails,
    isLoggedIn:boolean,
    loggedIn:(userDetails:UserDetails)=>void,
    loggedOut:()=>void,
}

export const userContext= createContext({} as userDetailsState);
