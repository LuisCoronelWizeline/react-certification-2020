import React from 'react';
import videos from '../../data/videos.json';
import VideoCard from '../VideoCard/VideoCard.component';

const Videos = () => {
  return (
    <div className="row">
      {videos.items.map((video) => (
        <div className="container">
          <div className="col s12 m4">
            <VideoCard key={video.etag} video={video} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
