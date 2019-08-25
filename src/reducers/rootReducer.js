import { combineReducers } from 'redux'
import { paletteReducer } from './paletteReducer'
import { projectsReducer } from './projectsReducer'
import { loadingReducer } from './loadingReducer'
import { errorReducer } from './errorReducer'

export const rootReducer = combineReducers({
  palettes: paletteReducer,
  projects:projectsReducer,
  isLoading: loadingReducer,
  hasErrored: errorReducer
})