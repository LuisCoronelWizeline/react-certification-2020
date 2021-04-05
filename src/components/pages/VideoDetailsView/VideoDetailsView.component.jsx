import React, { Fragment, useContext, useEffect } from 'react'
import VideosContext from '../../../context/videos/videosContext';
import VideoCardDetails from '../../../components/VideoCardDetails/VideoCardDetails.component.jsx'

const VideoDetailsView = () => {

    const videosContext = useContext(VideosContext);
    
    useEffect(() => {
        videosContext.getRelatedVideos(videosContext.video.id.videoId);
        console.log('This is the id to search related videos: ' + videosContext.video.id.videoId);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <Fragment>
            <div className='container'>
                <VideoCardDetails video={videosContext.video} />
            </div>
            <blockquote>
              Related videos.
            </blockquote>
            <div className="row">
                {videosContext.relatedVideos.map((relatedVideo) => (
                    <div className="container">
                        <div className="col s12 m4">
                            <iframe title="video" src={`//www.youtube.com/embed/${relatedVideo.id.videoId}?rel=0`} allowfullscreen></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default VideoDetailsView
