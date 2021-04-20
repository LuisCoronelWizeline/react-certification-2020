import React, { useReducer } from 'react';
import UserContext from './userContext';
import UserReducer from './userReducer';

import loginAPI from '../../login.api.js';

import {
    SET_THEME,
    USER_LOGIN,
    FAVORITE_VIDEOS
} from '../types';

const UserState = props => {
    const initialState = {
        themeDark: false,
        userLogged: {},
        favoriteVideos: []
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);
    
    const setTheme = async (theme) => {
        console.log(theme);
        dispatch({
            type: SET_THEME,
            payload: theme
        });
    }

    const loginTheUser = async (user, password) => {
        console.log('This is the user to be logged: ' + user);
        console.log(`This si the password of the user to be logger: ${password}`);
        // const userLogged = await loginAPI(user, password);
        // console.log(`This is what loginApi returns: ${userLogged}`);
        dispatch({
            type: USER_LOGIN,
            payload: await loginAPI(user, password)
        });
    }

    const logoutUser = async () => {
        dispatch({
            type: USER_LOGIN,
            payload: {}
        });
    }

    const addFavoriteVideos = async (video) => {
        dispatch({
            type: FAVORITE_VIDEOS,
            payload: state.favoriteVideos.concat([video])
        });
    }

    return <UserContext.Provider 
        value = {{
            themeDark: state.themeDark,
            userLogged: state.userLogged,
            favoriteVideos: state.favoriteVideos,
            setTheme,
            loginTheUser,
            logoutUser,
            addFavoriteVideos
        }}
        >
        {props.children}
    </UserContext.Provider>
}

export default UserState;
