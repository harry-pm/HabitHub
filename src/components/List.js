import React from 'react'

export default function List(props) {
    return (
        <div className="habitsList">
         {props.habits && props.habits.map(habits => {
            return (
            <div className="habit">
                <p>{habits.name}</p>
            </div>)}  
            )}
        </div>
    )
}
