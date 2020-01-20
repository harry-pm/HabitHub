import React, { Component } from 'react';
import Streak from '../components/Streak';
import Add from '../components/Add';
import List from '../components/List';

export default class Habits extends Component {

    state = {
        userHabits: [],
        streak: ''
    }

    // function to setstate equal to the habits prop passed down 

    // function to assign streak

    render() {
        return (
            <div>
                <Streak />
                <Add />
                <List />
            </div>
        )
    }
}
