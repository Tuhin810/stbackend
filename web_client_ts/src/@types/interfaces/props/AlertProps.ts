export interface AlertProps{
    type?:string,
    text:string,
    
    title:string,
    handleClose?:()=>void
}