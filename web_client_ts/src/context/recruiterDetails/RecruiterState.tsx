
import { recruiterContext } from './RecruiterContext';
import { useReducer, useState } from 'react';
import { recruiterLoggedInReducer } from '../../reducers/recruiterReducers/RecruiterReducers';
import { RecruiterDetails } from '../../@types/RecruiterDetails';

const RecruiterState = (props: any) => {    
    const [recruiterloggedinDetails, dispatch] = useReducer(recruiterLoggedInReducer, {
        isLoggedin: false,
        recruiterDetails: JSON.parse(localStorage.getItem("details")!) as RecruiterDetails
    });

    return (
        <div>
            <recruiterContext.Provider value={{ recruiterloggedinDetails, dispatch }}>
                {props.children}
            </recruiterContext.Provider>
        </div>
    )
}

export default RecruiterState
