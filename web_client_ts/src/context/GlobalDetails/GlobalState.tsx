import { useState } from 'react';
import { globalContext } from './GlobalContext';

const GlobalState = (props: any) => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [userType, setUserType] = useState<string>("");
    const loggedIn = (userType: string) => {
        setUserType(userType);
        setIsLoggedIn(true);
    }
    const loggedOut = () =>{
        setUserType("");
        setIsLoggedIn(false);
    }

    return (
        <div>
            <globalContext.Provider value={{ userType,isLoggedIn,loggedIn,loggedOut }}>
                {props.children}
            </globalContext.Provider>
        </div>
    )
}

export default GlobalState
