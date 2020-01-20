import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <h1>Habit Tracker</h1>
                
                <form>
                    <input type="text" name="username" placeholder="enter username"></input>
                    <input type="text" name="password" placeholder="enter password"></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        )
    }
}
