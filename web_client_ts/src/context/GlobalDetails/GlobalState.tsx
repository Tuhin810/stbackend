import { globalContext } from './GlobalContext';
import { useReducer } from 'react';
import { globalLoggedInReducer } from '../../reducers/globalReducers/GlobalReducers'; 

const GlobalState = (props: any) => {
    const [globalLoggedIn, loggedIn] = useReducer(globalLoggedInReducer, {
        userType: localStorage.getItem("userType")!,
        isLoggedIn: false
    });
    return (
        <div>
            <globalContext.Provider value={{ globalLoggedIn, loggedIn }}>
                {props.children}
            </globalContext.Provider>
        </div>
    )
}

export default GlobalState

