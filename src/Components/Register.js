import React, { Component } from 'react';
import './NavBar/NavBar.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import registerAction from '../actions/registerAction';
import SweetAlert from 'sweetalert2-react';

class Register extends Component {
    // props.history.block('Are you sure you want to leave this page?');
    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: '',
        loggedIn: false,
        show: false
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.registerData !== this.props.registerData) {
            if (this.props.registerData.msg === "loggedIn") {
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
        const registerData = {...this.state};
        this.props.registerAction(registerData);
    }

    changeFirst = (e) => {
        this.setState({
            first_name: e.target.value
        })
    }

    changeLast = (e) => {
        this.setState({
            last_name: e.target.value
        })
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

    changePassword2 = (e) => {
        this.setState({
            password2: e.target.value
        })
    }

    render() {
        return(
            <div className="register-container">
                <div className="body-container">
                    <div className="icon-logo"></div>
                    <form onSubmit={this.handleSubmit} className="signup-container">
                        Create An Account
                        <div className="signup-name-field">
                            <div className="input-field">
                                <i className="material-icons prefix">account_circle</i>
                                <input onChange={this.changeFirst} value={this.state.first_name} className={this.state.warn} id="first_name" type="text"/>
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field signup-last-name">
                                <input onChange={this.changeLast} value={this.state.last_name} className={this.state.warn} id="last_name" type="text"/>
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="signup-row">
                            <div className="input-field">
                                <i className="material-icons prefix">email</i>
                                <input onChange={this.changeEmail} value={this.state.email} className={this.state.warn} id="email" type="email"/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="signup-row">
                            <div className="input-field">
                                <i className="material-icons prefix">lock</i>
                                <input onChange={this.changePassword} value={this.state.password} className={this.state.warn} id="password" type="password"/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="signup-row">
                            <div className="input-field">
                                <i className="material-icons prefix">lock</i>
                                <input onChange={this.changePassword2} value={this.state.password2} className={this.state.warn} id="password2" type="password"/>
                                <label htmlFor="password">Re-type Password</label>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light reg-submit-btn" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>
                <SweetAlert 
                    show={this.state.show}
                    title="Success!"
                    text="Account created."
                    confirmButtonColor="gray"
                    onConfirm={() => this.props.history.push(`/users/homepage`)}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        registerData: state.auth
    })
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({
        registerAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);