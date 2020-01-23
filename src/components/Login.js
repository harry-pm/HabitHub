import React from 'react';
import "../styles/App.css";

export default function Login(props) {
    return (
        <div>
            <h1>Habit Hub</h1>
            {/* onSubmit verify function passed from props to be added */}
            <form onSubmit={props.handleLogin}>
                <input type="text" name="username" placeholder="Enter username" onChange={props.handleUsername}></input>
                <input type="password" name="password" placeholder="Enter password" onChange={props.handlePassword}></input>
                <input type="submit" value="Log in" className="btn btn-primary btn-lg loginButton"></input>
            </form>
        </div>
    )
}
