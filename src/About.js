import React from 'react';
import { Route } from 'react-router-dom';

function About() {
    return(
        <div>
            <h1>Help Header</h1>
            <p>Image goes here</p>
            <Route path="/help/user" />
            <Route path="/help/admin" />
            <h3>Footer for Help</h3>
        </div>
    )
}

export default About;