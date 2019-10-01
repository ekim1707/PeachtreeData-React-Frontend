import React from 'react';
import { Route, Link } from 'react-router-dom';

const HelpUser = () => <h1>Help user</h1>
const HelpAdmin = () => <h1>Help admin</h1>

function Help() {
    return(
        <div>
            <div>
                <Link to="/help/user">User</Link>
                <Link to="/help/admin">Admin</Link>
            </div>
            <h1>Help Header</h1>
            <p>Image goes here</p>
            <Route path="/help/user" component={HelpUser} />
            <Route path="/help/admin" component={HelpAdmin} />
            <h3>Footer for Help</h3>
        </div>
    )
}

export default Help;