/* eslint-disable import/no-anonymous-default-export */
import {
    SET_THEME
} from '../types.js';

export default (state, action) => {
    switch(action.type) {
        case SET_THEME:
            return {
                ...state,
                themeDark: action.payload
            }
        default:
            return state;
    }
}