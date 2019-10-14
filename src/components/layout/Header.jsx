import React from 'react';
import {Link} from 'react-router-dom';

 function Header() {
  return (
    <header style={headerStyle}>
      <h1>Scheduler</h1>
      <Link style={linkStyle} to= "/">Over-View</Link> | {" "}
      <Link style={linkStyle} to= "/week">Week</Link> | {" "}
      <Link style={linkStyle} to= "/calendar">Calendar</Link>
    </header>
  )
}
const linkStyle ={
  color: '#fff',
  textDecoration: 'none'
}
const headerStyle ={
  background:'darkgray',
  color: 'white',
  textAlign: 'center',
  padding: '10px'
}

export default Header;