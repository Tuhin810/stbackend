
import { recruiterContext } from './RecruiterContext';
import { useReducer } from 'react';
import { recruiterLoggedInReducer } from '../../reducers/recruiterReducers/RecruiterReducers';
import { RecruiterLoggedInDetails } from '../../@types/interfaces/RecruiterLoggedInDetails';

const RecruiterState = (props: any) => {    
    const [recruiterloggedinDetails,dispatch]=useReducer(recruiterLoggedInReducer,{} as RecruiterLoggedInDetails);
    return (
        <div>
            <recruiterContext.Provider value={{ recruiterloggedinDetails,dispatch }}>
                {props.children}
            </recruiterContext.Provider>
        </div>
    )
}

export default RecruiterState
