// src/pages/Home/Home.jsx
import { useContext, useMemo } from 'react'


import styles from './Home.module.css'

// counter context
import {
  CounterContext,
  type,
} from '../../context/CounterContext/CounterContext'

// components
import Button from '../../components/Button/Button'
import Child from '../../components/Optimization/useMemo'



export default function Home() {
  const { state, dispatch } = useContext(CounterContext)




  return (
    <>
      <div className={styles.superContainer}>
        {/* Counter Section */}
        <div className={styles.counterContainer}>
          <h2 className={styles.countDisplay}>Count: {state.count}</h2>

          <div className={styles.buttonGroup}>
            <Button
              className="btn"
              onClick={() =>
                dispatch({ type: type.increment, payload: 'Muhammad Umar' })
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
              Custom +15
            </Button>
          </div>

       {/* <Child  setCount={dispatch}/> */}
        </div>
      </div>
    </>
  )
}
