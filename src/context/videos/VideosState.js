import axios from 'axios';
import React, { useReducer } from 'react';
import VideosContext from './videosContext';
import VideosReducer from './videosReducer';
import {
    GET_VIDEOS,
    GET_RELATED_VIDEOS,
    SET_VIDEO,
} from '../types';

// import videosYoutube from '../../data/viedosYoutube.json';

const VideosState = props => {
    const initialState = {
        videos: [],
        relatedVideos: [],
        video: {}
    }

    const [state, dispatch] = useReducer(VideosReducer, initialState);

    const getVideos = async () => {
        console.log(process.env.API_KEY)
        const res = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&maxResults=30&q=wizeline`
        );

        dispatch({
            type: GET_VIDEOS,
            payload: res.data.items
        });
    };

    // This is to get the videos from the data forlder instead the youtube API
    // const getVideos = async () => {
    //     dispatch({
    //         type: GET_VIDEOS,
    //         payload: videosYoutube.items
    //     });
    // };

    const getRelatedVideos = async (videoId) => {
        console.log('related video id: ' + videoId);
        console.log(process.env.API_KEY)
        const res = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&relatedToVideoId=${videoId}&type=video`
        );

        dispatch({
            type: GET_RELATED_VIDEOS,
            payload: res.data.items
        });
    };
    
    const searchVideos = async (searchWord) => {
        console.log(searchWord);
        console.log(process.env.API_KEY)
        const res = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&maxResults=30&q=${searchWord}`
        );

        dispatch({
            type: GET_VIDEOS,
            payload: res.data.items
        });
    }

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
            relatedVideos: state.relatedVideos,
            video: state.video,
            getVideos,
            getRelatedVideos,
            setVideo,
            searchVideos
        }}
        >
        {props.children}
    </VideosContext.Provider>
}

export default VideosState;
