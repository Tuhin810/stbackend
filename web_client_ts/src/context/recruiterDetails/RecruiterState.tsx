
import { recruiterContext } from './RecruiterContext';
import { RecruiterSignupDetails } from '../../@types/RecruiterSignupDetails';
import { useState } from 'react';

const RecruiterState = (props: any) => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [recruiterDetails, setRecruiterDetails] = useState<RecruiterSignupDetails>({} as RecruiterSignupDetails);

    const loggedIn = (recruiterDetails: RecruiterSignupDetails) => {
        setRecruiterDetails(recruiterDetails);
        setIsLoggedIn(true);
    }

    const loggedOut = () =>{
        setRecruiterDetails({} as RecruiterSignupDetails);
        setIsLoggedIn(false);
    }

    return (
        <div>
            <recruiterContext.Provider value={{ recruiterDetails,isLoggedIn, loggedIn,loggedOut }}>
                {props.children}
            </recruiterContext.Provider>
        </div>
    )
}

export default RecruiterState
