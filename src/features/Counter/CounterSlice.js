import { createSlice } from '@reduxjs/toolkit'

const initial = {
  value: 0,
}
const counterSlice = createSlice({
  name: 'counter',
  // use the correct key name expected by createSlice
  initialState: initial,
  // reducers (plural)
  reducers: {
    increment: (state) => {
      state.value += 1
    },

    decrement: (state) => {
      console.log(state.value)
    },

    reset: (state) => {
      state.value = 0
    },
    custom: (state, action) => {
      state.value += action.payload
    },
  },
})
export const { increment, decrement, reset, custom } = counterSlice.actions
export default counterSlice.reducer
