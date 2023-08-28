export const getUserType = ():string => {
    const userType = localStorage.getItem("userType");
    if(userType){
        console.log(userType);
        return userType;
    }
    return "home";
}