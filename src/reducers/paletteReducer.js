export const paletteReducer = (state={
  colorScheme:'triade',
  colorVariation:'soft'
}, action) => {
  switch (action.type) {
    case 'STORE_PALETTE':
      return { ...state, colors: action.palette }
    case 'CHANGE_SCHEME':
      return { ...state.colorScheme = action.scheme }
    default:
      return state;
  }
}