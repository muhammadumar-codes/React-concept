
import { CounterContext } from "../../context/CounterContext/CounterContext";
import { useContext } from "react";

export default function Home() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div className="super-container">
      <div className="container">
        <div className="counter-display">{state.count}</div>
        <div className="button-group">
          <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>−</button>
          <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
      </div>
    </div>
  );
}
