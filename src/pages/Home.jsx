import { useContext } from "react";
import {countContext} from "../countContext"
export default function Home() {
const {count,setCount}=useContext(countContext);

  return <>
  
  <h1>count :{count}</h1>
  <button onClick={()=>setCount(count+1)}>Increase</button>
  
  
  </>;
}
