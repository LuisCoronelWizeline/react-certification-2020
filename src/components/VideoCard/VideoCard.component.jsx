import React from 'react';

const VideoCard = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <img alt="" src={props.video.snippet.thumbnails.high.url} />
        <span className="card-title">{props.video.snippet.title}</span>
        <a href="#1" className="btn-floating halfway-fab waves-effect waves-light red">
          <i className="material-icons">add</i>
        </a>
      </div>
      <div className="card-content">
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
