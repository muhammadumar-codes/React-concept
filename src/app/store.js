import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/Counter/CounterSlice'
import todosReducer from '../features/Todos/TodosSlice'

// store

export const store = configureStore({
  reducer: {
    fetchData: todosReducer,
    counter: counterReducer,
  },
})
