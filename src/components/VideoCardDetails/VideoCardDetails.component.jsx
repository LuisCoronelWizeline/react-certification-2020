import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/userContext';

const VideoCardDetails = (props) => {

    const userContext = useContext(UserContext);

    const onClickAddFavorites = () => {
        userContext.addFavoriteVideos(props.video);
    }

    return (
        <div className="card">
            <div className="card-image">
                <div data-testid="video-container" class="video-container">
                    <iframe title="video" src={`//www.youtube.com/embed/${props.video.id.videoId}?rel=0`} allowfullscreen></iframe>
                </div>
                <span className="card-title">{props.video.snippet.title}</span>
            </div>
            <div className="card-content">
                <p>{props.video.snippet.description}</p>
            </div>
            <Link to='/'>
                <div className="card-action">
                    <a href="#1" onClick={onClickAddFavorites} >+ Add to favorites</a>
                </div>
            </Link>
        </div>
    )
}

export default VideoCardDetails;
