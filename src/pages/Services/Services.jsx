// froim react redux

import { useSelector, useDispatch } from 'react-redux'

// css 
import './Services.css'
// butttn

import Button from '../../components/Button/Button'

// fetch todos
import { fetchTodos } from '../../features/Todos/TodosSlice'

// Services page
export default function Services() {
const {loading ,error,data}=useSelector(state=>state.fetchData)

console.log(data);

const dispatch = useDispatch()
  


// loaading and error showing cart
if (error) return <h1 className='text-center '>Something Went Wrong Check Your Internet Connection Please</h1>
if (loading) return <h1>Loading ....</h1>

  return (
    <>
      <div className="container">


  

        <Button onClick={()=>dispatch(fetchTodos())} className="bg-blue-700 text-white  p-5 rounded cursor-pointer" >Fetch Todos</Button>
      </div>
    </>
  )
}
