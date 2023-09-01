export interface JobPostPage2Props{
    pushMandatorySkills:(skill: string) => string[]
    pushAdditonalSkills:(skill: string) => string[],
    handleChangeJobDetails:(event: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void
}