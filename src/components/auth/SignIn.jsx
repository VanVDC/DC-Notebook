import React, { Component } from 'react'

export class SignIn extends Component {
  state ={
    email:'',
    password:''

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
          <h5>Sign In</h5>
          <div>
            <label htmlFor="email">Email</label>{" "}
            <input type="email" id='email' onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>{" "}
            <input type="password" id='password' onChange={this.handleChange}/>
          </div>
          <div>
            <button className='btn'>Login</button>
          </div>
        </form>
        
      </div>
    )
  }
}

export default SignIn



// import React from 'react'

// function SignIn() {
//   return (
//     <React.Fragment>
//       <form action="signIn">
//           <label htmlFor="">Email</label> {" "}
//           <input type="text"/>{" "}
//           <label htmlFor="">Password</label>{" "}
//           <input type="text"/> {" "}

//           <input 
//             type="submit" 
//             value='Login'
//             className='btn'
//             style={{flex: '1'}}
//             />
          
//       </form>
//     </React.Fragment>
    
//   )
// }

// export default SignIn;