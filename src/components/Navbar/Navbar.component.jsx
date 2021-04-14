import React, { useContext, useEffect } from 'react';
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
                <li>
                    <div className="user-view">
                    <div className="background">
                        <img alt="" src="images/office.jpg" />
                    </div>
                    <a href="#user"><img alt="" className="circle" src="images/yuna.jpg" /></a>
                    <a href="#name"><span className="white-text name">John Doe</span></a>
                    <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div>
                </li>
                <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader" href="#!">Subheader</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>
        </>
    );
};

export default Navbar;
