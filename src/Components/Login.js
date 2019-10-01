import React from 'react';

function Login(props) {
    return(
        <div className="main-login-container">
            <div className="login-container">
                <div className="icon-login"></div>
                <form className="form-flex" action="/users/loginProcess" method="post">
                    <div className="input-field loginfields">
                        <i className="material-icons prefix">email</i>
                        <input className="input-blue-border" type="text" name="email"/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field loginfields">
                        <i className="material-icons prefix">lock</i>
                        <input className="input-blue-border" type="password" name="password"/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="password-options">
                        <button className="btn waves-effect waves-light" type="text" name="action">Password
                            <i className="material-icons right">help_outline</i>
                        </button>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;