export const formatDate = (date:Date) => {
    const dateString = date.toString();
    let formattedDate="";
    for(let char of dateString){
        if(char!=="T"){
            formattedDate+=char;
        }
        else{
            break;
        }
    }
    return formattedDate;
}

export const formatTitle = (jobTitle:string)=>{
    const title=jobTitle;
    title.charAt(0).toUpperCase();
    for(let i =0;i<title.length;i++){
        if(title.charAt(i)==' '){
            title.charAt(i+1).toUpperCase();
        }
    }
    return title;
}