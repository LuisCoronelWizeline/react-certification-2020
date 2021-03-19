import React from 'react';
import videos from '../../data/videos.json';
import VideoCard from '../VideoCard/VideoCard.component';

const Videos = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s3"></div>
        <div className="col s6">
          {videos.items.map((video) => (
            <VideoCard key={video.etag} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
