import './contact.css'

// Hooks
import useFetch from '../../hooks/useFetch/useFetch'

// Button.
import Button from '../../components/Button/Button'

export default function Contact() {
  // Refresh Button fun

  const reload = () => {
    window.location.reload()
  }

  // logic from useFetch Custom hook
  const { users, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  )

  // users
  if (users) console.log(users)

  // loading
  if (loading) return <h1>Loading ...</h1>

  // Error
  if (error)
    return (
      <>
        <div className="error">
          <h1>Something Went Wrong ...</h1>
          <Button className="btn" onClick={reload}>
            Refresh
          </Button>
        </div>
      </>
    )

  // return on ui

  return (
    <>
      <div className="data-container">
        {users ? (
          users.map((item) => (
            <>
              <div className="user">
                <h1>Name {item.name} </h1> <h4>Email :{item.email}</h4>
              </div>
            </>
          ))
        ) : (
          <h1>Error in Users Data</h1>
        )}
      </div>
    </>
  )
}
