import React from 'react'

const VideoCardDetails = (props) => {
    return (
        <div class="card">
            <div class="card-image">
                <img alt='' src={props.video.snippet.thumbnails.high.url}/>
                <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
                <a href="#">This is a link</a>
            </div>
        </div>
    )
}

export default VideoCardDetails;
