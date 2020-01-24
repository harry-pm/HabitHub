import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
const apiUrl = 'http://localhost:4000'

export default class Register extends Component {

    state = {
        registered : null,
        username: '',
        password: ''
    }

handleRegister = (e) => {
    e.preventDefault();
    axios.post(apiUrl + '/addUser', {username: this.state.username, password: this.state.password}).then((res, err) => {
        console.log(res.data.success)    
        this.setState({ ...this.state, registered : res.data.success})
            
    })
}

handleUsername = (e) => {
    this.setState({...this.state, username : e.target.value })
}

handlePassword = (e) => {
    this.setState({...this.state, password : e.target.value })
}


    render() {
        return (
            <div>
            <h1>Create an Account</h1>
            <form onSubmit={this.handleRegister}>
                <input onChange={this.handleUsername} className="username" type="text" name="username" placeholder="Choose a username..."></input>
                <input onChange={this.handlePassword} type="password" className="password" name="password" placeholder="Choose a password..."></input>
                <input type="submit" value="Create" className="btn btn-lg loginButton"></input>
            </form>
            {this.state.registered !== null && (this.state.registered===true ? <Link to="/">Account created! Go to login page</Link> : <p>Registration failed! Please try again</p>)}
            </div>
        )
    }
}
