import React from 'react';

class AddTodo extends React.Component{

    state = {
        title: ''
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render(){
        return(
            <form onSubmit={this.onSubmit} style={styles.formWrap}>
                <input 
                    type="text" 
                    name="title"
                    style={styles.inputText} 
                    value={this.state.value}
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    style={styles.inputSubmit} 
                />
            </form>
        )
    }
}

const styles ={
    formWrap:{
        display:'flex',
        padding: '10px 30px'
    },
    inputText:{
        flex: 9,
        padding: '10px'
    },
    inputSubmit:{
        flex: 1,
        background: 'gray',
        border: 'none',
        color: '#fff',
        borderRadius: 'none',
    }
}

export default AddTodo;



