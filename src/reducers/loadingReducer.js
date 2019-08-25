export const loadingReducer = (state = true, { type }) => {
  switch (type) {
    case 'LOAD_COMPLETE':
      return false;
    default:
      return state;
  }
};