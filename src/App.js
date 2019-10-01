import React from 'react';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import About from './About';
import Help from './Help';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/users" render={(props) => {
            return <NavBar history={props.history} key="users" />
          }} />
          <Route path="/about" component={About} />
          <Route path="/help" component={Help} />
          <Route exact path='/' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/users/homepage/' component={Homepage} />
        </div>
      </Router>
    );
  }
}

export default App;
