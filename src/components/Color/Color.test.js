import React from 'react';
import { Color } from './Color';
import { Palette } from '../../containers/Palette/Palette';
import { shallow, mount } from 'enzyme';
import { mockColors, mockProjects } from '../../mockData';

describe('Color Component', () => {
  let wrapper;
  let instance;
  let mockHandleLock
  beforeEach(() => {
    // mockHandleLock = jest.fn().mockImplementation(() => Promise.resolve(['#fff']));
    wrapper = mount(
        <Color 
        hexcode={'#ddbbcc'}
        index={1}
        handleLock={mockHandleLock}
        icon={'/newIcon.png'}
        />
    )
    instance = wrapper.instance()
    });
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });
    it('should call handleLock when the button is clicked', () => {
      // const colors = ['#frfrfr', '#jtjtjt'];
      // const setup = shallow(
      //   <Palette 
      //     scheme={'tetrade'}
      //     variation={"default"}
      //     colors={mockColors}
      //     projects={mockProjects} 
      //     storePalette={jest.fn()}
      //     changeScheme={jest.fn()}
      //     changeVariation={jest.fn()}
      //   />
      // )
      // jest.spyOn(instance, 'handleLock')
      // wrapper.find('.locked-icon').simulate('click');
      // expect(wrapper.instance().handleLock).toHaveBeenCalled()
  });
});