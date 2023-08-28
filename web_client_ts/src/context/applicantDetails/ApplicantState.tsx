

import { useReducer, useState } from 'react';
import { applicantLoggedInReducer } from '../../reducers/applicantReducers/ApplicantReducer';
import { applicantContext } from './ApplicantContext';
import { ApplicantDetails } from '../../@types/ApplicantDetails';


const ApplicantState = (props: any) => {    
    const [applicantloggedinDetails, applicantDispatch] = useReducer(applicantLoggedInReducer, {
        isLoggedin: false,
        applicantDetails: JSON.parse(localStorage.getItem("details")!) as ApplicantDetails
    });

    return (
        <div>
            <applicantContext.Provider value={{ applicantloggedinDetails, applicantDispatch }}>
                {props.children}
            </applicantContext.Provider>
        </div>
    )
}

export default ApplicantState
