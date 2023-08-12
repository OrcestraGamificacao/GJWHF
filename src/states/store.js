import { configureStore } from '@reduxjs/toolkit'
import sessionReducer from './sessionSlice'

export default configureStore({
  reducer: {
    session: sessionReducer
  }
})