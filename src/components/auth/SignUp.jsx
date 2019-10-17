import React, { Component } from 'react'

export class SignUp extends Component {
  state ={
    email:'',
    password:'',
    firstName:'',
    lastName:''

  }
  handleChange =(e)=>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit =(e)=>{
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Sign Up</h5>
          <div>
            <label htmlFor="email">Email</label>{" "}
            <input type="email" id='email' onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>{" "}
            <input type="password" id='password' onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="firstName">First Name</label>{" "}
            <input type="text" id='firstName' onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>{" "}
            <input type="text" id='lastName' onChange={this.handleChange}/>
          </div>
          <div>
            <button className='btn'>Submit</button>
          </div>
        </form>
        
      </div>
    )
  }
}

export default SignUp



// import React from 'react'

// function SignUp() {
//   return (
//     <React.Fragment>
//       <form action="signUp">
//           <label htmlFor="">First Name</label> {" "}
//           <input type="text"/>{" "}
//           <label htmlFor="">Last Name</label>{" "}
//           <input type="text"/>{" "}
//           <label htmlFor="">Email</label>{" "}
//           <input type="text"/>
//           <label htmlFor="">Password</label>{" "}
//           <input type="text"/>{" "}
//           <input 
//             type="submit" 
//             value='Submit'
//             className='btn'
//             style={{flex: '1'}}
//             />

          
//       </form>
//     </React.Fragment>
    
//   )
// }

// export default SignUp;