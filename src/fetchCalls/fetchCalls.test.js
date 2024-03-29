import { serverCall } from './fetchCalls';
import * as mockData from '../mockData';

describe('fetchCalls', () => {

  it('SAD: Should return an error if no params are sent', () => {

  })

  describe('GET projects', () => {
    let mockUrl
    let mockOptions
    let mockPath

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(
            [...mockData.mockProjects]
          )
        })
      );
      mockUrl = `https://pallete-picker-de-pg.herokuapp.com/api/v1/projects`
      mockOptions = { "body": undefined, "headers": { "Content-Type": "application/json" }, "method": "GET" }
      mockPath = 'projects'
    });
    
    it('HAPPY: Should call the fetch with the correct arguements', async () => {
      await serverCall(mockPath)
      expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
    });
    // await serverCall(mockPath);
    
    it('HAPPY: Should return all the projects', async () => {
      const results = await serverCall(mockUrl, mockOptions)
      expect(results).toEqual(mockData.mockProjects)
    })

    // it('SAD: should return a message if no projects found ', async () => {
    //   window.fetch = jest.fn().mockImplementation(() =>
    //     Promise.resolve({
    //       ok: true,
    //       json: () => Promise.resolve(
    //         []
    //       )
    //     })
    //   );
    // })

  })

  describe('GET palettes', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(
            mockData.mockPalettes
          )
        })
      );
    });

    it('HAPPY: Should call the fetch with the correct arguments', async () => {
      const mockUrl = `https://pallete-picker-de-pg.herokuapp.com/api/v1/palettes`
      const options = { "body": undefined, "headers": { "Content-Type": "application/json" }, "method": "GET" }
      const mockPath = 'palettes'
      await serverCall(mockPath);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl, options);
    });

    it('HAPPY: should return all the palettes', async () => {

    })

  })

  describe('GET single Palette', () => {
    
    it('HAPPY: Should call the fetch with the correct arguments', async () => {
      const mockUrl = `https://pallete-picker-de-pg.herokuapp.com/api/v1/palettes/1`
      const options = { "body": undefined, "headers": { "Content-Type": "application/json" }, "method": "GET" }
      const mockPath = 'palettes/1'
      await serverCall(mockPath);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl, options);
    });

    it('HAPPY:should find the single palette specified', () => {
      const mockPath = 'https://pallete-picker-de-pg.herokuapp.com/api/v1/palettes'

    })

    it('SAD: Should return an error if no palette with matching ID', async () => {

    })

  })

  describe('POST to palletes', () => {

    it('HAPPY: Should call the fetch with the correct arguments', async () => {

    });

    it('HAPPY: Should post to the pallettes', async () => {

    })

    it('SAD: Should return an error if there is a missing value', async () => {

    })

  })

  describe('POST to projects', () => {

    it('HAPPY: Should post a project', () => {

    })

    it('SAD: Should return an error if no name has been sent', () => {

    })

  })

  describe('DELETE a palette', () => {

    it('HAPPY: Should delete a palette', () => {

    })

    it('SAD: Should return an error if no palette matches', () => {

    })

  })

  describe('DELETE a project', () => {

    it('HAPPY: Should delete a project', () => {

    })

    it('SAD: Should return an error if no project found', () => {

    })

  })

  describe('DELETE a palette', () => {

    it('HAPPY: Should delete a palette', () => {

    })

    it('SAD: Should return an error if no palette matches', () => {

    })

  })

  describe('DELETE a project', () => {

    it('HAPPY: Should delete a project', () => {

    })

    it('SAD: Should return an error if no project found', () => {

    })

  }) 

});