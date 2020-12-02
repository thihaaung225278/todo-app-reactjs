import React, { Component } from 'react'

export class TodoItem extends Component {
    
    // markComplete(){
    //     console.log(this.props.todo.id);
    // }

    getStyle = () =>{
        return {
            padding: '10px 10px',
            marginBottom: '10px',
            background: 'gray',
            color: '#fff',
            textDecoration: this.props.todo.completed ? 'line-through': 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()} >
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} />{" "}
                    {title}
                    <button style={buttonStyle} onClick={this.props.deleteTodoItem.bind(this,id)}>X</button>
            </div>
        )
    }
}

const buttonStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '3px 10px',
        borderRadius: '3px',
        float: 'right'
    }

export default TodoItem
