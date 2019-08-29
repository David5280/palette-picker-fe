import { paletteReducer } from './paletteReducer';

describe('paletteReducer', () => {
  it('should return an initial state', () => {
    const expected = {
      colorScheme:'triade',
      colorVariation:'default'
    };
    const result = paletteReducer(undefined, {})
    expect(result).toEqual(expected)
  });
  it('should update store.colors with a single palette when STORE_PALETTE fires', () => {
    const state = {
      colorScheme:'triade',
      colorVariation:'default'
    };
    const palette = ['#AAAAAA', '#BBBBBB', '#CCCCCC', '#DDDDDD', '#EEEEEE'];
    const expected = {
      colorScheme:'triade',
      colorVariation:'default',
      colors: ['#AAAAAA', '#BBBBBB', '#CCCCCC', '#DDDDDD', '#EEEEEE']
    };
    const action = {
      type: 'STORE_PALETTE',
      palette
    }
    const result = paletteReducer(state, action);
    expect(result).toEqual(expected);
  });
  it('it should update state.scheme when CHANGE_SCHEME fires', () => {
    const state = {
      colorScheme:'triade',
      colorVariation:'default'
    };
    const scheme = 'newerScheme'
    const action = {
      type: 'CHANGE_SCHEME',
      scheme
    };
    const expected = {
      colorScheme:'newerScheme',
      colorVariation:'default'
    };
    const result = paletteReducer(state, action);
    expect(result).toEqual(expected);
  });
  it('it should update state.variation when CHANGE_VARIATION fires', () => {
    const state = {
      colorScheme:'triade',
      colorVariation:'default'
    };
    const variation = 'VARIATEDDDbroo'
    const action = {
      type: 'CHANGE_VARIATION',
      variation
    };
    const expected = {
      colorScheme:'triade',
      colorVariation:'VARIATEDDDbroo'
    }
    const result = paletteReducer(state, action);
    expect(result).toEqual(expected);
  });
});