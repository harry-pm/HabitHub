import React, { Component } from 'react';
import Add from '../components/Add';
import List from '../components/List';
import "../styles/Habits.css";

export default class Habits extends Component {
    componentDidMount() {
        window.addEventListener("beforeunload", this.beforeunload.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.beforeunload.bind(this))
    }

    beforeunload() {
        this.props.saveHabits();
    }

    // function to assign streak

    render() {
        return (
            <div className="habits">
                <h1>Your Habit List</h1>
                <Add addHabit = {this.props.addHabit}/>
                <List 
                habits={this.props.userHabits}
                toggleHabitCompleted={this.props.toggleHabitCompleted}
                />
            </div>
        )
    }
}
