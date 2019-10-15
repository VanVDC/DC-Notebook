import React, { Component } from 'react'

class Todo extends Component {
  getStyle =()=>{
    return { 
      background: '#FCEADE',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none' }
  }

  
 
  render() {
    const{id, title}=this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
        {title}
        <button onClick={this.props.delTodo.bind(this, id)}style={btnStyle}>-</button>

        </p>
        
      </div>
    )
  }
}

const btnStyle={
  background:'#FFFFFF',
  border: 'none',
  padding:'5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default Todo;