export const getUserType = ():string => {
    const userType = localStorage.getItem("userType");
    if(userType){
        return userType;
    }
    return "home";
}