import React from 'react'

function SignIn() {
  return (
    <React.Fragment>
      <form action="signIn">
          <label htmlFor="">Email</label> {" "}
          <input type="text"/>{" "}
          <label htmlFor="">Password</label>{" "}
          <input type="text"/>
          
      </form>
    </React.Fragment>
    
  )
}

export default SignIn;