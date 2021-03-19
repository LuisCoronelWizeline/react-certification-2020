import React from 'react';

import styled from 'styled-components';

const Card = styled.div`
  background-color: #ffe4e4;
  border-radius: 10px;
`;

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
        <Card>
          <span className="card-title">{props.video.snippet.title}</span>
        </Card>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
