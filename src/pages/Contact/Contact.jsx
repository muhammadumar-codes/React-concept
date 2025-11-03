
import useCounter from "../../hooks/useCounter/useCounter"

export default function Contact () {
const {increment,decrement,reset,count}=useCounter(0)

  return (
    <>
    <h1 className="count">{count}</h1>
    <button onClick={increment}>Increase</button>
    </>
  )
}
