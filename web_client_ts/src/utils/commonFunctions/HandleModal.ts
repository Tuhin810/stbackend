
export const showModal = (id:string) => {
    document.getElementById(id)!.classList.remove('hidden');
}
export const hideModal = (id:string)=>{
    document.getElementById(id)!.classList.add('hidden');
}