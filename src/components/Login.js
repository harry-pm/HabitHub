import React from 'react'

export default function Login(props) {
    return (
        <div>
            <h1>Habit Tracker</h1>
            {/* onSubmit verify function passed from props to be added */}
            <form onSubmit={props.handleLogin}>
                <input type="text" name="username" placeholder="enter username" onChange={props.handleUsername}></input>
                <input type="text" name="password" placeholder="enter password"onChange={props.handlePassword}></input>
                <input type="submit" value="submit" ></input>
            </form>
        </div>
    )
}
