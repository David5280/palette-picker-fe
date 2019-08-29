import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { 
  Projects, 
  mapDispatchToProps,
  mapStateToProps
} from './Projects'
import { mockProjects } from '../../mockData';


describe('Projects Container', () => {
  let wrapper;
  let instance;
  beforeEach(() => {
    wrapper = shallow(
      <Projects 
        projects={mockProjects}
        deleteProject={jest.fn()}
      />
    )
    instance = wrapper.instance()
  })

  it('HAPPY: Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('HAPPY: Should map state to props', () => {
    const mockState = {
      projects:mockProjects
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(mockState);
  })

  it('HAPPY: Should delete the projects, when found', () => {
     
  })
  
})