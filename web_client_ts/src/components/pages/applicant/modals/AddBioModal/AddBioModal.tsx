import { useState, useContext, useCallback } from "react";
import { ApplicantDetails } from "../../../../../@types/ApplicantDetails";
import { updateApplicantDetailsById } from "../../../../../utils/apis/applicant/Applicant";
import { applicantContext } from "../../../../../context/applicantDetails/ApplicantContext";
import { MyProfileDetailsProps } from "../../../../../@types/interfaces/props/myProfileDetailsProps/MyProfileDetailsProps";
import { hideModal } from "../../../../../utils/commonFunctions/HandleModal";


export const AddBioModal = ({ defaultApplicantDetails }: MyProfileDetailsProps) => {

    const { applicantDispatch } = useContext(applicantContext);
    const { applicantloggedinDetails } = useContext(applicantContext);
    const [applicantDetails, setApplicantDetails] = useState<ApplicantDetails>(
      {} as ApplicantDetails
    );

    const handleChangeApplicantDetails = useCallback(
        (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
          const { name, value } = event.target;
          setApplicantDetails((prevApplicantDetails) => ({
            ...prevApplicantDetails,
            [name]: value,
          }));
        },
        []
      );

      const handleUpdate = async () => {
        const response = await updateApplicantDetailsById(
          applicantloggedinDetails.applicantDetails._id!,
          applicantDetails
          
        );
      
        if (response?.status === 200) {
          applicantDispatch({ type: "updateDetails", payload: response?.data.data });
          hideModal("bio");
        }
      };

    return (

        <div id="bio" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm hidden">
            <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-xl shadow darkno:bg-gray-700">
                    <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto
                     inline-flex justify-center items-center darkno:hover:bg-gray-600 darkno:hover:text-white" data-modal-hide="authentication-modal"
                        onClick={() => { hideModal("bio") }}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 darkno:text-white">Write something<span className="text-blue-600"> about </span>you</h3>

                        <div className="space-y-6">
                            <input className="border-2 w-full" name="profile_bio" id="profile_bio"  
                            onChange={(e) => {
                        handleChangeApplicantDetails(e);
                      }}></input>
                            <button  onClick={handleUpdate} className="w-full inline-flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                            font-medium rounded-lg text-sm px-5 py-2.5 text-center" >
                                update your bio
                                <svg className="w-4 h-4 ms-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.153 15 19 8l-4.847-7H1l4.848 7L1 15h13.153Z" />
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};