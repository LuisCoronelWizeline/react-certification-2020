/* eslint-disable import/no-anonymous-default-export */
import {
    GET_VIDEOS,
    SET_VIDEO
} from '../types.js';

export default (state, action) => {
    switch(action.type) {
        case GET_VIDEOS:
            return {
                ...state,
                videos: action.payload
            }
        case SET_VIDEO:
            return {
                ...state,
                video: action.payload
            }
        default:
            return state;
    }
}