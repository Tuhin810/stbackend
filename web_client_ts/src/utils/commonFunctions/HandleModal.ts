const modalOverlay = document.getElementById('modal-overlay');
export const showModal = ()=>{
    console.log('y');
    modalOverlay!.classList.remove('hidden');
}
export const hideModal = ()=>{
    modalOverlay!.classList.add('hidden');
}