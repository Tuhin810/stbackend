export const getUserType = ():string => {
    const userType = localStorage.getItem("userType");
    if(userType){
        return userType;
    }
    return "home";
}

export const guard = (userType:string):boolean =>{
    return window.location.href.indexOf(userType)===-1;
}