import { useState, useEffect } from 'react'
import axios from 'axios'

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url)
        const result = await response.data
        setData(result)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
        setError(true)
      }
    }
    fetchData()
  })

  return { data, loading, error }
}
