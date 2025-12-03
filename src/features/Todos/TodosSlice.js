import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
  return response.data
})

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    loading: false,
    data: [],
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.loading = false
        state.error = 'Failed to fetch'
      })
  },
})

export default todosSlice.reducer
