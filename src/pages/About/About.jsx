

import { CounterContext } from "../../context/CounterContext/CounterContext";
import {  useContext } from "react";

import Button from "../../components/Button/Button";

// custom hook
import useFetch from "../../hooks/useFetch/useFetch";

export default function About() {
  const { state, dispatch } = useContext(CounterContext);
  const {users,loading, error }=useFetch("https://jsonplaceholder.typicode.com/users")

  if (loading) return <h1>Loading Please wait ...</h1>
  if(error) return <h1>Something Went Wrong ..</h1>
  if (users) console.log(users)

  return (
    <div className="super-container">
      <div className="container">
        <div className="counter-display">{state.count}</div>
        <div className="Button-group">
          <Button  className="btn"onClick={() => dispatch({ type: "INCREMENT" })}>+</Button>
          <Button  className="btn"onClick={() => dispatch({ type: "DECREMENT" })}>−</Button>
          <Button className="btn" onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
        </div>
      </div>
    </div>
  );
}
