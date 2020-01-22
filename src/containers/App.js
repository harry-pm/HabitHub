import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
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
    axios.get(apiUrl + '/readUserHabits/' + id).then((res,err) =>{  
      console.log("Get habits")
      this.setState({userHabits: res.data})}
    )
  }

  // componentDidMount(){
  // }

  handleUsername = (e) => {
    this.setState({login : {...this.state.login, username :  e.target.value} })
  }
  handlePassword = (e) => {
    this.setState({login : {...this.state.login, password : e.target.value}})
  }
  handleLogin = (e) =>{
    e.preventDefault();
    this.getUsers(); 
  }

  verifyUser = (username, password, users) => {
      users.map(user => {
      if (user.username === username && user.password === password) {
        console.log(user.username, user.password)
        console.log(username,password)
        console.log("valid user")
        this.setState({currentUser : user})
        this.setState({ loggedIn: true })
        this.getHabits(user._id)
        }
        //redirect to habits
        // this.props.history.push('/habits')

      })
  }
  
  addHabit = (name, completed) => {
    axios.post(apiUrl + "/addHabit/" + this.state.currentUser._id, { name: name, completed: completed})
    .then(() => {
      this.getHabits(this.state.currentUser._id)
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
              handleLogin={this.handleLogin}
              handleUsername={this.handleUsername}
              handlePassword={this.handlePassword}/>
              {/* verify function */}
                {this.state.loggedIn && <Redirect to="/habits" />}
            </Route>
            <Route path="/register">
              <Register /> 
            </Route>
            <Route path="/habits">
              <Habits 
                userHabits = {this.state.userHabits}
                addHabit = {this.addHabit}
              />
              {!this.state.loggedIn && <Redirect to="/" />}
              {/* if loggedIn === true, render Habits component and pass down user and habits */}
            </Route>
          </Switch>
        </div>
      </Router>
    )};
}

export default App;
