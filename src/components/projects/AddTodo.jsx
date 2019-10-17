import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectAction'

 class AddTodo extends Component {
   state={
     title: '',
     content:''
   }

   onChange=(e)=>this.setState(
     {[e.target.name]: e.target.value}
   );

   onSubmit =(e)=>{
     e.preventDefault();
    //  this.props.addTodo(this.state.title); //make sure to put the content too.
    //  this.setState({title: ''});

    this.props.createProject(this.state)

   }

  render() {
    return (
      <form onSubmit={this.onSubmit}style={{display: 'flex'}}>
        <input 
        type="text" 
        name='title'
        style={{flex:'10', padding: '5px'}}
        placeholder='Add Task....'
        value={this.state.title}
        onChange={this.onChange}
        />
        <textarea 
        name='content'
        style={{flex:'10', padding: '5px'}}
        placeholder='Add Content....'
        value={this.state.content}
        onChange={this.onChange}
        />

        <input 
        type="submit" 
        value='Create'
        className='btn'
        style={{flex: '1'}}/>
      </form>
    )
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    createProject: (project)=>dispatch(createProject(project))
  }
}

export default connect(null,mapDispatchToProps)(AddTodo);