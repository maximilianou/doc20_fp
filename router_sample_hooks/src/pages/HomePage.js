import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return(
    <div className='container' >
      <h1>Home Page</h1>
      <p>
        <Link to="/maximilianou" >maximilianou</Link> on github 
      </p>
      <p>https://www.taniarascia.com/using-react-router-spa/</p>
    </div>
  )
}

export default HomePage


