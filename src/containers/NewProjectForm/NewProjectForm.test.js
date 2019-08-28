import React from 'react';
import ReactDOM from 'react-dom';
import { NewProjectForm } from './NewProjectForm';
import { shallow } from 'enzyme'

describe('NewProjectForm Container', () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper =shallow(
      <NewProjectForm 
        addProject={jest.fn()}
      />
    )
  })

  it('should match the snap shot', () => {
    expect(wrapper).toMatchSnapshot()
  })


})