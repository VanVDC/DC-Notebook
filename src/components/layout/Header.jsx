import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink';

 function Header() {
  return (
    <header style={headerStyle}>
      <h1>Scheduler</h1>
      <Link style={linkStyle} to= "/">Over-View</Link> | {" "}
      <Link style={linkStyle} to= "/week">Week</Link> | {" "}
      <Link style={linkStyle} to= "/calendar">Calendar</Link>
      <SignedInLink/>
      <SignedOutLink/>

    </header>
  )
}
const linkStyle ={
  color: '#FE6A53',
  textDecoration: 'none',
}
const headerStyle ={
  background:'#25CED1',
  color: '#FE6A53',
  textAlign: 'center',
  padding: '10px'
}

export default Header;