import { useContext } from "react"
import {countContext} from "../components/CountContext"
export default function Home (){
const {count,setcount}=useContext(countContext);
console.log(import.meta.env.VITE_API_NAME)
    return <>
   <h2>{import.meta.env.VITE_API_NAME}</h2>
    <h1>CounterApp</h1>
    <h1>Count: {count}</h1>
    <button onClick={()=>setcount(count+1)}>Increase</button>

    </>
}