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
      const dummyData = [{
        name: "washing",
        streak: 3,
        completed: [true],
        lastCompleted: "19 / 01 / 2020"
    },
    {
        name: "pushups",
        streak: 100,
        completed: [true, true, false],
        lastCompleted: "19 / 01 / 2020"
    }
    ]   
      const wrapper = mount(<Habits />)
      const instance = wrapper.instance();
      wrapper.setProps({ habits: dummyData});
      instance.setHabits();
      expect(wrapper.state().userHabits).to.not.be.empty;
  });


})
