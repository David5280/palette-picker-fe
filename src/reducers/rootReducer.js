import { combineReducers } from 'redux'
import { paletteReducer } from './paletteReducer'
import { projectReducer } from './projectsReducer'
import { isLoadingReducer } from './isLoadingReducer'
import { errorReducer } from './errorReducer'

export const rootRecucer = combineReducers({
  palettes: paletteReducer,
  projects:projectReducer,
  isLoading: isLoadingReducer,
  hasErrored: errorReducer
})