import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/projects/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/projects/AddTodo';
import Calendar from './store/reducers/calendar';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import {connect} from 'react-redux'

import './App.css';
import axios from 'axios';


const style = {
  position: "relative",
  margin: "50px auto"
}

class App extends Component {
  
  onDayClick = (e, day) => {
    alert(day);

  }
  
  state={
    todos:[]
  }

  componentDidMount(){
    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({ todos: res.data }));
  }


  //toggle completed
  markComplete=(id)=>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed= !todo.completed
      }
      return todo;
    })})
  }

  // Delete Todo

  delTodo = (id) =>{
    this.setState({todos: [...this.state.todos.filter(todo=>todo.id!==id)]});
  }

  // Add todo

  addTodo=(title)=>{
    const newTodo ={
      id:title,
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render(){
    // console.log(this.props);
    const {projects} =this.props;

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path='/' render={props =>(
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                < Todos markComplete={this.markComplete}todos={this.state.todos} delTodo={this.delTodo} projects={projects}/>
              </React.Fragment>
            )}/>
            <Route path="/calendar" render={props =>(
              <React.Fragment>
                <Calendar style={style} //width="302px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}
          /> 
              </React.Fragment>
            )}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/signin" component={SignIn}/>
        

          </div>

        </div>

      </Router>
      
    );
  }
 
}

const mapStateToProps =(state)=>{
  return{
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(App);
