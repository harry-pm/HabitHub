import React, { Component } from 'react';
import "../styles/Habits.css";

export default class Habit extends Component {

    render() {
        return (
            <div className="flex-row">
            <p>{`${this.props.habit.name} ${this.props.habit.streak}`} <img src="/assets/fire.png" alt="streak logo" /></p>
            <div className="checkBoxes">
                {this.props.habit.completed.map((check, id) => {
                    return <input onChange={this.props.toggleCompleted.bind()}key={id} id={id} className={this.props.habit._id} type="checkbox" defaultChecked={check}/>
                })}
            </div>
        </div>
        )
    }
}
