import React from 'react'

const DropdownMenu = () => {
    return (
        <div>
            <a className='dropdown-trigger' href='#1' data-target='dropdown1'>
                <i href=".dropdown1" data-testid="account-icon" className="material-icons center-align" >account_circle</i>
            </a>

            <ul id='dropdown1' className='dropdown-content'>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider" tabIndex="-1"></li>
                <li><a href="#!">three</a></li>
                <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
                <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
            </ul>

        </div>
    )
}

export default DropdownMenu;
