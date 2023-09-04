export interface IApplicantSignUpProps{
    handleChangeApplicantDetails:(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>)=>void;
    passwordError?:boolean
}