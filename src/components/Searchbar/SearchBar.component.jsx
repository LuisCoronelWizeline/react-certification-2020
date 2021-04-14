import React, { useState, useContext } from 'react'
import VideosContext from '../../context/videos/videosContext';

const SearchBar  = () => {

    const videosContext = useContext(VideosContext);

    const [text, setText] = useState(''); // Local state to handle the text inside the search input

    const onChangeSearch = e => {
        setText(e.target.value);
        console.log('rigth now the placeholder should say: ' + text);
    }

    const onSubmitSearch = e => {
        e.preventDefault();
        console.log('the search text sent was: ' + text);
        setText('');
        videosContext.searchVideos(text);
    }

    return (
        <div>
            <nav>
                <div className="nav-wrapper red">
                    <form onSubmit={onSubmitSearch}>
                        <div className="input-field">
                            <input data-testid="search-video-field" id="search" type="search" value={text} required onChange={onChangeSearch}/>
                            <label className="label-icon" htmlFor="search">
                                <i data-testid="magnifying-glass-icon" className="material-icons" style={{color: "red accent-4"}}>search</i>
                            </label>
                            <i data-testid="close-icon" className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>            
        </div>
    )
}

export default SearchBar;
