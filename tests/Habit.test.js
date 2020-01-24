import React from 'react';
import Habit from '../src/components/Habit';
import { shallow } from 'enzyme';

const dummyData = {
    "completed": [
      true,
      true,
      false
    ],
    "_id": "5e26e0397bd56f3754ed6d1a",
    "name": "pushups",
    "streak": 100,
    "lastCompleted": "2020-01-19T00:00:00.000Z"
  }

const toggleCompleted = jest.fn()
describe('Habit', () => {
    it('renders without crashing', () => {
        let wrapper = shallow(<Habit 
            habit={dummyData}
            toggleCompleted={toggleCompleted}/>)
  });
})
