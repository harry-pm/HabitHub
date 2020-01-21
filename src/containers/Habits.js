import React, { Component } from 'react';
import Streak from '../components/Streak';
import Add from '../components/Add';
import List from '../components/List';

export default class Habits extends Component {

    state = {
        userHabits: [
    {
      "completed": [
        true
      ],
    "_id": "5e26e0397bd56f3754ed6d19",
    "name": "washing",
    "streak": 3,
    "lastCompleted": "2020-01-19T00:00:00.000Z"
  },
  {
    "completed": [
      true,
      true,
      false
    ],
    "_id": "5e26e0397bd56f3754ed6d1a",
    "name": "pushups",
    "streak": 100,
    "lastCompleted": "2020-01-19T00:00:00.000Z"
  }],
        streak: ''
    }

    // function to setstate equal to the habits prop passed down 
    setHabits (props) {
        this.setState({ userHabits: [...this.state.userHabits, props]})
    }


    // function to assign streak

    render() {
        return (
            <div>
                <Streak />
                <Add />
                <List habits={this.state.userHabits}/>
            </div>
        )
    }
}
