import React, { useReducer } from 'react';
import UserContext from './userContext';
import UserReducer from './userReducer';
import {
    SET_THEME
} from '../types';

const UserState = props => {
    const initialState = {
        themeDark: false
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);
    
    const setTheme = async (theme) => {
        console.log(theme);
        dispatch({
            type: SET_THEME,
            payload: theme
        });
    }

    return <UserContext.Provider 
        value = {{
            themeDark: state.themeDark,
            setTheme
        }}
        >
        {props.children}
    </UserContext.Provider>
}

export default UserState;
