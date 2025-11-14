// src/pages/Home/Home.jsx
import './Home.css'
// counter  context
import { CounterContext } from '../../context/CounterContext/CounterContext'
import { useContext, useMemo } from 'react'
import { type } from '../../context/CounterContext/CounterContext'

// COMPONENTS
import Button from '../../components/Button/Button'
import Child from '../../components/child/Child'






// Home page
export default function Home() {


  console.log("The Parent is Rendering")

  


  const Memoized=useMemo(() => {
    <Child user={[3]} />
  }, [])
  
  const { state, dispatch } = useContext(CounterContext)

  return (
    <div className="super-container">
      <div className="counter-container">
        <div className="counter-display">{state.count}</div>

        <div className="Button-group">
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
            Custom (15)
          </Button>
        </div>
      </div>

      <div className="child-container">
        {Memoized}

    
      </div>  
    </div>



  )
}
