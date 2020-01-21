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
import axios from 'axios';
const apiUrl = 'http://localhost:4000'



class App extends React.Component {

  state = {
    loggedIn: false,
    users: [],
    userHabits: [],
    login: {
      username: "",
      password : ""
    },
    currentUser : {}
  }

  //axios function to fetch users data. this will setstate(users) to an array
  getUsers = () =>{
    axios.get(apiUrl + '/readAllUsers').then((res, err) =>
      { 
        console.log(res.data)
        //list of usernames and passwords
        this.verifyUser(
          this.state.login.username,
          this.state.login.password,
          res.data
          )
      }
    )
  }

  getHabits = (id) => {
    axios.get(apiUrl + '/readUserHabits/'+this.state.currentUser._id).then((res,err) =>{  this.setState({userHabits: res.data})}
    )
  }

  componentDidMount(){
  }

  handleUsername = (e) => {
    this.setState({login : {...this.state.login, username :  e.target.value} })
  }
  handlePassword = (e) => {
    this.setState({login : {...this.state.login, password : e.target.value}})
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.getUsers(); 
  }

  verifyUser = (username, password, users) => {
      users.map(user => {
      if (user.username === username && user.password === password) {
        this.setState({currentUser : user})
        this.setState({ loggedIn: true })}
        this.getHabits(user._id)
        //redirect to habits
        this.props.history.push('/habits')

      })
  }  

  // function to add habit

  render () {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Link to="/register">Create Account</Link>
              <Login 
              handleSubmit={this.handleSubmit}
              handleUsername={this.handleUsername}
              handlePassword={this.handlePassword}/>
              {/* verify function */}
              {/* {loggedIn && <p>Welcome <P>} */}
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
