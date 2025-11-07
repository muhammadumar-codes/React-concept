import { configureStore } from '@reduxjs/toolkit'
import reducer from '../features/Counter/CounterSlice'
export const store = configureStore({
  reducer: {
    counter: reducer,
  },
})
