import { configureStore } from '@reduxjs/toolkit'
import clasifficationTableReducer from './slices/ClassificationTable'

export default configureStore({
  reducer: {
    clasifficationTable: clasifficationTableReducer,
  },
})
