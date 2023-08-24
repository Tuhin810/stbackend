export const getuserDetails = () => {
    const details = localStorage.getItem('details');
    if(details){
        return JSON.parse(details);
    }
    return {};
}