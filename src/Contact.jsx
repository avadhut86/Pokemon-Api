import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const {name} = useParams()
  return (
    <div>
        <h1>This {name} Page</h1>
    </div>
  )
}

export default Contact