import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import VideosContext from '../../context/videos/videosContext';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #ffe4e4;
  border-radius: 10px;
`;

const VideoCard = (props) => {

  const videosContext = useContext(VideosContext);

  const onClickPlay = e => {
    console.log('le diste play al video con id: ' + props.video.id.videoId);
    videosContext.setVideo(props.video);
  };

  return (
    <div data-testid="card-item" className="card large hoverable">
      <div className="card-image" style={cardImage}>
        <img alt="" src={props.video.snippet.thumbnails.high.url} />
        <Link to='/videoDetail'>
          <i href="#1" className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons" onClick={onClickPlay}>play_arrow</i>
          </i>
        </Link>
      </div>
      <div className="card-content">
        <Card>
          <span className="card-title">{props.video.snippet.title}</span>
        </Card>
        <p>ID:{props.video.id.videoId}</p>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

const cardImage = {
  overflow: "visible" // This solve the problem with the play button half hidden
}

export default VideoCard;
