import React from 'react'

export default function List(props) {
    return (
        <div className="habitsList">
         {props.habits && props.habits.map((habit, id) => (
            <div key={id} >
                <p className="habit">{habit.name}</p>
            </div>)  
            )}
        </div>
    )
}
