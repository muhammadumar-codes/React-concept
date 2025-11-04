import "./contact.css"
import useFetch from "../../hooks/useFetch/useFetch"

export default function Contact() {


const {users, loading, error}=useFetch("https://jsonplaceholder.typicode.com/users")

if (users) console.log(users)

if (loading) return <h1>Loading ...</h1>
if (error) return <h1>something Went Wrong</h1>

// return on ui

return (
  <>
 <div className="data-container">
  {
  users ? users.map(item=><><div className="user"><h1>Name {item.name} </h1> <h4>Email :{item.email}</h4></div></>):<h1>Error in Users Data</h1>

 }
 </div>

  
  </>
)
  
}
