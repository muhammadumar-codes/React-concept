// src/pages/Home/Home.jsx
import "./Home.css";
import { CounterContext } from "../../context/CounterContext/CounterContext";
import { useContext } from "react";
import { type } from "../../context/CounterContext/CounterContext";
import Button from "../../components/Button/Button";

export default function Home() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div className="super-container">
    
      {state.name && <h5>User: {state.name}</h5>}

      <div className="counter-container">
        <div className="counter-display">{state.count}</div>

        <div className="Button-group">
          <Button
            className="btn"
            onClick={() =>
              dispatch({ type: type.increment, payload: "Muhammad Umar" })
            }
          >
            +
          </Button>

          <Button
            className="btn"
            onClick={() => dispatch({ type: type.decrement })}
          >
            −
          </Button>

          <Button
            className="btn"
            onClick={() => dispatch({ type: type.reset })}
          >
            Reset
          </Button>

          <Button
            className="btn"
            onClick={() => dispatch({ type: type.custom, payload: 15 })}
          >
            Custom (15)
          </Button>
        </div>
      </div>
    </div>
  );
}
