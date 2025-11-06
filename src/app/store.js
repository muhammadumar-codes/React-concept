import { configureStore } from '@reduxjs/toolkit'
import countReducer from '../features/Counter/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
})
