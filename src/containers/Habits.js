import React, { Component } from 'react';
import Add from '../components/Add';
import List from '../components/List';

export default class Habits extends Component {

    componentWillUnmount() {
        this.props.saveHabits()
    }

    // function to assign streak

    render() {
        return (
            <div>
                <Add addHabit = {this.props.addHabit}/>
                <List 
                habits={this.props.userHabits}
                toggleHabitCompleted={this.props.toggleHabitCompleted}
                />
            </div>
        )
    }
}
