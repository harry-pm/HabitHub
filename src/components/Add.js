import React from 'react'

export default function Add() {
    return (
        <div>
            <form>
                {/* pass function from props to add data to the database onSubmit */}
                <input type="text" name="add" placeholder="Add a habit..."></input>
                <select>
                    <option default>Select a frequency</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <input type="submit" value="Add to list"></input>
            </form>
        </div>
    )
}
