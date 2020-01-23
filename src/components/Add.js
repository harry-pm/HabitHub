import React, { Component } from 'react'

export default class Add extends Component {

    state = {
        frequency: [false],
        name: ""
    }

    handleName = (e) => {
        this.setState({...this.state, name: e.target.value})
    }

    handleFrequency = (e) => {
        let completed = [];
        for (let i = 0; i < Number(e.target.value); i++) {
            completed.push(false)
        }
        this.setState({...this.state, frequency: completed})
    }

    render() {
        return (
        <div>
            <input required onChange={this.handleName} type="text" name="add" placeholder="Add a habit..."></input>
            <p>Frequency per day: </p>
            <select required onChange={this.handleFrequency}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button onClick={this.props.addHabit.bind(this, this.state.name, this.state.frequency)}>Add habit you addict!</button>
        </div>
        )
    }
}
