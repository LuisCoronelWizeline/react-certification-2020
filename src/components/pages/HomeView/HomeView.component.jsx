import React, { Fragment } from 'react'

import Navbar from '../../../components/Navbar/Navbar.component.jsx';
import Searchbar from '../../../components/Searchbar/SearchBar.component.jsx';
import Footer from '../../../components/Footer/Footer.component.jsx';
import Videos from '../../../components/Videos/Videos.component.jsx';

const HomeView = () => {
    return (
        <Fragment>
            <Navbar />
            <Searchbar />
            <Videos />
            <Footer />
        </Fragment>
    )
}

export default HomeView;
