import React, { useState } from 'react';
import { userContext } from './UserContext';
import { UserDetails } from '../../@types/UserDetails';
import { DefaultUserDetails } from '../../defaultState/DefaultUserDetails';

const UserState = (props: any) => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [userDetails, setUserDetails] = useState<UserDetails>(DefaultUserDetails);

    const loggedIn = (userDetails: UserDetails) => {
        setUserDetails(userDetails);
        setIsLoggedIn(true);
    }

    const loggedOut = () =>{
        setUserDetails(DefaultUserDetails);
        setIsLoggedIn(false);
    }

    return (
        <div>
            <userContext.Provider value={{ userDetails,isLoggedIn, loggedIn,loggedOut }}>
                {props.children}
            </userContext.Provider>
        </div>
    )
}

export default UserState
