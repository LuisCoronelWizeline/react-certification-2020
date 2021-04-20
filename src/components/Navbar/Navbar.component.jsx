import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.styles.css';
import UserContext from '../../context/user/userContext.js';
import DropdownMenu from '../DropdownMenu/DropdownMenu.component.jsx';
import M from 'materialize-css/dist/js/materialize.min';

const Navbar = () => {

const userContext = useContext(UserContext);

useEffect(() => {
    // Init materialize sidenav element
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});  
    //Init drop down menu
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {});
}, []);
  
const onChangeTheme = e => {
    console.log('le diste click al theme');
    console.log(userContext.themeDark);
    userContext.setTheme(!userContext.themeDark);
};
    
    return (
        <>
            <div className="navbar-fixed">
            <nav className="red accent-4 navbar-fixed">
                <div className="row">
                    <div className='col s9'>
                        <a href="#1">
                            <i data-testid="menu-icon" className="material-icons sidenav-trigger" data-target="slide-out">menu</i>
                        </a>
                    </div>
                    <div className='col s2'>
                        <div className="switch">
                            <label>
                                Light
                                <input data-testid="theme-switch" type="checkbox" checked={userContext.themeDark ? "checked" : ""} onChange={onChangeTheme}/>
                                <span className="lever" />
                                Dark
                            </label>
                        </div>
                    </div>
                    <div className='col s1 center-align'>
                        <DropdownMenu />
                    </div>
                </div>
            </nav>
            </div>
            <ul id="slide-out" className="sidenav">
                <Link to='/'>
                    <li><a href="#!">Home</a></li>
                </Link>
                <li><div className="divider"></div></li>
                {
                    userContext.userLogged.name === 'LuisCoronel' &&
                    <Link to='/favorites'>
                        <li><a className="waves-effect" href="#!">Favorites</a></li>
                    </Link>
                }
            </ul>
        </>
    );
};

export default Navbar;
