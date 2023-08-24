import { useEffect, useState } from 'react';
import { JobPostPage2Props } from '../../../../../@types/interfaces/props/JobPostPageProps/JobPostPage2Props';
const PostJobPage2 = ({ pushMandatorySkills, pushAdditonalSkills, handleChangeQualification }: JobPostPage2Props) => {

    const [skill, setSkill] = useState("");
    const [additionalSkill, setAdditionalSkillSkill] = useState("");

    const handleChangeMandatorySkill=(event:React.KeyboardEvent<HTMLInputElement>)=>{
        if (event.key === "Enter") {
            setSkill(event.currentTarget.value)
            pushMandatorySkills(event.currentTarget.value);
        };
    }
    const handleChangeAdditionalSkill=(event:React.KeyboardEvent<HTMLInputElement>)=>{
        if (event.key === "Enter") {
            setAdditionalSkillSkill(event.currentTarget.value)
            pushAdditonalSkills(event.currentTarget.value);
        };
    }
    

    return (
        <div>
            <div className="mb-4">
                <label htmlFor="mainSkills" className="block font-medium text-blue-600">Mandatory Skills</label>
                <input type="text" id="mainSkills" name="mainSkills" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onKeyDown={(e) => {handleChangeMandatorySkill(e)}}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="additonalSkills" className="block font-medium text-blue-600">Additional Skills</label>
                <input type="text" id="additonalSkills" name="additonalSkills" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onKeyDown={e => handleChangeAdditionalSkill(e)} />
            </div>
            <div className="mb-4">
                <label htmlFor="qualification" className="block font-medium text-blue-600">Qualification</label>
                <input type="text" id="qualification" name="qualification" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={(e) => handleChangeQualification(e)} />
            </div>
        </div>
    )
}

export default PostJobPage2
