import React from 'react';
import ReactDOM from 'react-dom';
import Add from '../src/components/Add';

describe('Add', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Add />, div);
      ReactDOM.unmountComponentAtNode(div);
  });
})
