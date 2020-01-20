import React from 'react';
import ReactDOM from 'react-dom';
import Habits from '../src/containers/Habits';

describe('Habits', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Habits />, div);
      ReactDOM.unmountComponentAtNode(div);
  });
})
