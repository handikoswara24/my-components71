import React, { useState } from 'react'
import "../App.css"

const MyComponent = () => {
  const [name, setName] = useState("");
  return (
    <div className='test'><input type='text' value={name} onChange={(e) => setName(e.target.value)} /></div>
  )
}

export default MyComponent