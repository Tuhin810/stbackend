import { MultiValue, SingleValue } from "react-select"
import { ISuggestion } from "../../Suggestion"

export interface JobPostPage2Props{
    handleChangeMandatorySkillList:(event: MultiValue<unknown>) => void
    handleChangeAdditionalSkillList:(skill: MultiValue<unknown>) => void,
    handleChangeQualification:(event: SingleValue<ISuggestion>) => void
}