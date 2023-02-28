import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';

function Navbar({ isAuthorized, onAuthorizationToggle }) {

  return (
    <div className='navbar'>
      <h2><Link to="/">Home</Link></h2>
      <h3><Link to="userList">ListUsers</Link></h3>
      <button onClick={onAuthorizationToggle}>
        {isAuthorized ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Navbar;