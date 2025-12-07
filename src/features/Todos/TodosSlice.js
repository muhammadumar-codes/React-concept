import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (url) => {
  const response = await axios.get(url)
  return response.data
})

// Todos slice.
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
        state.data.push(action.payload)
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.loading = false
        state.error = 'Failed to fetch'
      })
  },
})

export default todosSlice.reducer
