import React from 'react';
import ReactDOM from 'react-dom';
import Add from '../src/components/Add';

describe('Add', () => {
    const addHabit = jest.fn();

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Add addHabit={addHabit}/>, div);
      ReactDOM.unmountComponentAtNode(div);
  });
})
