import { createContext } from "react";

interface GlobalDetailsState{
    userType:string,
    isLoggedIn:boolean,
    loggedIn:(userType:string)=>void,
    loggedOut:()=>void,
}

export const globalContext= createContext({} as GlobalDetailsState);
