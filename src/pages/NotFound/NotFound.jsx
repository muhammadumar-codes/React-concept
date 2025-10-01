import { useNavigate } from "react-router-dom"

export default function NotFound (){
const  navigate=useNavigate()

const handleNavigate=()=>{
    navigate("/")
}

    return (
        <>
        <h1>NotFound Page</h1>
        <button onClick={handleNavigate}>Back To Home</button>
        </>
    )
}