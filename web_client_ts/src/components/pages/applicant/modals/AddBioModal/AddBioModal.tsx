import React, { useState, useContext, useCallback } from "react";
import { ApplicantDetails } from "../../../../../@types/ApplicantDetails";
import { updateApplicantDetailsById } from "../../../../../utils/apis/applicant/Applicant";
import { applicantContext } from "../../../../../context/applicantDetails/ApplicantContext";
import { MyProfileDetailsProps } from "../../../../../@types/interfaces/props/myProfileDetailsProps/MyProfileDetailsProps";
import { hideModal } from "../../../../../utils/commonFunctions/HandleModal";

export const AddBioModal = () => {




    return (
       <div id="bio" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm hidden">
        <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-xl shadow darkno:bg-gray-700">
            handleChangeEducationDetails</div>
        </div>
       </div>


     
    
  );
};