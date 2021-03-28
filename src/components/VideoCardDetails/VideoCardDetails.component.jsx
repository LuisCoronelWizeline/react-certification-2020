import React from 'react'
import { Link } from 'react-router-dom';

const VideoCardDetails = (props) => {


    return (
        <div className="card">
            <div className="card-image">
                <div class="video-container">
                    <iframe title="video" src={`//www.youtube.com/embed/${props.video.id.videoId}?rel=0`} allowfullscreen></iframe>
                </div>
                <span className="card-title">{props.video.snippet.title}</span>
            </div>
            <div className="card-content">
                <p>{props.video.snippet.description}</p>
            </div>
            <Link to='/'>
                <div className="card-action">
                    <a href="#1">Go back </a>
                </div>
            </Link>
        </div>
    )
}

export default VideoCardDetails;
