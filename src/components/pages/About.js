import React from 'react';

export default function About(){
    return(
        <div style={aboutPageWrap}>
            <h2>About Page</h2>
            <h3>This is a About Page for Todo Application.</h3>
        </div>
    )
}

const aboutPageWrap = {
    padding: '30px',
    textAlign: 'center'
}