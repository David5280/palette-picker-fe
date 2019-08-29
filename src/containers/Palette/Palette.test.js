import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import { 
  Palette, 
  mapStateToProps, 
  mapDispatchToProps
} from './Palette';
import { 
  mockColors, 
  mockProjects 
} from '../../mockData';

describe('Palette Container', () => {

  let wrapper;
  let instance;
  beforeEach(()=> {
    wrapper = shallow(
      <Palette 
      scheme={'tetrade'}
      variation={"default"}
      colors={mockColors}
      projects={mockProjects}
      storePalette={jest.fn()}
      changeScheme={jest.fn()}
      changeVariation={jest.fn()}
      />
      )
      instance = wrapper.instance()
  })

  it('HAPPY: Should match the snap shot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('HAPPY: should be able to show the new project form', () => {
    expect(wrapper.state('showNewProjectForm')).toBe(false)
    wrapper.find('[data-test="add-project-btn"]').simulate('click')
    expect(wrapper.state('showNewProjectForm')).toBe(true)
  })

  it('HAPPY: Should make random colors', () => {
    jest.spyOn(instance, 'makeRandomColors')
    wrapper.find('[data-test="make-random-color-btn"]').simulate('click')
    expect(instance.makeRandomColors).toHaveBeenCalled()
  })

  it('HAPPY: Should check the locked colors', () => {
    jest.spyOn(instance, 'checkLockedColors')
    instance.checkLockedColors(mockColors)
    expect(instance.checkLockedColors).toHaveBeenCalled()
  })

  it('HAPPY: Should be able to handle the lock function', () => {
    let mockLockedColor = '#f12345'
    jest.spyOn(instance, 'handleLock')
    instance.handleLock(mockLockedColor)
    expect(wrapper.state('lockedColors')).toEqual([mockLockedColor])
  })

  it('HAPPY: should map state to props', () => {

    const mockState = {
      projects: mockProjects,
      scheme: 'tetrade',
      colors: mockColors,
      variation:'default'
    };

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(mockState);

  })



})