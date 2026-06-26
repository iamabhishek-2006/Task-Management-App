import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
        Home Page
        <Link to="/about">About</Link>
        <Link to="/notes">Notes</Link>
    </div>
  )
}

export default Home;