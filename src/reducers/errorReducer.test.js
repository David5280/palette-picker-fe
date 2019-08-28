import { errorReducer } from './errorReducer';

describe('errorReducer', () => {

  it('should return an initial state', () => {
    const expected = '';
    const result = errorReducer(undefined, true);
    expect(result).toEqual(expected);
  });
  
  it('should update state.error if hasErrored fires', () => {
    const state = '';
    const error = 'Error doing things'
    const action = {
      type: 'HAS_ERRORED',
      error
    }
    expect(state).toEqual('')
    const result = errorReducer(state, action);
    expect(result).toEqual('Error doing things')
  });
});