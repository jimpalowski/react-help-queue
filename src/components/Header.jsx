import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
  return (
    <div>
      <h1>Help Queue</h1>
      <button className="btn btn-danger" type="submit">Sbu</button>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  )
}

export default Header
