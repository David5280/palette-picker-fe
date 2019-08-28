import React from 'react';
import {App, mapDispatchToProps, mapStateToProps} from './App.js';
import { shallow } from 'enzyme'
import { mockProjects } from '../../mockData.js';

describe('App Container', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App 
        projects={mockProjects} 
        retrieveProjects={jest.fn()}
        loadComplete={jest.fn()}
        hasErrored={jest.fn()}
      />
    )

  })

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should do something', () => {

  })
})

