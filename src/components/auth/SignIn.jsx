import React from 'react'

function SignIn() {
  return (
    <React.Fragment>
      <form action="signIn">
          <label htmlFor="">Email</label> {" "}
          <input type="text"/>{" "}
          <label htmlFor="">Password</label>{" "}
          <input type="text"/> {" "}

          <input 
            type="submit" 
            value='Login'
            className='btn'
            style={{flex: '1'}}
            />
          
      </form>
    </React.Fragment>
    
  )
}

export default SignIn;