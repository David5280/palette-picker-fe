import React from 'react';
import { Color } from './Color';
import { Palette } from '../../containers/Palette/Palette';
import { shallow } from 'enzyme';

describe('Color Container', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<div><Color 
      hexcode={'#ddbbcc'}
      index={1}
      handleLock={jest.fn()}
      icon={'/newIcon.png'}/>
      </div>)
    });
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });
    it('should call handleLock when the button is clicked', () => {
      const colors = ['#frfrfr', '#jtjtjt'];
      const setup = <Palette colors={colors} />
    wrapper.find('.locked-icon').simulate('click');
    expect(wrapper.instance().handleLock).toHaveBeenCalled()
  });
});