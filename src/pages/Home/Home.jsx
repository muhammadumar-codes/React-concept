// Home.jsx
import "./Home.css";
import { CounterContext } from "../../context/CounterContext/CounterContext";
import { useContext } from "react";
// type
import { type } from "../../context/CounterContext/CounterContext";

// Button
import Button from "../../components/Button/Button";

// home page
export default function Home() {
  const { state, dispatch } = useContext(CounterContext);


  return (
    <div className="super-container">
        <h4>{type.name}</h4>
      <div className="counter-container">
        <div className="counter-display">{state.count}</div>
        <div className="Button-group">
          <Button  className="btn" onClick={() => dispatch({ type: type.increment ,names:"Muhammad  Umar" })}>+</Button>
          <Button className="btn" onClick={() => dispatch({ type: type.decrement })}>−</Button>
          <Button  className="btn"onClick={() => dispatch({ type:type.reset })}>Reset</Button>
          <Button  className="btn"onClick={() => dispatch({ type:type.custom ,payload:15 })}>Custom</Button>
        </div>
      </div>
    </div>
  );
}
