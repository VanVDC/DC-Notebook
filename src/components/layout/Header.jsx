import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink';

 function Header() {
  return (
    <header style={headerStyle}>
      <h1>Scheduler</h1>
      <SignedInLink/>
      <SignedOutLink/>

    </header>
  )
}
const headerStyle ={
  background:'#25CED1',
  color: '#FE6A53',
  textAlign: 'center',
  padding: '10px'
}

export default Header;