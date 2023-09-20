import { MultiValue, SingleValue } from "react-select"
import { ISuggestion } from "../../Suggestion"
import { AutoCompleteProps } from "../AutoCompleteProps/AutoCompleteProps"

export interface JobPostPage2Props{
    handleChangeMandatorySkillList:(event: MultiValue<AutoCompleteProps>) => void
    handleChangeAdditionalSkillList:(skill: MultiValue<AutoCompleteProps>) => void,
    handleChangeQualification:(event: SingleValue<ISuggestion>) => void
}