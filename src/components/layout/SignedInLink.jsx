import React from 'react';
import {NavLink} from 'react-router-dom';

function SignedInLink() {
  return (
    <ul className="right">
      <li><NavLink to='/'></NavLink></li>
      <li><NavLink to='/week'>Week</NavLink></li>
      <li><NavLink to='/calendar'>Calendar</NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li><NavLink to='/'>name</NavLink></li>
    </ul>
  )
}

export default SignedInLink;