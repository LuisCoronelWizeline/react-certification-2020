import React from 'react'

import Navbar from '../Navbar/Navbar.component.jsx';
import Footer from '../Footer/Footer.component.jsx';
import Videos from '../Videos/Videos.component.jsx';

const HomeView = () => {
    return (
        <>
            <Navbar />
            <Videos />
            <Footer />
        </>
    )
}

export default HomeView;
