import React, {Component} from 'react';
import Todo from './Todo';

class Todos extends Component{
  render(){
    return(
      this.props.projects.map((project)=>(
        <Todo key={project.id} project={project} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
      ))
    )
  }
}

export default Todos;