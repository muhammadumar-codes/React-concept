import { createSlice } from '@reduxjs/toolkit'

const initial = {
  value: 0,
}

const CounterSlice = createSlice({
  // name of the slice{
  name: 'counter',
  initialState: initial,
  reducer: {
    increment: (state) => {
      state.value + 1
    },

    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 0
    },
    custom: (state, action) => {
      state.value += action.va
    },
  },
})
export const { increment, decrement, reset, custom } = CounterSlice.actions
export default CounterSlice.reducer
