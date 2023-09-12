import { useState, useContext, useCallback } from "react";
import { ApplicantDetails } from "../../../../../@types/ApplicantDetails";
import { updateApplicantDetailsById } from "../../../../../utils/apis/applicant/Applicant";
import { applicantContext } from "../../../../../context/applicantDetails/ApplicantContext";
import { MyProfileDetailsProps } from "../../../../../@types/interfaces/props/myProfileDetailsProps/MyProfileDetailsProps";
import { hideModal } from "../../../../../utils/commonFunctions/HandleModal"

export const AddAditionalModal = ({ defaultApplicantDetails }: MyProfileDetailsProps) => {

  const { applicantDispatch } = useContext(applicantContext);
  const { applicantloggedinDetails } = useContext(applicantContext);
  const [applicantDetails, setApplicantDetails] = useState<ApplicantDetails>({} as ApplicantDetails);

  const handleChangeApplicantDetails = useCallback((event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    if(name==="is_disabled"){
      setApplicantDetails(Object.assign({}, applicantDetails, { [name]: (value==="true") }));
    }
    else if(name==="min_expected_salary" || name==="min_duty_hours" || name==="experience_year"){
      setApplicantDetails(Object.assign({}, applicantDetails, { [name]: Number(value) }));
    }
    else setApplicantDetails(Object.assign({}, applicantDetails, { [name]: value }));
  }, [applicantDetails]);

  const handleUpdate = async () => {
    const response = await updateApplicantDetailsById(applicantloggedinDetails.applicantDetails._id!, applicantDetails);
    if (response?.status === 200) {
      applicantDispatch({ type: "updateDetails", payload: response?.data.data })
      hideModal("updateAdditionalProfile")
    }
  }
  return (
    <div>
      <div id="updateAdditionalProfile" className={` fixed inset-0 z-40 flex items-center hidden justify-center bg-black bg-opacity-50 backdrop-blur-sm`}>
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-xl shadow ">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto
                         inline-flex justify-center items-center darkno:hover:bg-gray-600 darkno:hover:text-white" data-modal-hide="authentication-modal"
              onClick={() => { hideModal("updateAdditionalProfile") }} >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 darkno:text-white">Update your<span className="text-blue-600"> Additional </span>Details</h3>
              <div className="space-y-6 mt-6">

                <div className="mb-4 flex">
                  <div className="w-1/2 pr-2">
                    <label htmlFor="spoken_english" className="block text-sm font-medium mb-1 text-blue-600">Spoken English Level</label>
                    <select id="spoken_english" name="spoken_english" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" onChange={e=>handleChangeApplicantDetails(e)}>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="fluent">Fluent</option>
                    </select>
                  </div>
                  <div className="w-1/2 pr-2">
                    <label htmlFor="native_language" className="block text-gray-700 text-sm font-medium mb-1">Native Language</label>
                    <input type="text" id="native_language" name="native_language" defaultValue={defaultApplicantDetails.native_language} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required onChange={e=>handleChangeApplicantDetails(e)} />
                  </div>
                </div>

                <div className="mb-4 flex">
                  <div className="w-1/2 pr-2">
                    <label htmlFor="experience_year" className="block text-gray-700 text-sm font-medium mb-1">Experience</label>
                    <input type="number" id="experience_year" name="experience_year" defaultValue={defaultApplicantDetails.experience_year} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required onChange={e=>handleChangeApplicantDetails(e)}/>
                  </div>
                  <div className="w-1/2 pr-2">
                    <label htmlFor="min_expected_salary" className="block text-gray-700 text-sm font-medium mb-1">Exp. Salaray</label>
                    <input type="number" id="min_expected_salary" name="min_expected_salary" defaultValue={defaultApplicantDetails.min_expected_salary} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" onChange={e=>handleChangeApplicantDetails(e)} required />
                  </div>
                </div>

                <div className="mb-4 flex">
                  <div className="w-1/2 pr-2">
                    <label htmlFor="min_duty_hours" className="block text-gray-700 text-sm font-medium mb-1">Preferred Duty Hours</label>
                    <input type="number" id="min_duty_hours" name="min_duty_hours" defaultValue={defaultApplicantDetails.min_duty_hours} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" onChange={e=>handleChangeApplicantDetails(e)} required />
                  </div>
                  <div className="w-1/2 pr-2">
                  <label htmlFor="is_disabled" className="block text-sm font-medium mb-1 text-blue-600">Physcically Disabled</label>
                    <select id="is_disabled" name="is_disabled" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" >
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                </div>


                <button
                  onClick={handleUpdate}
                  className="w-full inline-flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                                font-medium rounded-lg text-sm px-5 py-2.5 text-center" >
                  Update Profile
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
