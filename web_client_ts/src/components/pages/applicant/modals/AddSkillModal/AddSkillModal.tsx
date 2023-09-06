import { useState,useContext } from "react";
import { hideModal } from "../../../../../utils/commonFunctions/HandleModal"
import { applicantContext } from "../../../../../context/applicantDetails/ApplicantContext";
import { updateApplicantSkills } from "../../../../../utils/apis/applicant/Applicant";

const AddSkillModal = () => {
    const [skillName, setSkillName] = useState("");
    const {applicantDispatch} = useContext(applicantContext);
    const {applicantloggedinDetails} =useContext(applicantContext);
    const handleChangeSkillName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSkillName(value);
    }
    const handleAddSkill = async()=>{
        const response = await updateApplicantSkills(applicantloggedinDetails.applicantDetails._id!,skillName);
        if(response?.status===200){
            applicantDispatch({type:"updateDetails",payload:response?.data.applicant})
            hideModal("addSkills")
        }
    }
    return (
        <div>
            <div id="addSkills" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm hidden">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg">
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
                                <div>
                                    <label htmlFor="skill" className="block mb-2 text-sm font-medium text-gray-900 darkno:text-white">Skill Name</label>
                                    <input type="text" name="skill" id="skill" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                     focus:border-blue-500 block w-full p-2.5 " placeholder="web development" required onChange={(e) => handleChangeSkillName(e)} />
                                </div>
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
