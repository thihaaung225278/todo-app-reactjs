import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Todo from './components/Todo';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

class App extends React.Component{
  
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.setState({todos: res.data}));
  }

  markComplete = (id) =>{
    this.setState({
      todos: this.state.todos.map(todo=>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  deleteTodoItem = (id) =>{
    // this.setState({
    //   todos:  [...this.state.todos.filter(todo => todo.id !== id)]
    // });
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=> this.setState({todos: [...this.state.todos.filter(todo=>todo.id !== id)]}))
  }

  addTodo = (title) =>{
    // let id = this.state.todos.length + 1;
    // let newTodo = {
    //   id,
    //   title,
    //   completed: false
    // }
    // this.setState({
    //   todos: [...this.state.todos, newTodo]
    // });
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false
    })
    .then(res => this.setState({todos: [...this.state.todos, res.data]}))
  }

  render(){
    return(
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render = {prop =>(
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todo todos={this.state.todos} markComplete={this.markComplete} deleteTodoItem={this.deleteTodoItem} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}



export default App;

