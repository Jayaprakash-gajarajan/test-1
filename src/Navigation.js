import React from 'react'
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid text-light">
    <Link className="navbar-brand " to={'/'}>Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/movies'}>Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/addmovie'}>Add Movie</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/tickets'}>Tickets Details</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/theater'}>Theater</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link"to={'/pay'} role="button">
           Payment
          </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to={'/login'}>Login/signup</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navigation
