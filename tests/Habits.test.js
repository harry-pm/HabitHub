import React from 'react';
import ReactDOM from 'react-dom';
import Habits from '../src/containers/Habits';
import { mount } from 'enzyme';
import { expect } from 'chai';

describe('Habits', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Habits />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('sets state to users habits', () => {
      const dummyData = [
        {
          "completed": [
            true
          ],
          "_id": "5e26e0397bd56f3754ed6d19",
          "name": "washing",
          "streak": 3,
          "lastCompleted": "2020-01-19T00:00:00.000Z"
        },
        {
          "completed": [
            true,
            true,
            false
          ],
          "_id": "5e26e0397bd56f3754ed6d1a",
          "name": "pushups",
          "streak": 100,
          "lastCompleted": "2020-01-19T00:00:00.000Z"
        }]   
      const wrapper = mount(<Habits />)
      const instance = wrapper.instance();
      wrapper.setProps({ habits: dummyData});
      instance.setHabits();
      expect(wrapper.state().userHabits).to.not.be.empty;
  });


})
