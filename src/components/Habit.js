import React from 'react'

export default function Habit(props) {
    return (
        <div>
            <p className="habit">{props.habit.name}</p>
            <p className="streak">{props.habit.streak}</p>
            <div className="checkBoxes">
                {props.habit.completed.map((check, id) => {
                    return <input key={id} type="checkbox" defaultChecked={check}/>
                })}
            </div>
        </div>
    )
}
