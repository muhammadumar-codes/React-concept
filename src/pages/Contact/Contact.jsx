import './contact.css'
import useFetch from '../../hooks/useFetch/useFetch'
import ProfessionalLoader from '../../components/Loader/Loader'
import ApiError from '../../components/Error/Error'
import Button from '../../components/Button/Button'

export default function Contact() {
  const reload = () => {
    window.location.reload()
  }

  const { users, loading, error, refetch } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  )

  // Show loader while loading
  if (loading) {
    return (
      <ProfessionalLoader 
        message="Loading User Data"
        subMessage="Fetching your information from the server"
      />
    )
  }

  // Show error component if there's an error
  if (error) {
    return (
      <ApiError 
        error={error}
        onRetry={refetch}
        statusCode={500}
      />
    )
  }

  // Safe rendering of users data
  const renderUsers = () => {
    // Check if users is an array and has items
    if (!users || !Array.isArray(users)) {
      return (
        <div className="no-users">
          <h2>Data format error</h2>
          <p>Expected array but got: {typeof users}</p>
        </div>
      )
    }

    if (users.length === 0) {
      return (
        <div className="no-users">
          <h2>No users found</h2>
        </div>
      )
    }

    return users.map((item) => (
      <div key={item.id} className="user-card">
        <h2 className="user-name">{item.name}</h2>
        <p className="user-email">Email: {item.email}</p>
        <p className="user-phone">Phone: {item.phone}</p>
        <p className="user-website">Website: {item.website}</p>
        <div className="user-address">
          <p>Address: {item?.address?.street}, {item?.address?.city}</p>
        </div>
        <p className="user-company">Company: {item?.company?.name}</p>
      </div>
    ))
  }

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Users</h1>
        <Button onClick={reload} className="refresh-btn">
          Refresh Page
        </Button>
      </div>
      
      <div className="data-container">
        {renderUsers()}
      </div>
    </div>
  )
}