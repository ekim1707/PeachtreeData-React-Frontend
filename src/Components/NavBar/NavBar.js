import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../Library/Caches/typescript/3.6/node_modules/redux';
import pd from './newprofilepic.jpg';
import logo from './icon-logo.png';
import caricature from '../Homepage/Connections/images/caricature.png';

class NavBar extends Component {
    state = {
        search: '',
        loggedIn: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            search: ''
        })
        window.open('http://google.com/search?q='+this.state.search);
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    logOut = (e) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_email");
    }

    fileUpload = (e) => {
        if (document.querySelector('.upload-div').classList.contains('hidden')) {
            document.querySelector('.upload-div').classList.remove('hidden');
        } else {
            document.querySelector('.upload-div').classList.add('hidden');
        }
    }

    render() {
        if (this.props.location.pathname === "/login") {
            return null;
        } else {
            let navLeft;
            let navCenter;
            let navRight;
            if (localStorage.getItem("token")) {
                let image;
                if (localStorage.getItem('user_id') === '2') {
                    image = pd;
                } else {
                    image = caricature;
                }
                navLeft =
                    <span className="main-navbar-left-col">
                        <img src={image} height="75%" width="auto" alt="" id="nav-image" />
                        <NavLink to="/users/homepage" id="logo">
                            <img src={logo} height="24px" width="auto" alt="" />
                            treeData.com
                        </NavLink>
                    </span>;
                navCenter =
                    <form onSubmit={(e) => this.handleSubmit(e)} className="main-navbar-middle-col" target="_blank">
                        <input onChange={(e) => this.handleChange(e)} value={this.state.search} type="text" className="google-search browser-default" placeholder="Google Search"/>
                    </form>;
                navRight =
                    <span className="main-navbar-right-col">
                        <button onClick={this.fileUpload} className="main-navbar-buttons" >
                            <i className="material-icons">file_upload</i>
                        </button>
                        <button className="main-navbar-buttons" >
                            <i className="material-icons">notifications</i>
                        </button>
                        <NavLink onClick={this.logOut} to='/' className="nav-logout">LOGOUT</NavLink>
                    </span>;
            } else {
                navLeft = 
                    <a href="https://www.google.com" className="main-navbar-left-col" rel="noopener noreferrer" target="_blank">
                        <img src='https://img.icons8.com/officel/2x/google-logo.png' height="75%" width="auto" alt="" id="nav-image" />
                    </a>;
                navCenter = 
                    <NavLink to="/" className="main-navbar-middle-col brand-logo">
                        PeachtreeData.com
                    </NavLink>;
                navRight = 
                    <span id="nav-mobile" className="main-navbar-right-col">
                        <NavLink to='/about' className="nav-logout">ABOUT</NavLink>
                        <NavLink to='/help' className="nav-logout">HELP</NavLink>
                        <NavLink to='/login' className="nav-logout">LOGIN</NavLink>
                    </span>;
            }
            return(
                <div className="main-navbar">
                    {navLeft}
                    {navCenter}
                    {navRight}
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return ({
        statusData: state.auth
    })
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);