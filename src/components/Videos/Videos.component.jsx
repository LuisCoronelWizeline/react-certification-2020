import React, { useEffect, useContext } from 'react';
import VideosContext from '../../context/videos/videosContext';
import VideoCard from '../VideoCard/VideoCard.component';

const Videos = () => {

  const videosContext = useContext(VideosContext);

  useEffect(() => {
    videosContext.getVideos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row">
      {videosContext.videos.map((video) => (
        <div className="container">
          <div className="col s12 m4">
            <VideoCard video={video} key={video.id.videoId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
