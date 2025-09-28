import { createContext } from "react";
import { useState } from "react";

export const countContext=createContext();


// in this we export all filet to all files of react  to  use globallly


export default function CountContextProivder ({children}){
const [count  ,setcount]=useState(0);
return (
    <>
<countContext.Provider value={{count, setcount}}>
{children}
</countContext.Provider>
    
    </>
)

}


