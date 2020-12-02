import React, { Component } from 'react'
import TodoItem from './TodoItem';

export class Todo extends Component {
    render() {
        return (
            <div style={appContainer}>
                {this.props.todos.map(todo => {
                    return <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodoItem={this.props.deleteTodoItem} />
                })}
            </div>
        )
    }
}

const appContainer ={
    padding: '30px 30px',
}

export default Todo
