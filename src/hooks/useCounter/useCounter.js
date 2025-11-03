// useCounter.js
import { useState } from 'react'

function useCounter(initial = 0) {
  const [count, setCount] = useState(initial)

  // define functions (not call them immediately)
  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => prev - 1)
  const reset = () => setCount(initial)

  // return everything you want to use
  return { increment, decrement, reset, count }
}

export default useCounter
