import { CounterContext } from "../../context/CounterContext/CounterContext";
import { useContext} from "react";
import Button from "../../components/Button/Button";

// custom hook
import useFetch from "../../hooks/useFetch/useFetch";
import "../../style/global.css";

export default function About() {
     // context code.
  const { state, dispatch } = useContext(CounterContext);

  // Button class for all button
   const buttonClass = "bg-amber-900 w-2/18 shadow-sky-50 rounded p-2.5 h-9 cursor-pointer";

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
