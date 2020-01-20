import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Register from './containers/Register';

class App extends React.Component {

  state = {
    loggedIn : false,
  }

  render () {
    return (
      <Router>
        <div className="App">
          <Link to="/">Create Account</Link>
          <Switch>
            <Route path="/">
              <Register/>
            </Route>
          </Switch>
        </div>
      </Router>
    )};
}

export default App;
