import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Register from './Register';
import Login from '../components/Login';
import Habits from '../containers/Habits';
import axios from 'axios';
import "../styles/App.css"
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

  toggleHabitCompleted = (e)=>{
    
    let habitId = e.target.className
    let completedIndex = e.target.id;
    let updatedHabits  = this.state.userHabits
    for(let index in updatedHabits){
      if(updatedHabits[index]._id === habitId)
      {
       
        updatedHabits[index].completed[completedIndex] = !updatedHabits[index].completed[completedIndex]; 
      }
       
    }
    this.setState({...this.state, userHabits : updatedHabits})
  }

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

      })
  }
  
  addHabit = (name, completed) => {
    axios.post(apiUrl + "/addHabit/" + this.state.currentUser._id, { name: name, completed: completed})
    .then(() => {
      this.getHabits(this.state.currentUser._id)
    })
  }

  saveHabits = () => {
    let userId = this.state.currentUser._id;
    let habits = this.state.userHabits;
    console.log("app habits:",habits, userId)
    axios.post(apiUrl + "/updateHabits/" + userId, {habits:habits})
  }
  render () {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Login 
              handleLogin={this.handleLogin}
              handleUsername={this.handleUsername}
              handlePassword={this.handlePassword}/>
              <Link to="/register">Create a New Account</Link>
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
                toggleHabitCompleted = {this.toggleHabitCompleted}
                saveHabits = {this.saveHabits}
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
