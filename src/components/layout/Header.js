import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header>
            <h1 style={headerStyle}>React Todo App</h1>
            <Link to="/" style={linkStyle}>Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle ={
    background: 'violet',
    textAlign: 'center',
    color: '#fff',
    padding: '10px 0'
}
const linkStyle ={
    padding: '10px',
    display: 'inline-block',
    textDecoration: 'none'
}
export default Header;