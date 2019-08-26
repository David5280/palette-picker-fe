export const errorReducer = (state = '', action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.errorMessage;
    case 'CLEAR_ERROR':
      return '';
    default:
      return state;
  }
};