import React from 'react';
import './Navbar.styles.css';

const Navbar = () => {

  const onClickMenu = e => {
    console.log('click on menu icon');
  };

  const onClickAccount = e => {
    console.log('click on account icon');
  };

  const onClickMode = e => {
    console.log('click on mode switch icon');
  };

  return (
    <>
      <div className="navbar-fixed">
        <nav className="red">
          <div className="nav-wrapper">
            <div className="row">
              <div className="col s6">
                <a href="#!" className="brand-logo">
                  <i className="material-icons" onClick={onClickMenu}>menu</i>Wizeline!
                </a>
              </div>
              <div className="col s5">
                <div className="switch right-align">
                  <label>
                    Light
                    <input type="checkbox" onClick={onClickMode} />
                    <span className="lever" />
                    Dark
                  </label>
                </div>
              </div>
              <div className="col s1">
                <i data-testid="account-icon" className="material-icons center-align" onClick={onClickAccount}>account_circle</i>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
