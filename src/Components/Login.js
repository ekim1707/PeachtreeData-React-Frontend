import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loginAction from '../actions/loginAction';
import SweetAlert from 'sweetalert2-react';
import NavBar from './NavBar/NavBar';

class Login extends Component {
    state = {
        email: '',
        password: '',
        loggedIn: false,
        show: false
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.loginData !== this.props.loginData) {
            if (this.props.loginData.msg === "loggedIn") {
                this.setState({
                    show: true
                })
            } else {
                document.body.classList.add('body-shake');
                setTimeout(() => {
                    document.body.classList.remove('body-shake');
                }, 1300);
            }
        }
    }

    // componentDidMount() {
    //     localStorage.clear();
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        const loginData = {...this.state};
        this.props.loginAction(loginData);
    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return(
            <div className="main-login-container">
                <div className="login-container">
                    <div className="icon-login"></div>
                    <form onSubmit={this.handleSubmit} className="form-flex">
                        <div className="input-field loginfields">
                            <i className="material-icons prefix">email</i>
                            <input onChange={this.changeEmail} value={this.state.email} className="input-blue-border" type="text"/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field loginfields">
                            <i className="material-icons prefix">lock</i>
                            <input onChange={this.changePassword} value={this.state.password} className="input-blue-border" type="password"/>
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
                <SweetAlert 
                    show={this.state.show}
                    title="Success!"
                    text="Login successful."
                    confirmButtonColor="gray"
                    onConfirm={() => this.props.history.push(`/users/homepage`)}
                />
                <NavBar location={this.props.location} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        loginData: state.auth
    })
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({
        loginAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);