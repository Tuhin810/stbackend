const modalOverlay = document.getElementById('modal-overlay');
export const showModal = (id:string) => {
    console.log('y');
    document.getElementById(id)!.classList.remove('hidden');
}
export const hideModal = ()=>{
    modalOverlay!.classList.add('hidden');
}