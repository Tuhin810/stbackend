import { useState,useContext, useEffect,useCallback } from "react";
import { ApplicantDetails } from "../../../../../@types/ApplicantDetails";
import {  updateApplicantDetailsById } from "../../../../../utils/apis/applicant/Applicant";
import { applicantContext } from "../../../../../context/applicantDetails/ApplicantContext";
import { MyProfileDetailsProps } from "../../../../../@types/interfaces/props/myProfileDetailsProps/MyProfileDetailsProps";
import { hideModal } from "../../../../../utils/commonFunctions/HandleModal"

export const AddProfileModal = ({ first_name,middle_name, last_name, phone, current_address,permanent_address, birthday }: MyProfileDetailsProps) => {

    const {applicantDispatch} = useContext(applicantContext);
    const {applicantloggedinDetails} = useContext(applicantContext);
    const [applicantDetails,setApplicantDetails]=useState<ApplicantDetails>({} as ApplicantDetails);

    const handleChangeApplicantDetails = useCallback((event:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value}=event.target;
        setApplicantDetails(Object.assign({},applicantDetails,{[name]:value}));
    },[applicantDetails]);

    const handleUpdate = async() =>{
        const response = await updateApplicantDetailsById(applicantloggedinDetails.applicantDetails._id!,applicantDetails);
        if(response?.status===200){
            applicantDispatch({type:"updateDetails",payload:response?.data.applicant})
        }
    }
  return (
   <div>
  
  <div id="updateprofile"  className={ ` fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm`}>
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-xl shadow ">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto
                         inline-flex justify-center items-center darkno:hover:bg-gray-600 darkno:hover:text-white" data-modal-hide="authentication-modal"
                         onClick={() => { hideModal("updateprofile") }} >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 darkno:text-white">Update your<span className="text-blue-600"> Profile </span>Details</h3>
                            <div className="space-y-6">
                                <div className="flex gap-2">
                                  <div>
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 darkno:text-white">First Name</label>
                                    <input
                                    onChange={(e)=>{handleChangeApplicantDetails(e)}} 
                                     type="text" name="first_name" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                     placeholder="secondary education" required />
                                </div>
                                <div>
                                    <label htmlFor="Middlename" className="block mb-2 text-sm font-medium text-gray-900 darkno:text-white">Middle Name</label>
                                    <input
                                    onChange={(e)=>{handleChangeApplicantDetails(e)}} value={middle_name}
                                     type="text" name="Middlename" id="Middlename" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                     placeholder="secondary education" required />
                                </div>  
                                </div>
                                <div className="flex gap-2">
                                     <div>
                                    <label htmlFor="Lastname" className="block  text-sm font-medium text-gray-900 darkno:text-white">last Name</label>
                                    <input
                                    onChange={(e)=>{handleChangeApplicantDetails(e)}} 
                                    value={last_name}
                                    type="text" name="Lastname" id="Lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                     placeholder="secondary education" required />
                                </div>
                                <div>
                                    <label htmlFor="inst_name" className="block  text-sm font-medium text-gray-900 ">Gender</label>
                                    <select
                                    
                                     id="gender" name="gender" className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none border border-gray-300 text-gray-900 rounded-lg" >
                                          <option value="unregistered">Male</option>
                                          <option value="pvt">Female</option>
                                          <option value="opc">Don't want to share</option>

                </select>
                                      </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="inst_name" className="block  text-sm font-medium text-gray-900 ">Current Address</label>
                                    <input 
                                    onChange={(e)=>{handleChangeApplicantDetails(e)}}
                                    value={current_address}
                                    type="text" name="current_address" id="current_address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="St. Pauls School" />
                                </div>
                                <div className="">
                                <label htmlFor="inst_name" className="block mb-2 text-sm font-medium text-gray-900 ">Permanant Address</label>
                                
                                    <div className="flex mb-2">
                                        <input type="checkbox" /> <p className="text-gray-600 font-semibold text-xs ml-2">Same as Current Address</p>
                                    </div>
                                    <div className="">
                                    <input
                                    onChange={(e)=>{handleChangeApplicantDetails(e)}}
                                    value={permanent_address}
                                     type="text" name="permanent_address" id="permanent_address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="St. Pauls School" /></div>
                                    
                                </div>
                                <div className="flex gap-2">
                                     <div>
                                    <label htmlFor="phone" className="block  text-sm font-medium text-gray-900 darkno:text-white">Contact number</label>
                                    <input 
                                    onChange={(e) => handleChangeApplicantDetails(e)}
                                    value={phone}

                                    type="number" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                     placeholder="secondary education" required />
                                </div>
                                <div>
                                    <label htmlFor="inst_name" className="block  text-sm font-medium text-gray-900 ">Birth Year</label>
                                    <input 
                                    onChange={(e) => handleChangeApplicantDetails(e)}
                                    value={birthday}
                                     type="text" name="birthday" id="birthday" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="2000" />
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
