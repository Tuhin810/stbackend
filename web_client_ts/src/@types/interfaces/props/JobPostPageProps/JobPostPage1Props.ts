export interface JobPostPage1Props{
    handleChangeJobTitle:(event: React.ChangeEvent<HTMLInputElement>) => void
    handleChangeJobType:(event: React.ChangeEvent<HTMLSelectElement>) => void,
    handleChangeJobDescription:(event: React.ChangeEvent<HTMLTextAreaElement>) => void
}