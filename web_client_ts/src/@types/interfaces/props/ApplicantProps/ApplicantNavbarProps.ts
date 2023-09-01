export interface IMobileApplicantNavbarProps{
    show:boolean,
    setShow:(show:boolean)=>void,
    logout:()=>void
}
export interface IDesktopApplicantNavbarProps{
    profile:boolean,
    setProfile:(profile:boolean)=>void,
    logout:()=>void
}