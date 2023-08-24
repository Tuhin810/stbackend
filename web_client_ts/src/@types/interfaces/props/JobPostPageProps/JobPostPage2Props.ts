export interface JobPostPage2Props{
    pushMandatorySkills:(skill: string) => void
    pushAdditonalSkills:(skill: string) => void,
    handleChangeQualification:(event: React.ChangeEvent<HTMLInputElement>) => void
}