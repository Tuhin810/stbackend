import { useState } from 'react';
import { JobPostPage2Props } from '../../../../../@types/interfaces/props/JobPostPageProps/JobPostPage2Props';
import SkillList from '../skillList/SkillList';
const PostJobPage2 = ({ pushMandatorySkills, pushAdditonalSkills, handleChangeJobDetails }: JobPostPage2Props) => {

    // const [skill, setSkill] = useState("");
    // const [additionalSkill, setAdditionalSkillSkill] = useState("");

    const [skillList,setSkillList] =useState<string[]>([]);

    const handleChangeMandatorySkill=(event:React.KeyboardEvent<HTMLInputElement>)=>{
        if (event.key === "Enter") {
            event.preventDefault();
            // setSkill(event.currentTarget.value)
            const listData= pushMandatorySkills(event.currentTarget.value);
            setSkillList(listData);
            event.currentTarget.value=''
        }
    }
    const handleChangeAdditionalSkill=(event:React.KeyboardEvent<HTMLInputElement>)=>{
        if (event.key === "Enter") {
            // setAdditionalSkillSkill(event.currentTarget.value)
            pushAdditonalSkills(event.currentTarget.value);
            
        }
    }
    

    return (
        <div>
            <div className="mb-4">
                <label htmlFor="mandatory_skills" className="block font-medium text-blue-600">Mandatory Skills</label>
                <SkillList skillList={skillList}/>
                <input type="text" id="mandatory_skills" name="mandatory_skills" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onKeyDown={(e) => {handleChangeMandatorySkill(e)}}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="additonal_skills" className="block font-medium text-blue-600">Additional Skills</label>
                <input type="text" id="additonal_skills" name="additonal_skills" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onKeyDown={e => handleChangeAdditionalSkill(e)} />
            </div>
            <div className="mb-4">
                <label htmlFor="qualification" className="block font-medium text-blue-600">Qualification</label>
                <input type="text" id="qualification" name="qualification" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={(e) => handleChangeJobDetails(e)} />
            </div>
        </div>
    )
}

export default PostJobPage2
