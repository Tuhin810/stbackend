import { globalContext } from './GlobalContext';
import { useReducer } from 'react';
import { globalLoggedInReducer } from '../../reducers/globalReducers/GlobalReducers';import { GlobalLoggedInDetails } from '../../@types/interfaces/GlobalLoggedInDetails';

const GlobalState = (props: any) => {    
    const [globalLoggedIn,loggedIn]=useReducer(globalLoggedInReducer,{} as GlobalLoggedInDetails);
    return (
        <div>
            <globalContext.Provider value={{ globalLoggedIn,loggedIn }}>
                {props.children}
            </globalContext.Provider>
        </div>
    )
}

export default GlobalState

