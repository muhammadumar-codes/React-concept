import { useState, useEffect } from 'react'
import axios from 'axios'

function useFetch(url) {
  // states
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  //Fetch on on Mount update
  useEffect(() => {
    async function fetchData() {
      if (!url) {
        alert('Please Provide the Api')
      }
      try {
        const response = await axios.get(url)
        setUsers(response.data)

        setLoading(false)
        setError(false)
      } catch (error) {
        console.log(error)
        setError(true)
        setLoading(false)
      }
    }
    // calling fetching Data fun
    fetchData()
  }, [url])

  //  getting the states in compoenents
  return { users, loading, error }
}

export default useFetch
