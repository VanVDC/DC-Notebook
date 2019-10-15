import React from 'react'

function SignUp() {
  return (
    <React.Fragment>
      <form action="signUp">
          <label htmlFor="">First Name</label> {" "}
          <input type="text"/>{" "}
          <label htmlFor="">Last Name</label>{" "}
          <input type="text"/>{" "}
          <label htmlFor="">Email</label>{" "}
          <input type="text"/>
          <label htmlFor="">Password</label>{" "}
          <input type="text"/>

          
      </form>
    </React.Fragment>
    
  )
}

export default SignUp;