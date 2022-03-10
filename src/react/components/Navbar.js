import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {

  return (
    <>
      {/* Navigation */}
      <nav className="light-green darken-3">

        <div className='container'>
          <div className='row'>
            <div className='col s10'>
              <NavLink className='brand-logo' to="/">CI2DT2</NavLink>

            </div>
            <div className='col s19'>
              <NavLink  to="/register">Register</NavLink>

            </div>
            <div className='col s19'>

              <NavLink  to="/login">Login</NavLink>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}