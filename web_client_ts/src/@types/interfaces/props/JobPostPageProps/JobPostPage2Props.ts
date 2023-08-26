export interface JobPostPage2Props{
    pushMandatorySkills:(skill: string) => string[]
    pushAdditonalSkills:(skill: string) => string[],
    handleChangeQualification:(event: React.ChangeEvent<HTMLInputElement>) => void
}