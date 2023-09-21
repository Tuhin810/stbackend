export const getUserType = ():string => {
    const userType = localStorage.getItem("userType");
    if(userType){
        return userType;
    }
    return "home";
}

export const guard = ():boolean =>{
    return window.location.href.indexOf(getUserType())===-1;
}