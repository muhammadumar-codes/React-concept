// Here we are Creating the custom hook of react
import { useState } from 'react'
const initial = 0

function useCounter() {
  const [count, setCount] = useState(0)

  const increment = setCount((prev) => prev + 1)
  const decrement = setCount((prev) => prev - 1)
  const reset = setCount(0)

  return { increment, decrement, reset }
}

export default useCounter
