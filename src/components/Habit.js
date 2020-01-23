import React, { Component } from 'react'

export default class Habit extends Component {

    render() {
        console.log(this.props.habit)
        return (
            <div>
            <p className="habit">{this.props.habit.name}</p>
            <p className="streak">{this.props.habit.streak}</p>
            <div className="checkBoxes">
                {this.props.habit.completed.map((check, id) => {
                    return <input onChange={this.props.toggleCompleted.bind()}key={id} id={id} className={this.props.habit._id} type="checkbox" defaultChecked={check}/>
                })}
            </div>
        </div>
        )
    }
}
