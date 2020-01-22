import React, { Component } from 'react'

export default class Habit extends Component {

    render() {
        return (
            <div>
            <p className="habit">{this.props.habit.name}</p>
            <p className="streak">{this.props.habit.streak}</p>
            <div className="checkBoxes">
                {this.props.habit.completed.map((check, id) => {
                    return <input onChange={this.props.toggleCompleted.bind(this)}key={id} id={id}type="checkbox" defaultChecked={check}/>
                })}
            </div>
        </div>
        )
    }
}
