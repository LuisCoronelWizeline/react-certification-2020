import React, { Fragment, useContext } from 'react'
import VideosContext from '../../../context/videos/videosContext';
import VideoCardDetails from '../../../components/VideoCardDetails/VideoCardDetails.component.jsx'

const VideoDetailsView = () => {

    const videosContext = useContext(VideosContext);

    return (
        <Fragment>
            <div className='container'>
                <VideoCardDetails video={videosContext.video} />
            </div>
        </Fragment>
    )
}

export default VideoDetailsView
