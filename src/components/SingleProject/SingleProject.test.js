import React from 'react';
import { SingleProject } from './SingleProject';
import { shallow, mount } from 'enzyme';
import { serverCall } from '../../fetchCalls/fetchCalls';
import { mockPalettes, mockProjectPalette } from '../../mockData';
import { Router } from 'react-browser-router';

// jest.mock('../../fetchCalls/fetchCalls', () => ({
//   serverCall: jest.fn().mockImplementation(() => {
//     return [{ id: 1, name: 'title1',  }, { id: 2, title: 'title2' }];
//   })
// }));

describe('SingleProject', () => {
  let wrapper;
  let mockProjectID;
  let instance;
  beforeEach(() => {
    mockProjectID = 3
    wrapper = shallow (
        <SingleProject
          id={mockProjectID}
          palettes={mockPalettes}
        />
    )
    instance = wrapper.instance()
  })

  it('should do match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('HAPPY: Should set the name on CDM', async () => {
    // jest.spyOn(instance, 'serverCall')
    // instance.componentDidMount().then(
    //   expect(wrapper.state('project_name')).toEqual()
    // )
  })

  it('HAPPY: Should delete a project', async () => {
    // wrapper.setState({project_name:"test", palettes:[mockProjectPalette]})
    // jest.spyOn(instance, 'deletePalette')
    // await instance.componentDidMount()
    // console.log()
    
    // // wrapper.find('[data-test="delete-btn-1"]').simulate('click', 1)
    // expect(instance.deletePalette).toHaveBeenCalled();
  })

  it('HAPPY: Should patch a project' ,() => {
    // const e = {
    //   preventDefault: jest.fn(),
    //   target: {
    //     name: 'paletteName',
    //     value: 'NEW PALETTE'
    //   }
    // };
    // jest.spyOn(instance, 'patchProject')
    // wrapper.find('.palette-name-editable').simulate('blur', e)
    // wrapper.instance().savePalette(e);
    // expect(wrapper.instance().savePalette).toHaveBeenCalled();
  })

});