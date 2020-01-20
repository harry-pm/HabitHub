import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import '../App.css';
import Register from './Register';
import Login from '../components/Login';
import Habits from '../containers/Habits';


class App extends React.Component {

  state = {
    loggedIn : false,
    user: [],
    habits: []
  }

  // function to verify username and password (verify) to be added below
  
  // function to add habit

  render () {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Link to="/register">Create Account</Link>
              <Login />
              {/* verify function */}
            </Route>
            <Route path="/register">
              <Register /> 
            </Route>
            <Route path="/habits">
              <Habits />
              {/* if loggedIn === true, render Habits component and pass down user and habits */}
            </Route>
          </Switch>
        </div>
      </Router>
    )};
}

export default App;
