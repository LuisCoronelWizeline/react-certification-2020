/* eslint-disable import/no-anonymous-default-export */
import {
    SET_THEME,
    USER_LOGIN,
    FAVORITE_VIDEOS
} from '../types.js';

export default (state, action) => {
    switch(action.type) {
        case SET_THEME:
            return {
                ...state,
                themeDark: action.payload
            }
        case USER_LOGIN:
            return {
                ...state,
                userLogged: action.payload
            }
        case FAVORITE_VIDEOS:
            return {
                ...state,
                favoriteVideos: action.payload
            }    
        default:
            return state;
    }
}