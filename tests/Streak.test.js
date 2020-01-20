import React from 'react';
import ReactDOM from 'react-dom';
import Streak from '../src/components/Streak';

describe('Streak', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Streak />, div);
      ReactDOM.unmountComponentAtNode(div);
  });
})
