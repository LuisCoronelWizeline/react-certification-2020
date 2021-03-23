import React, { useReducer } from 'react';
import VideosContext from './videosContext';
import VideosReducer from './videosReducer';
import {
    GET_VIDEOS,
    SET_VIDEO
} from '../types';

import videosYoutube from '../../data/viedosYoutube.json';

const VideosState = props => {
    const initialState = {
        videos: [],
        video: {}
    }

    const [state, dispatch] = useReducer(VideosReducer, initialState);

    // get videos

// const getVideos = async () => {
//   console.log(process.env.API_KEY)
//   const res = await axios.get(
//     `https://www.googleapis.com/youtube/v3/search?key=AIzaSyC7G_5ZgK70ajrU78JQiiaEMTB1-8I_tto&part=snippet&maxResults=3&q=luis coronel`
//   );
//   //setState({videos: res.data});
//   setVideos(viedosYoutube.items);
// };

    const getVideos = async () => {
        dispatch({
            type: GET_VIDEOS,
            payload: videosYoutube.items
        });
    };
    
    const setVideo = async (clickedVideo) => {
        console.log(clickedVideo);
        dispatch({
            type: SET_VIDEO,
            payload: clickedVideo
        });
    }

    return <VideosContext.Provider 
        value = {{
            videos: state.videos,
            video: state.video,
            getVideos,
            setVideo
        }}
        >
        {props.children}
    </VideosContext.Provider>
}

export default VideosState;
