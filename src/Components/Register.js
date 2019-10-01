import React from 'react';
import { NavLink } from 'react-router-dom';
import '../NavBar/NavBar.css';

function Register(props) {
    // props.history.block('Are you sure you want to leave this page?');
    return(
        <div className="register-container">
        <nav>
            <div className="nav-wrapper">
                <img src='https://img.icons8.com/officel/2x/google-logo.png' height="75%" width="auto" alt="" id="nav-image" />
                <span className="brand-logo center">
                    PeachtreeData
                </span>
                <ul id="nav-mobile" className="hide-on-med-and-down">
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/help'>Help</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </ul>
            </div>
        </nav>
        <div className="body-container">
            <div className="icon-logo"></div>
            <form className="signup-container" action="/users/register" method="POST">
                Create An Account
                <div className="signup-name-field">
                    <div className="input-field">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="first_name" type="text" name="first_name"/>
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field signup-last-name">
                        <input id="last_name" type="text" name="last_name"/>
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
                <div className="signup-row">
                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <input id="email" type="email"/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="signup-row">
                    <div className="input-field">
                        <i className="material-icons prefix">lock</i>
                        <input id="password" type="password" name="password"/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="signup-row">
                    <div className="input-field">
                        <i className="material-icons prefix">lock</i>
                        <input id="password2" type="password" name="password2"/>
                        <label htmlFor="password">Re-type Password</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                </button>
            </form>
        </div>
        </div>
    )
}

export default Register;