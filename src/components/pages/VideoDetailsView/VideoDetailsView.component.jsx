import React, { useContext, useEffect } from 'react'
import VideosContext from '../../../context/videos/videosContext';
import UserContext from '../../../context/user/userContext';
import VideoCardDetails from '../../../components/VideoCardDetails/VideoCardDetails.component.jsx'

const VideoDetailsView = () => {

    const videosContext = useContext(VideosContext);
    const userContext = useContext(UserContext);

    useEffect(() => {
        videosContext.getRelatedVideos(videosContext.video.id.videoId);
        console.log('This is the id to search related videos: ' + videosContext.video.id.videoId);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div style={userContext.themeDark ? {backgroundColor: "black"} : {backgroundColor: "withe"}}>
            <div className='container'>
                <VideoCardDetails video={videosContext.video} />
            </div>
            <h1 style={{color: "red"}}>
              Related videos...
            </h1>
            <div className="row">
                {videosContext.relatedVideos.map((relatedVideo, index) => (
                    <div key={index} className="container">
                        <div className="col s12 m4">
                            <iframe title="video" src={`//www.youtube.com/embed/${relatedVideo.id.videoId}?rel=0`} allowFullScreen></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VideoDetailsView
