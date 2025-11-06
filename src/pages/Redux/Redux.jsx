
import {useSelector, useDispatch} from "react-redux";
import { increment,decrement,reset,custom } from "../../features/Counter/CounterSlice";

export default  function Redux(){
const dispatch=useDispatch();
const count=useSelector((state)=>state.counter.value);

    return (
        <>
        <h1>Counter :{count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        <button onClick={()=>dispatch(custom(5))}>Custom +5</button>    
        <button onClick={()=>dispatch(custom(10))}>Custom +5</button>    
        
        </>
    )
}