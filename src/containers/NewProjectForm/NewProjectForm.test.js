import React from 'react';
import ReactDOM from 'react-dom';
import { NewProjectForm, mapDispatchToProps } from './NewProjectForm';
import { shallow, mount } from 'enzyme'
import { singleMockProject } from '../../mockData';
import { addProject } from '../../actions';

describe('NewProjectForm Container', () => {
  let wrapper;
  let instance;
  beforeEach(() => {
    wrapper =shallow(
      <NewProjectForm 
        addProject={jest.fn()}
      />
    )
    instance = wrapper.instance()
  })

  it('should match the snap shot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should map dispatch to props', () => {
    const mockDispatch = jest.fn();
    const mockResults = singleMockProject;
    const actionToDispatch = addProject(mockResults);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addProject(mockResults);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  })

  it('should create a project', async () => {
    const e = {
      preventDefault: jest.fn()
    }
    jest.spyOn(instance, 'createProject')
    wrapper.find("[data-test='create-project-btn-test']").simulate('click', e)
    expect(instance.createProject).toHaveBeenCalled()
  })


})