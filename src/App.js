import React from 'react';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Homepage from './Components/Homepage/Homepage';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import About from './About';
import Help from './Help';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../Library/Caches/typescript/3.6/node_modules/redux';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {

    };
  }

  render() {
    let loggedIn;
    if (this.props.statusData.token) {
      const token = this.props.statusData.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user_id", this.props.statusData.info.id);
      localStorage.setItem("user_email", this.props.statusData.info.email);
    }
    if (localStorage.getItem("token")) {
      loggedIn = true;
    } else {
      loggedIn = false;
    }
    return (
      <Router>
        <div className="App">
          <Route path="/" render={(props) => {
            return <NavBar loggedIn={loggedIn} location={props.location} history={props.history} key="users" />
          }} />
          <Route path="/about" component={About} />
          <Route path="/help" component={Help} />
          <Route exact path='/' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/users/homepage' render={(props) => {
            return loggedIn ? <Homepage history={props.history} key="users" /> : <Redirect to="/" />
          }} />
        </div>
      </Router>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);