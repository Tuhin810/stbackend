export interface ModalProps{
    id:string,
    message:string,
    leftButtonText:string,
    rightButtontext:string,
    leftMethod:()=>void,
    rightMethod:()=>void,
    Img:string
}