import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/containers/App';
import { shallow } from 'enzyme';

const dummyData = { users: [{
  "_id": "5e26e0397bd56f3754ed6d1b",
  "username": "juicey",
  "password": "yusey",
  "habits": null,
  "__v": 0
},
{
  "_id": "5e26e0397bd56f3754ed6d1f",
  "username": "jtrigger",
  "password": "glock",
  "habits": null,
  "__v": 0
}]}

describe('App', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  // it('checks that login verification function works', () => {
  //   const wrapper = shallow(<App />)
  //   const instance = wrapper.instance();
  //   wrapper.setState(dummyData));
  //   instance.verifyUser('juicey', 'yusey');
  //   expect(wrapper.state().loggedIn).equal(true)
  // })
})

