import { useState, useContext } from "react";
import Select, { MultiValue } from 'react-select'
import { hideModal } from "../../../../../utils/commonFunctions/HandleModal"
import { applicantContext } from "../../../../../context/applicantDetails/ApplicantContext";
import { updateApplicantSkills } from "../../../../../utils/apis/applicant/Applicant";
import { skillSuggestion } from "../../../../../constants/skillSuggestion";
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

const AddSkillModal = () => {
    const [skillList, setSkillList] = useState<string[]>([]);
    const { applicantDispatch } = useContext(applicantContext);
    const { applicantloggedinDetails } = useContext(applicantContext);
    const handleChangeSkillName = (event: MultiValue<unknown>) => {
        const tempArray:string[] = [];
        event.forEach((skill:any)=>{
            tempArray.push(skill.value);
        })
        setSkillList(tempArray);
    }
    const handleAddSkill = async () => {
        const response = await updateApplicantSkills(applicantloggedinDetails.applicantDetails._id!, skillList);
        if (response?.status === 200) {
            applicantDispatch({ type: "updateDetails", payload: response?.data.applicant })
            hideModal("addSkills")
        }
    }
    return (
        <div>
            <div id="addSkills" className="fixed inset-0 z-50  items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm hidden">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white -mt-56 rounded-lg">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-xl text-sm w-8 h-8 ml-auto
                         inline-flex justify-center items-center 
                         darkno:hover:bg-gray-600 darkno:hover:text-white"
                            data-modal-hide="authentication-modal"
                            onClick={() => { hideModal("addSkills") }}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 darkno:text-white"><span className="text-blue-600">Spotlight</span> Your Skills</h3>
                            <div className="space-y-6">
                                <Select
                                    options={skillSuggestion}
                                    closeMenuOnSelect={false}
                                    isMulti
                                    components={animatedComponents}
                                    onChange={e=>handleChangeSkillName(e)}
                                />
                                <button className="w-full inline-flex items-center justify-center text-white
                                 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={handleAddSkill}>
                                    Add Skills
                                    <svg className="w-4 h-4 ms-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.153 15 19 8l-4.847-7H1l4.848 7L1 15h13.153Z" />
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    )
}

export default AddSkillModal
