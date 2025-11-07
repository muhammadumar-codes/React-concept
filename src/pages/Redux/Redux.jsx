import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  reset,
  custom,
} from '../../features/Counter/CounterSlice'
import Button from '../../components/Button/Button'
export default function Redux() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <>
      <div className="super-container">
        <div className="counter-container">
          <div className="counter-display"> {count}</div>
          <div className="Button-group">
            <Button className="btn" onClick={() => dispatch(increment())}>
              +
            </Button>
            <Button className="btn" onClick={() => dispatch(decrement())}>
              -
            </Button>
            <Button className="btn" onClick={() => dispatch(reset())}>
              Reset
            </Button>
            <Button className="btn" onClick={() => dispatch(custom(5))}>
              Custom +5
            </Button>
            <Button className="btn" onClick={() => dispatch(custom(10))}>
              Custom +10
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
