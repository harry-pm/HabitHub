import React from 'react';
import Habit from './Habit';

export default function List(props) {
    return (
        <div className="habitsList">
         {props.habits.length > 0 && props.habits.map((habit, id) => (
                <Habit key={id}
                habit={habit}
                toggleCompleted={props.toggleHabitCompleted}
                />)  
            )}
        </div>
    )
}
