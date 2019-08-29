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

  beforeEach(() => {
    wrapper = shallow(
      <Projects 
        projects={mockProjects}
        deleteProject={jest.fn()}
      />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should map state to props', () => {
    const mockState = {
      projects:mockProjects
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(mockState);
  })
  
})