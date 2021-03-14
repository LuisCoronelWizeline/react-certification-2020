/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Fragment } from 'react';
import './Navbar.styles.css';

const Navbar = () => {
  return (
    <>
      <nav className="red">
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s4">
              <a href="#!" className="brand-logo">
                <i className="material-icons">menu</i>Wizeline
              </a>
            </div>
            <div className="col s5">
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                      <i className="material-icons prefix">search</i>
                      <input id="icon_prefix" type="text" className="validate" />
                      <label htmlFor="icon_prefix">Video name</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col s2">
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
                <i className="material-icons right-align">person</i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
