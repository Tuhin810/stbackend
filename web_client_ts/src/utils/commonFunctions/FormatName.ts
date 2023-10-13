export const getFormattedtName = (name:string | null):string[] =>{
    if(name){
        const trimmedName=name.trim();
        const nameList = trimmedName.split(' ');
        return nameList;
    }
    return []
}