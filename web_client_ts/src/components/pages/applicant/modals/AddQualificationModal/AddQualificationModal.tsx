import { useCallback, useContext, useState } from "react"
import Select, { SingleValue } from 'react-select'
import { hideModal } from "../../../../../utils/commonFunctions/HandleModal"
import { ApplicantEducation } from "../../../../../@types/interfaces/ApplicantEducation"
import { updateApplicantEducation } from "../../../../../utils/apis/applicant/Applicant";
import { applicantContext } from "../../../../../context/applicantDetails/ApplicantContext";
import { DegreeSuggestion } from "../../../../../constants/degreesSuggestion";
import { ISuggestion } from "../../../../../@types/interfaces/Suggestion";

const AddQualificationModal = () => {
    const { applicantDispatch } = useContext(applicantContext);
    const { applicantloggedinDetails } = useContext(applicantContext);
    const [educationDetails, setEducationDetails] = useState<ApplicantEducation>({
        "qualification": "",
        "inst_name": "",
        "from_year": 0,
        "to_year": 0
    });

    const handleChangeEducationDetails = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEducationDetails(Object.assign({}, educationDetails, { [name]: value }));
    }, [educationDetails]);

    const handleChangeDegree = (event: SingleValue<ISuggestion>) => {
        setEducationDetails(Object.assign({}, educationDetails, { ["qualification"]: event?.value }));
        console.log('event',event!.value);
    }

    const handleSubmit = async () => {
        const response = await updateApplicantEducation(applicantloggedinDetails.applicantDetails._id!, educationDetails);
        if (response?.status === 200) {
            applicantDispatch({ type: "updateDetails", payload: response?.data.applicant })
            hideModal("addDegrees")
        }
    }
    return (
        <div>
            <div id="addDegrees" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm hidden">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-xl shadow darkno:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto
                         inline-flex justify-center items-center darkno:hover:bg-gray-600 darkno:hover:text-white" data-modal-hide="authentication-modal"
                            onClick={() => { hideModal("addDegrees") }}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 darkno:text-white">Enter Your<span className="text-blue-600"> Qualification </span>Details</h3>
                            <div className="space-y-6">
                                {/* <div>
                                    <label htmlFor="qualification" className="block mb-2 text-sm font-medium text-gray-900 darkno:text-white">Degree</label>
                                    <input type="text" name="qualification" id="qualification" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                     placeholder="secondary education" required onChange={(e)=>{handleChangeEducationDetails(e)}}/>
                                </div> */}
                                <Select
                                    options={DegreeSuggestion}
                                    closeMenuOnSelect={false}
                                    onChange={e => handleChangeDegree(e)}
                                />
                                <div>
                                    <label htmlFor="inst_name" className="block mb-2 text-sm font-medium text-blue-600 darkno:text-white">Institution<span className="text-black"> Name</span></label>
                                    <input type="text" name="inst_name" id="inst_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="St. Pauls School" required onChange={(e) => { handleChangeEducationDetails(e) }} />
                                </div>
                                <div className="mb-4 flex">
                                    <div className="w-1/2 pr-2">
                                        <label htmlFor="from_year" className="block font-medium text-blue-600">From</label>
                                        <input type="number" id="from_year" name="from_year" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring
                                         focus:border-blue-300" onChange={(e) => { handleChangeEducationDetails(e) }}/>
                                    </div>
                                    <div className="w-1/2 pl-2">
                                        <label htmlFor="to_year" className="block text-blue-600 text-sm font-medium mb-1">To</label>
                                        <input type="number" id="to_year" name="to_year" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring
                                         focus:border-blue-300" required onChange={(e) => { handleChangeEducationDetails(e) }} />
                                    </div>
                                </div>
                                <button className="w-full inline-flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                                font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleSubmit}>
                                    Add Qualification
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

export default AddQualificationModal
