import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFatchingOne() {

  const [loding, setLoding] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        setLoding(false)
        setPost(res.data)
        setError('')
      })
      .catch(err => {
        setLoding(true)
        setPost({})
        setError('Something went wrong!')
      })
  })

  return (
    <div>
      {loding ? 'Loding' : post.title}
      {error ? error : null}
    </div>
  )
}

export default DataFatchingOne
