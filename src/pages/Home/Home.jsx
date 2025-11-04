// Home.jsx
import "./Home.css";
import { CounterContext } from "../../context/CounterContext/CounterContext";
import { useContext } from "react";
import { type } from "../../context/CounterContext/CounterContext";

export default function Home() {
  const { state, dispatch } = useContext(CounterContext);
  console.log("The parent Renders")

  return (
    <div className="super-container">
        <h4>{type.name}</h4>
      <div className="container">
        <div className="counter-display">{state.count}</div>
        <div className="button-group">
          <button onClick={() => dispatch({ type: type.increment ,names:"Muhammad  Umar" })}>+</button>
          <button onClick={() => dispatch({ type: type.decrement })}>−</button>
          <button onClick={() => dispatch({ type:type.reset })}>Reset</button>
          <button onClick={() => dispatch({ type:type.custom ,payload:34 })}>Custom</button>
        </div>
      </div>
    </div>
  );
}
