import React from 'react'

export default function Habit(props) {
    return (
        <div>
            <p className="habit">{props.habit.name}</p>
            <p className="streak">{props.habit.streak}</p>
            <div className="checkBoxes">
                {props.habit.completed.map(check => {
                    return <input type="checkbox" defaultChecked={check}/>
                })}
            </div>
        </div>
    )
}
