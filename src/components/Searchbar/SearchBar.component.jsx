import React, { useState } from 'react'

const SearchBar  = () => {

    const [text, setText] = useState('');

    const onChangeSearch = e => {
        setText(e.target.value);
        console.log('ahorita el texto es ' + text);
    }

    const onSubmitSearch = e => {
        e.preventDefault();
        console.log('se envio para buscar ' + text);
        setText('');
    }

    return (
        <div>
            <nav>
                <div className="nav-wrapper red lighten-2">
                    <form onSubmit={onSubmitSearch}>
                        <div className="input-field">
                            <input id="search" type="search" value={text} required onChange={onChangeSearch}/>
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i data-testid="search-icon" className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>            
        </div>
    )
}

export default SearchBar
