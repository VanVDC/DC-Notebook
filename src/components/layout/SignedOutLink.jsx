import React from 'react';
import {NavLink, Link} from 'react-router-dom';

function SignedOutLink() {
  return (
    <ul className="right">
    <Link style={linkStyle} to= "/">Sign Up</Link> | {" "}
    <Link style={linkStyle} to= "/">Login</Link>
  </ul>
  )
}

const linkStyle ={
  color: '#FE6A53',
  textDecoration: 'none',
}

export default SignedOutLink;