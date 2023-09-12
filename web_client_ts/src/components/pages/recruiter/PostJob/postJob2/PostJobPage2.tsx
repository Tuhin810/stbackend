import Select from 'react-select'
import { JobPostPage2Props } from '../../../../../@types/interfaces/props/JobPostPageProps/JobPostPage2Props';
import { skillSuggestion } from '../../../../../constants/skillSuggestion';
import makeAnimated from 'react-select/animated';
import { DegreeSuggestion } from '../../../../../constants/degreesSuggestion';
const animatedComponents = makeAnimated();

const PostJobPage2 = ({ handleChangeMandatorySkillList, handleChangeAdditionalSkillList, handleChangeQualification }: JobPostPage2Props) => {

    // const [skill, setSkill] = useState("");
    // const [additionalSkill, setAdditionalSkillSkill] = useState("");



    return (
        <div>
            <div className="mb-4">
                <label htmlFor="mandatory_skills" className="block font-medium text-blue-600">Mandatory Skills</label>
                <Select
                    options={skillSuggestion}
                    closeMenuOnSelect={false}
                    isMulti
                    components={animatedComponents}
                    onChange={e=>handleChangeMandatorySkillList(e)}
                    />

            </div>
            <div className="mb-4">
                <label htmlFor="additonal_skills" className="block font-medium text-blue-600">Additional Skills</label>
                <Select
                    options={skillSuggestion}
                    closeMenuOnSelect={false}
                    isMulti
                    components={animatedComponents}
                    onChange={e=>handleChangeAdditionalSkillList(e)}
                    />
            </div>
            <div className="mb-4">
                <label htmlFor="qualification" className="block font-medium text-blue-600">Qualification</label>
                <Select
                    options={DegreeSuggestion}
                    closeMenuOnSelect={false}
                    onChange={e=>handleChangeQualification(e)}
                />
            </div>
        </div>
    )
}

export default PostJobPage2
