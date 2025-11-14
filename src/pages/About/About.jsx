import { CounterContext } from "../../context/CounterContext/CounterContext";
import { useContext, useEffect } from "react";
import Button from "../../components/Button/Button";
import useFetch from "../../hooks/useFetch/useFetch";
import "../../style/global.css";

export default function About() {
      
  const { state, dispatch } = useContext(CounterContext);
  // using custom hook to fetch data
  const { users, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");



  const buttonClass = "bg-amber-900 w-2/18 shadow-sky-50 rounded p-2.5 h-9 cursor-pointer";

  if (loading) return <h1>Loading Please wait ...</h1>
  if (error) return <h1>Something Went Wrong ..</h1>

  return (
    <div className="super-container">
      <div className="container">
        <div className="counter-display">{state.count}</div>
        <div className="Button-group">
          <Button className={buttonClass} onClick={() => dispatch({ type: "INCREMENT" })}>+</Button>
          <Button className={buttonClass} onClick={() => dispatch({ type: "DECREMENT" })}>−</Button>
          <Button className={buttonClass} onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
        </div>
      </div>
    </div>
  );
}
