import React, { useState, useContext, useCallback } from "react";
import { ApplicantDetails } from "../../../../../@types/ApplicantDetails";
import { updateApplicantDetailsById } from "../../../../../utils/apis/applicant/Applicant";
import { applicantContext } from "../../../../../context/applicantDetails/ApplicantContext";
import { MyProfileDetailsProps } from "../../../../../@types/interfaces/props/myProfileDetailsProps/MyProfileDetailsProps";
import { hideModal } from "../../../../../utils/commonFunctions/HandleModal";

export const AddProfileModal = ({ defaultApplicantDetails }: MyProfileDetailsProps) => {
  const { applicantDispatch } = useContext(applicantContext);
  const { applicantloggedinDetails } = useContext(applicantContext);
  const [applicantDetails, setApplicantDetails] = useState<ApplicantDetails>(
    {} as ApplicantDetails
  );
  const [unsavedCurrentAddress, setUnsavedCurrentAddress] = useState(
    defaultApplicantDetails?.current_address || ""
  );
  const [checked, setChecked] = useState(false);

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

  const handleCopyCurrentToPermanent = () => {

    if(!checked){
       // Copy the unsaved current address to permanent address
    setApplicantDetails((prevApplicantDetails) => ({
      ...prevApplicantDetails,
      permanent_address: unsavedCurrentAddress,
    }));
    // Update the 'checked' state to reflect the change
    setChecked(true);
    }else{
      setChecked(false)
    }
   
  };

  const handleUpdate = async () => {
    const response = await updateApplicantDetailsById(
      applicantloggedinDetails.applicantDetails._id!,
      applicantDetails
    );
    if (response?.status === 200) {
      applicantDispatch({ type: "updateDetails", payload: response?.data.data });
      hideModal("updateprofile");
    }
  };

  return (
    <div>
      <div
        id="updateprofile"
        className={` fixed inset-0 z-40 flex items-center hidden justify-center bg-black bg-opacity-50 backdrop-blur-sm`}
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-xl shadow ">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto
                         inline-flex justify-center items-center darkno:hover:bg-gray-600 darkno:hover:text-white"
              data-modal-hide="authentication-modal"
              onClick={() => {
                hideModal("updateprofile");
              }}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 darkno:text-white">
                Update your<span className="text-blue-600"> Profile </span>Details
              </h3>
              <div className="space-y-6">
                <div className="flex gap-2">
                  <div className="w-1/2">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 darkno:text-white"
                    >
                      First Name
                    </label>
                    <input
                      onChange={(e) => {
                        handleChangeApplicantDetails(e);
                      }}
                      type="text"
                      name="first_name"
                      id="first_name"
                      defaultValue={defaultApplicantDetails?.first_name}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="middle_name"
                      className="block mb-2 text-sm font-medium text-gray-900 darkno:text-white"
                    >
                      Middle Name
                    </label>
                    <input
                      onChange={(e) => {
                        handleChangeApplicantDetails(e);
                      }}
                      defaultValue={defaultApplicantDetails?.middle_name}
                      type="text"
                      name="middle_name"
                      id="middle_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-1/2">
                    <label
                      htmlFor="last_name"
                      className="block  text-sm font-medium text-gray-900 darkno:text-white"
                    >
                      last Name
                    </label>
                    <input
                      defaultValue={defaultApplicantDetails?.last_name}
                      onChange={(e) => {
                        handleChangeApplicantDetails(e);
                      }}
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="gender" className="block  text-sm font-medium text-gray-900 ">
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="w-full px-4 py-2  bg-gray-50 focus:outline-none border border-gray-300 text-gray-900
                                      rounded-lg"
                      onChange={(e) => {
                        handleChangeApplicantDetails(e);
                      }}
                    >
                      <option value="others" defaultChecked={defaultApplicantDetails?.gender === "others"}>
                        others
                      </option>
                      <option value="non_binary" defaultChecked={defaultApplicantDetails?.gender === "non_binary"}>
                        Female
                      </option>
                      <option value="male" defaultChecked={defaultApplicantDetails?.gender === "male"}>
                        Male
                      </option>
                      <option value="female" defaultChecked={defaultApplicantDetails?.gender === "female"}>
                        Female
                      </option>
                    </select>
                  </div>
                </div>
                <div>
        <label htmlFor="current_address" className="block text-sm font-medium text-gray-900">
          Current Address
        </label>
        <input
          onChange={(e) => {
            handleChangeApplicantDetails(e);
            // Update the unsavedCurrentAddress when the user types in the input
            setUnsavedCurrentAddress(e.target.value);
          }}
          defaultValue={unsavedCurrentAddress}
          type="text"
          name="current_address"
          id="current_address"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="St. Pauls School"
        />
      </div>
      <div className="">
        <label htmlFor="permanent_address" className="block mb-2 text-sm font-medium text-gray-900">
          Permanent Address
        </label>

        <div className="flex mb-2">
          <button onClick={handleCopyCurrentToPermanent} className="flex gap-2 items-center">

            {
              (!checked)?<><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#dfe3e6" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg></>:
<><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#03b1fc" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg></>
            }
          Same as current address
          </button>
        </div>

        <div className="">
          <input
            onChange={(e) => {
              handleChangeApplicantDetails(e);
              
            }}
            value={checked ? unsavedCurrentAddress : applicantDetails.permanent_address}
            type="text"
            name="permanent_address"
            id="permanent_address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="St. Pauls School"
          />
        </div>
      </div>
                <div className="flex gap-2">
                  <div>
                    <label htmlFor="phone" className="block  text-sm font-medium text-gray-900 darkno:text-white">
                      Contact number
                    </label>
                    <input
                      onChange={(e) => handleChangeApplicantDetails(e)}
                      defaultValue={defaultApplicantDetails?.phone}
                      type="number"
                      name="phone"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="secondary education"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="birthday" className="block  text-sm font-medium text-gray-900 ">
                      Birth Year
                    </label>
                    <input
                      onChange={(e) => handleChangeApplicantDetails(e)}
                      defaultValue={defaultApplicantDetails?.birth_year}
                      type="text"
                      name="birthday"
                      id="birthday"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="2000"
                    />
                  </div>
                </div>
                <button
                  onClick={handleUpdate}
                  className="w-full inline-flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                                font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Update Profile
                  <svg
                    className="w-4 h-4 ms-2 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.153 15 19 8l-4.847-7H1l4.848 7L1 15h13.153Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div id="updateprofile" className={` fixed inset-0 z-40 flex items-center hidden justify-center bg-black bg-opacity-50 backdrop-blur-sm`}>
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-xl shadow ">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto
                         inline-flex justify-center items-center darkno:hover:bg-gray-600 darkno:hover:text-white" data-modal-hide="authentication-modal"
                            onClick={() => { hideModal("updateprofile") }} >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 darkno:text-white">Update your<span className="text-blue-600"> Profile </span>Details</h3>
                            <div className="space-y-6">
                                <div className="flex gap-2">
                                    <div className="w-1/2">
                                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 darkno:text-white">First Name</label>
                                        <input
                                            onChange={(e) => { handleChangeApplicantDetails(e) }}
                                            type="text" name="first_name" id="first_name" defaultValue={defaultApplicantDetails?.first_name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            required />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="middle_name" className="block mb-2 text-sm font-medium text-gray-900 darkno:text-white">Middle Name</label>
                                        <input
                                            onChange={(e) => { handleChangeApplicantDetails(e) }} defaultValue={defaultApplicantDetails?.middle_name}
                                            type="text" name="middle_name" id="middle_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            required />
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-1/2">
                                        <label htmlFor="last_name" className="block  text-sm font-medium text-gray-900 darkno:text-white">last Name</label>
                                        <input
                                            defaultValue={defaultApplicantDetails?.last_name}
                                            onChange={(e) => { handleChangeApplicantDetails(e) }}
                                            type="text" name="last_name" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            required />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="gender" className="block  text-sm font-medium text-gray-900 ">Gender</label>
                                        <select
                                            id="gender" name="gender" className="w-full px-4 py-2  bg-gray-50 focus:outline-none border border-gray-300 text-gray-900
                                      rounded-lg"  onChange={(e) => { handleChangeApplicantDetails(e) }}>
                                            <option value="male" defaultChecked={defaultApplicantDetails?.gender === "male"}>Male</option>
                                            <option value="female" defaultChecked={defaultApplicantDetails?.gender === "female"}>Female</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="current_assress" className="block  text-sm font-medium text-gray-900 ">Current Address</label>
                                    <input
                                        onChange={(e) => { handleChangeApplicantDetails(e) }}
                                        defaultValue={defaultApplicantDetails?.current_address}
                                        type="text" name="current_address" id="current_address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="St. Pauls School" />
                                </div>
                                <div className="">
                                    <label htmlFor="inst_name" className="block mb-2 text-sm font-medium text-gray-900 ">Permanant Address</label>

                                    <div className="flex mb-2">
                                        <input type="checkbox " /> <p className="text-gray-600 font-semibold text-xs ml-2">Same as Current Address</p>
                                    </div>
                                    <div className="">
                                        <input
                                            onChange={(e) => { handleChangeApplicantDetails(e) }}
                                            defaultValue={defaultApplicantDetails?.permanent_address}
                                            type="text" name="permanent_address" id="permanent_address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="St. Pauls School" /></div>

                                </div>
                                <div className="flex gap-2">
                                    <div>
                                        <label htmlFor="phone" className="block  text-sm font-medium text-gray-900 darkno:text-white">Contact number</label>
                                        <input
                                            onChange={(e) => handleChangeApplicantDetails(e)}
                                            defaultValue={defaultApplicantDetails?.phone}

                                            type="number" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            placeholder="secondary education" required />
                                    </div>
                                    <div>
                                        <label htmlFor="inst_name" className="block  text-sm font-medium text-gray-900 ">Birth Year</label>
                                        <input
                                            onChange={(e) => handleChangeApplicantDetails(e)}
                                            defaultValue={defaultApplicantDetails?.birth_year}
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
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.153 15 19 8l-4.847-7H1l4.848 7L1 15h13.153Z" />
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div></div></div> */}
    </div>
  );
};