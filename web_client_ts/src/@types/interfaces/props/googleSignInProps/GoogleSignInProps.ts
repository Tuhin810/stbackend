// setLoading,applicantDetails,setHasError,setErrorMessage

import React from "react";
import { ApplicantDetails } from "../../../ApplicantDetails";

export interface GoogleSignInProps{
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    applicantDetails: ApplicantDetails,
    setHasError:  React.Dispatch<React.SetStateAction<boolean>>,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
}