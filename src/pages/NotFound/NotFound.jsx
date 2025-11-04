import { useNavigate } from "react-router-dom"
//components
import Button from "../../components/Button/Button"

export default function NotFound (){
const  navigate=useNavigate()


// navigate.
const handleNavigate=()=>{
    navigate("/")
}

    return (
        <>
        <h1>NotFound Page</h1>
        <Button className="btn" onClick={handleNavigate} >Back Home</Button>
     
        </>
    )
}