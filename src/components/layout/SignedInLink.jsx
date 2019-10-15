import React from 'react';
import {NavLink, Link} from 'react-router-dom';

function SignedInLink() {
  return (
    <ul className="right">
      <Link style={linkStyle} to= "/">Over-View</Link> | {" "}
      <Link style={linkStyle} to= "/week">Week</Link> | {" "}
      <Link style={linkStyle} to= "/calendar">Calendar</Link> | {" "}
      <Link style={linkStyle} to= "/logut">Logout</Link> | {" "}
      <Link style={linkStyle} to= "/">NN</Link>
    </ul>
  )
}

const linkStyle ={
  color: '#FE6A53',
  textDecoration: 'none',
}

export default SignedInLink;