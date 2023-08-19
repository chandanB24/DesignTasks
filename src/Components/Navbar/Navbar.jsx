import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-2 shadow-sm sticky-top">
    <div className="container-fluid">
      <Link to='/' className='navbar-brand'>DesignTasks</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to='/' className='nav-link active'>DraggableCards</Link>
          </li>
          <li className="nav-item">
            <Link to='/highlight' className='nav-link active'>HighlightingCards</Link>
          </li>
          <li className="nav-item">
            <Link to='/cards' className='nav-link active'>Cards</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar