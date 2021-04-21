import React, { useContext } from 'react';
import Navbar from '../../../components/Navbar/Navbar.component';
import UserContext from '../../../context/user/userContext';
import VideoCard from '../../VideoCard/VideoCard.component';;

function FavoritesView() {

    const userContext = useContext(UserContext);

    return (
        <>
            <Navbar />
            <div data-testid="home-background" className="row" style={userContext.themeDark ? {backgroundColor: "black"} : {backgroundColor: "withe"}}>
                {userContext.favoriteVideos.map((video, index) => (
                    <div key={index} className="container">
                        <div className="col s12 m4">
                            <VideoCard video={video} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FavoritesView;
