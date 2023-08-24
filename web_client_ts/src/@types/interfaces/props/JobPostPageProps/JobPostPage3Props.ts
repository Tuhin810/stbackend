export interface JobPostPage3Props{
    handleChangeLocation: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleChangeAge: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleChangeGender: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    handleChangeSalary:(event: React.ChangeEvent<HTMLInputElement>) => void,
    handleChangeExperience:(event: React.ChangeEvent<HTMLInputElement>) => void,
}