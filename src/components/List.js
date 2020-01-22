import React from 'react';
import Habit from './Habit';

export default function List(props) {
    return (
        <div className="habitsList">
         {props.habits.length > 0 && props.habits.map((habit, id) => (
            <div key={id} >
                <Habit habit={habit}/>
            </div>)  
            )}
        </div>
    )
}
