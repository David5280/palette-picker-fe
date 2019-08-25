export const paletteReducer = (state={
  colorScheme:'triade',
  colorVariation:'default'
}, action) => {
  switch (action.type) {
    case 'STORE_PALETTE':
      return { ...state, colors: action.palette }
    case 'CHANGE_SCHEME':
      return {...state, colorScheme: action.scheme}
    case 'CHANGE_VARIATION':
      return {...state, colorVariation: action.variation}
    default:
      return state;
  }
}