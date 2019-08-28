import { loadingReducer } from './loadingReducer';

describe('loadingReducer', () => {
  it('should return an initial state', () => {
    const expected = true;
    const result = loadingReducer(undefined, true);
    expect(result).toEqual(expected);
  });
  it('should update state.loading after LOAD_COMPLETE', () => {
    const state = true;
    const action = {
      type: 'LOAD_COMPLETE',
    };;
    expect(state).toEqual(true);
    const result = loadingReducer(state, action);
    expect(result).toEqual(false);
  });
});
