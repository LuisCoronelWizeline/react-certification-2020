import React from 'react';
import './Navbar.styles.css';

const Navbar = () => {
  return (
    <>
      <div className="navbar-fixed">
        <nav className="red">
          <div className="nav-wrapper">
            <div className="row">
              <div className="col s6">
                <a href="#!" className="brand-logo">
                  <i className="material-icons">menu</i>Wizeline!
                </a>
              </div>
              <div className="col s5">
                <div className="switch right-align">
                  <label>
                    Light
                    <input type="checkbox" />
                    <span className="lever" />
                    Dark
                  </label>
                </div>
              </div>
              <div className="col s1">
                <a href="x.html">
                  <i data-testid="account-icon" className="material-icons center-align">account_circle</i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper red lighten-2">
            <form>
              <div className="input-field">
                <input id="search" type="search" required />
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i data-testid="search-icon" className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
