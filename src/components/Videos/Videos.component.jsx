import React, { useEffect, useContext } from 'react';
import UserContext from '../../context/user/userContext';
import VideosContext from '../../context/videos/videosContext';
import VideoCard from '../VideoCard/VideoCard.component';

const Videos = () => {

  const userContext = useContext(UserContext);
  const videosContext = useContext(VideosContext);

  useEffect(() => {
    videosContext.getVideos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div data-testid="home-background" className="row" style={userContext.themeDark ? {backgroundColor: "black"} : {backgroundColor: "withe"}}>
      {videosContext.videos.map((video, index) => (
        <div key={index} className="container">
          <div className="col s12 m4">
            <VideoCard video={video} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
