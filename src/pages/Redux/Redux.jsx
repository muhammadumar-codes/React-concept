import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  reset,
  custom,
} from '../../features/Counter/CounterSlice'

import styles from "./Redux.module.css"

import Button from '../../components/Button/Button'




export default function Redux() {
  const dispatch = useDispatch()

  const count=useSelector((state)=>{

    return state.counter.value
  })


  return (
    <>
      <div className={styles.superContainer}>
        <div className={styles.counterContainer}>
          <div className={styles.countDisplay}> {count}</div>
          <div className={styles.buttonGroup}>
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
