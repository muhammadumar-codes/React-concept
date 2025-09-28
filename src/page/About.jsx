import { useContext } from "react"
import {countContext} from "../components/CountContext"
export default function About (){
const {count,SetCount}=useContext(countContext)
return (
    <>
    <h1>count :{count}</h1>
    <button onClick={()=>SetCount(count-1)}>Decrease</button>
    </>
)
}
