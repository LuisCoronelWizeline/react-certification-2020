import React from 'react';

const VideoCard = (props) => {
  return (
    <div data-testid="card-item" className="card">
      <div className="card-image">
        <img alt="" src={props.video.snippet.thumbnails.high.url} />
        <a href="#1" className="btn-floating halfway-fab waves-effect waves-light red">
          <i className="material-icons">play_arrow</i>
        </a>
      </div>
      <div className="card-content">
        <span className="card-title">{props.video.snippet.title}</span>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
