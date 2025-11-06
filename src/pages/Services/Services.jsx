// Services.jsx
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../features/Counter/CounterSlice";
import "./Services.css";
import Button from "../../components/Button/Button";

export default function Services() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(count)

  return (
    <div className="container-counter-redux">
      <h1 className="title">Redux Toolkit Counter</h1>
      <h2 className="count-display">{count}</h2>

      <div className="btn-counter">
        <Button className="btn" onClick={() => dispatch(increment())}>+</Button>
        <Button className="btn" onClick={() => dispatch(decrement())}>−</Button>
        <Button className="btn" onClick={() => dispatch(reset())}>Reset</Button>
      </div>
    </div>
  );
}
