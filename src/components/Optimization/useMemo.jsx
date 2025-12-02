// Here usingn the Usememo
// import { useMemo } from "react"

import { type } from "../../context/CounterContext/CounterContext";

export default function Child({name}){

    console.log("The Child useMemo is Rendring");
    return (
        <>
        <button className="bg-black text-white font-bold   h-9 rounded-b-2xl" onClick={()=>setCount({type:type.increment})}>Increment</button>
        <h1>Username :{name.name}</h1>
        </>
    )
    
   
}