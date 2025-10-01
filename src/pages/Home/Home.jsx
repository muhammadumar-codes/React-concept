// reducers
import "./Home.css";
import {watchContext} from "../../components/DataContext/Datacontext"
import { useContext } from "react";

export default function Home() {
const {state ,dispatch}=useContext(watchContext);


 return (
    <>
    <div className="super-container">
       <div className="container">
         <h1>Count : {state.count}</h1>
    <div>  <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button></div>
       </div>
    </div>
    </>
  );
}
