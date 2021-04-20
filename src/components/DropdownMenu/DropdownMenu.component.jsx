import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/userContext';

const DropdownMenu = () => {

    const userContext = useContext(UserContext);
    console.log('This is the user logged in: ' + userContext.userLogged.name);

    const onClickLogout = e => {
        userContext.logoutUser();
    }

    return (
        <div>
            <a className='dropdown-trigger' href='#1' data-target='dropdown1'>
                <i href=".dropdown1" data-testid="account-icon" className="material-icons center-align" >account_circle</i>
            </a>
            <ul id='dropdown1' className='dropdown-content'>
                {
                    userContext.userLogged.name !== 'LuisCoronel' ? 
                        <Link to='/loginView'>
                            <li><i className="material-icons">thumb_up</i>Login</li>
                        </Link>
                    :
                        <Link to='/'>
                            <li><i className="material-icons" onClick={onClickLogout}>thumb_down</i>Logout</li>
                        </Link>
                }
            </ul>
        </div>
    )
}

export default DropdownMenu;
