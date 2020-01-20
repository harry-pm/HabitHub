import React from 'react'

export default function Login() {
    return (
        <div>
            <h1>Habit Tracker</h1>
            {/* onSubmit verify function passed from props to be added */}
            <form>
                <input type="text" name="username" placeholder="enter username"></input>
                <input type="text" name="password" placeholder="enter password"></input>
                <input type="submit" value="submit"></input>
            </form>
        </div>
    )
}
