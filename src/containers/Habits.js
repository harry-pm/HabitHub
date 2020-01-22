import React, { Component } from 'react';
import Add from '../components/Add';
import List from '../components/List';

export default class Habits extends Component {

    state = {
        userHabits: []
    }

    // function to setstate equal to the habits prop passed down 
    setHabits (props) {
        this.setState({ userHabits: [...this.state.userHabits, props]})
    }


    // function to assign streak

    render() {
        return (
            <div>
                <Add addHabit = {this.props.addHabit}/>
                <List habits={this.props.userHabits}/>
            </div>
        )
    }
}
